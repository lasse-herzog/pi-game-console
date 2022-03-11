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
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import { MeshReflectorMaterial } from '../MeshReflectorMaterial';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

// post-processing
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

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

      this.prevTime = performance.now();
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
      this.camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        50
      );
      this.camera.position.set(12, 5, 12);

      // loading Blender Model
      const loader = new GLTFLoader();

      loader.load(
        './Arcade.glb',
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

      /*const geometry = new THREE.CircleGeometry(40, 64);
      const groundMirror = new Reflector(geometry, {
        clipBias: 0.003,
        textureWidth: window.innerWidth * window.devicePixelRatio,
        textureHeight: window.innerHeight * window.devicePixelRatio,
        color: 0x000000,
      });
      console.log(groundMirror.material);
      groundMirror.material.blending = THREE.AdditiveBlending;
      */

      this.addLights();

      this.initRenderer();

      const geo = new THREE.PlaneGeometry(35, 35);
      const mat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.9,
      });

      const floor = new THREE.Mesh(geo, mat);
      floor.rotateX(-Math.PI / 2);
      floor.position.y = 0.5;

      this.floorReflector = new THREE.Mesh(geo, mat);
      this.floorReflector.rotateX(-Math.PI / 2);
      this.floorReflector.position.y = 0.45;

      this.floorReflector.material = new MeshReflectorMaterial(
        this.renderer,
        this.camera,
        this.scene,
        this.floorReflector
      );

      this.scene.add(floor, this.floorReflector);

      this.initPostProcessing();

      this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);
      this.pmremGenerator.fromScene(this.scene);

      this.controls = new PointerLockControls(
        this.camera,
        this.renderer.domElement
      );

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

      document.addEventListener('keydown', this.onKeyDown, false);
      document.addEventListener('keyup', this.onKeyUp, false);

      this.renderer.domElement.addEventListener('click', () => {
        if (this.intersectsArcade.length > 0) {
          this.$router.push(
            this.intersectsArcade[0].object.parent.name.replace('Arcade', '')
          );
        }
      });

      this.renderer.domElement.addEventListener(
        'mousemove',
        this.onMouseMove,
        false
      );

      window.addEventListener('resize', this.onWindowResize);
      // this.updateEnvironment();
    },
    initRenderer() {
      this.renderer = new THREE.WebGLRenderer({ antialias: true });

      this.renderer.physicallyCorrectLights = true;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      //this.renderer.toneMapping = THREE.ReinhardToneMapping;

      this.renderer.setAnimationLoop(this.animation);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      this.container.appendChild(this.renderer.domElement);
    },
    initPostProcessing() {
      const renderScene = new RenderPass(this.scene, this.camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1,
        0.1,
        0.1
      );

      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(renderScene);
      this.composer.addPass(bloomPass);
    },
    addLights() {
      const light1 = new THREE.AmbientLight(0xffffff, 0.1);
      light1.name = 'ambient_light';
      this.camera.add(light1);

      const light2 = new THREE.DirectionalLight(0xffffff, 0.4);
      light2.position.set(0.5, 0, 0.866); // ~60º
      light2.name = 'main_light';
      this.camera.add(light2);
    },
    animation(prevTime) {
      const direction = new THREE.Vector3();
      const time = performance.now();

      if (this.controls.isLocked === true) {
        const delta = (time - this.prevTime) / 1000;

        this.velocity.z -= this.velocity.z * 10.0 * delta;
        this.velocity.x -= this.velocity.x * 10.0 * delta;

        direction.z = Number(this.moveForward) - Number(this.moveBackward);
        direction.x = Number(this.moveRight) - Number(this.moveLeft);
        direction.normalize(); // this ensures consistent movements in all directions

        if (this.moveForward || this.moveBackward)
          this.velocity.z -= direction.z * 200.0 * delta;
        if (this.moveLeft || this.moveRight)
          this.velocity.x -= direction.x * 200.0 * delta;

        this.controls.moveForward(-this.velocity.z * delta);
        this.controls.moveRight(-this.velocity.x * delta);
      }

      this.prevTime = time;

      this.floorReflector.material.update();
      this.composer.render();
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
      } else if (/^Floor/.test(child.name)) {
        console.log(child);
        child.material.envMap = this.cubeRenderTarget.texture;
        this.cubeCamera.position.copy(child.position);
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
          0xff10f0
        );
      }
    },
    onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      this.camera.updateProjectionMatrix();

      this.renderer.setSize(width, height);
      this.composer.setSize(width, height);
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
