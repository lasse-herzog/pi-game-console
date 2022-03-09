<template>
  <div id="container" ref="container">
    <div id="blocker" ref="blocker">
      <div id="instructions" ref="instructions" @click="lockControls()">
        <p>
          Click Me! <br />
          Move: WASD <br />
          Look: MOUSE
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

THREE.Cache.enabled = true;

export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // UI Elements
      this.container = this.$refs.container;
      const blocker = this.$refs.blocker;
      const instructions = this.$refs.instructions;

      // Regarding Movement
      this.moveForward = false;
      this.moveBackward = false;
      this.moveLeft = false;
      this.moveRight = false;

      this.velocity = new THREE.Vector3();

      // Regarding Interactivity
      this.arcades = [];
      this.intersectsArcade = [];
      this.drag = false;
      this.mouse = new THREE.Vector2();
      this.raycaster = new THREE.Raycaster();

      // Scene
      this.scene = new THREE.Scene();
      this.arcade;

      // Cameras
      // Implement for reflective Floor
      /*const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128, {
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter,
      });*/

      this.camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        50
      );
      this.camera.position.set(12, 5, 12);
      //this.cubeCamera = new THREE.CubeCamera(1, 10000, cubeRenderTarget);
      this.scene.add(this.cubeCamera);

      // loading Blender Model
      const loader = new GLTFLoader();

      loader.load(
        './src/assets/Arcade.glb',
        this.loadGltf,
        // called while loading is progressing
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        // called when loading has errors
        function (error) {
          console.log(error.message);
        }
      );

      this.addLights();

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.physicallyCorrectLights = true;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setAnimationLoop(this.animation);

      this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);
      this.pmremGenerator.fromScene(this.scene);

      this.controls = new PointerLockControls(
        this.camera,
        this.renderer.domElement
      );

      /*
      For Orbitcontrols:
      this.controls.enableZoom = false;
      this.controls.enablePan = false;
      this.controls.enableDamping = true;
      this.controls.rotateSpeed = -0.25;

      this.controls.target.set(
        this.camera.position.x,
        this.camera.position.y,
        this.camera.position.z - 0.01
      );

      this.controls.update();*/

      this.controls.getObject().position.set(12, 6, 12);

      this.controls.addEventListener(
        'lock',
        () => {
          blocker.style.display = 'none';
          instructions.style.display = 'none';
        },
        false
      );

      this.controls.addEventListener(
        'unlock',
        () => {
          blocker.style.display = 'block';
          instructions.style.display = '';
        },
        false
      );

      this.scene.add(this.controls.getObject());
      this.container.appendChild(this.renderer.domElement);

      document.addEventListener('keydown', this.onKeyDown, false);
      document.addEventListener('keyup', this.onKeyUp, false);

      this.renderer.domElement.addEventListener('click', () => {
        if (this.intersectsArcade.length > 0) {
          this.$router.push('test');
        }
      });

      this.renderer.domElement.addEventListener(
        'mousemove',
        this.onMouseMove,
        false
      );

      // this.updateEnvironment();
    },
    addLights() {
      const light1 = new THREE.AmbientLight(0xffffff, 0.0);
      light1.name = 'ambient_light';
      this.camera.add(light1);

      const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
      light2.position.set(0.5, 0, 0.866); // ~60º
      light2.name = 'main_light';
      this.camera.add(light2);
    },
    animation(prevTime) {
      const direction = new THREE.Vector3();
      const time = performance.now();
      // this.controls.update(time);

      if (this.controls.isLocked === true) {
        const delta = (time - prevTime) / 1000;

        this.velocity.z -= this.velocity.z * 10.0 * delta;
        this.velocity.x -= this.velocity.x * 10.0 * delta;

        direction.z = Number(this.moveForward) - Number(this.moveBackward);
        direction.x = Number(this.moveRight) - Number(this.moveLeft);
        direction.normalize(); // this ensures consistent movements in all directions

        if (this.moveForward || this.moveBackward)
          this.velocity.z -= direction.z * 400.0 * delta;
        if (this.moveLeft || this.moveRight)
          this.velocity.x -= direction.x * 400.0 * delta;

        this.controls.moveForward(-this.velocity.z * delta);
        this.controls.moveRight(-this.velocity.x * delta);
      }

      //this.cubeCamera.update(this.renderer, this.scene);
      this.renderer.render(this.scene, this.camera);
    },
    getCubeMapTexture(environment) {
      return new Promise((resolve, reject) => {
        new RGBELoader().load(
          environment,
          (texture) => {
            const envMap =
              this.pmremGenerator.fromEquirectangular(texture).texture;
            this.pmremGenerator.dispose();

            resolve({ envMap });
          },
          undefined,
          reject
        );
      });
    },
    initInteractiveObjects(child) {
      if (/^Arcade/.test(child.name)) {
        this.arcades.push(child);
      }
    },
    loadGltf(gltf) {
      this.arcade = gltf.scene;
      this.arcade.traverse(this.initInteractiveObjects);

      this.scene.add(this.arcade);
    },
    lockControls() {
      this.controls.lock();
    },
    onKeyDown(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          this.moveForward = true;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          this.moveLeft = true;
          break;

        case 'ArrowDown':
        case 'KeyS':
          this.moveBackward = true;
          break;

        case 'ArrowRight':
        case 'KeyD':
          this.moveRight = true;
          break;
      }
    },
    onKeyUp(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          this.moveForward = false;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          this.moveLeft = false;
          break;

        case 'ArrowDown':
        case 'KeyS':
          this.moveBackward = false;
          break;

        case 'ArrowRight':
        case 'KeyD':
          this.moveRight = false;
          break;
      }
    },
    onMouseMove(event) {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);

      this.intersectsArcade = this.raycaster.intersectObjects(this.arcades);

      if (this.intersectsArcade.length > 0) {
        this.intersectsArcade[0].object.parent.children[2].material.emissive.set(
          0xbf40bf
        );
      }
    },
    traverseMaterials(object, callback) {
      object.traverse((node) => {
        if (!node.isMesh) return;
        const materials = Array.isArray(node.material)
          ? node.material
          : [node.material];
        materials.forEach(callback);
      });
    },
    updateEnvironment() {
      const environment = './src/assets/footprint_court_2k.hdr';

      this.getCubeMapTexture(environment).then(({ envMap }) => {
        this.scene.environment = envMap;
      });

      this.traverseMaterials(this.arcade, (material) => {
        if (material.map) material.map.encoding = THREE.sRGBEncoding;
        if (material.emissiveMap)
          material.emissiveMap.encoding = THREE.sRGBEncoding;
        if (material.map || material.emissiveMap) material.needsUpdate = true;
      });
    },
  },
};
</script>

<style scoped>
#container {
  width: 50%;
}

#blocker {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

#instructions {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
</style>
