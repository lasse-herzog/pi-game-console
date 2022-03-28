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
// libraries
import nipplejs from 'nipplejs';
import * as THREE from 'three';

// threejs stuff
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshReflectorMaterial } from '../MeshReflectorMaterial';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { TouchControls } from '../TouchControls';

// post-processing
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';

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

      // Camera
      this.camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        50
      );

      // Renderer
      this.renderer = new THREE.WebGLRenderer();

      this.initScene();
      this.initRenderer();
      this.initPostProcessing();
      this.initControls();

      this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);
      this.pmremGenerator.fromScene(this.scene);

      // Registering Event Listeners
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
    },
    initControls() {
      const blocker = this.$refs.blocker;
      const instructions = this.$refs.instructions;
      const joystickOptions = {
        mode: 'static',
        position: { left: '10%', bottom: '10%' },
        zone: this.$refs.container,
      };

      if (this.isTouchEnabled === true) {
        this.controls = new TouchControls(
          this.camera,
          this.renderer.domElement
        );
      } else {
        this.controls = new PointerLockControls(
          this.camera,
          this.renderer.domElement
        );
      }

      this.controls.getObject().position.set(12, 6, 12);

      this.controls.addEventListener(
        'lock',
        () => {
          blocker.style.display = 'none';
          instructions.style.display = 'none';

          if (this.isTouchEnabled === true) {
            this.joystick = nipplejs.create(joystickOptions);
            this.joystick.on('move', (event, joystick) =>
              this.onJoystickMovement(event, joystick)
            );
          }
        },
        false
      );

      this.controls.addEventListener(
        'unlock',
        () => {
          blocker.style.display = 'block';
          instructions.style.display = '';

          if (this.isTouchEnabled === true) {
            this.joystick.destroy();
          }
        },
        false
      );

      this.scene.add(this.controls.getObject());
    },
    initPostProcessing() {
      const pixelRatio = this.renderer.getPixelRatio();
      const renderScene = new RenderPass(this.scene, this.camera);

      this.fxaaPass = new ShaderPass(FXAAShader);
      const bloomPass = new UnrealBloomPass({
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
        strength: 0.7,
        radius: 0.1,
        threshhold: 0.1,
      });

      this.fxaaPass.material.uniforms['resolution'].value.x =
        1 / (this.container.offsetWidth * pixelRatio);
      this.fxaaPass.material.uniforms['resolution'].value.y =
        1 / (this.container.offsetHeight * pixelRatio);

      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(renderScene);
      this.composer.addPass(this.fxaaPass);
      this.composer.addPass(bloomPass);
    },
    initScene() {
      // Loading Blender Model
      let loader = new GLTFLoader();
      loader.load(
        './Arcade.glb',
        this.loadGltf,
        // called while loading is progressing
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        // called when loading has errors
        (error) => {
          console.log(error.message);
        }
      );
      const floorGeometry = new THREE.PlaneGeometry(35, 35);
      const floorMaterial = new THREE.MeshBasicMaterial({
        color: 0,
        transparent: true,
        opacity: 0.95,
      });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);

      floor.rotateX(-Math.PI / 2);
      floor.position.y = 0.5;

      this.floorReflector = new THREE.Mesh(floorGeometry, floorMaterial);
      this.floorReflector.rotateX(-Math.PI / 2);
      this.floorReflector.position.y = 0.45;
      this.floorReflector.material = new MeshReflectorMaterial(
        this.renderer,
        this.camera,
        this.scene,
        this.floorReflector
      );

      this.scene.add(floor, this.floorReflector);
      this.addLights();
    },
    initRenderer() {
      this.renderer.physicallyCorrectLights = true;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      //this.renderer.toneMapping = THREE.ReinhardToneMapping;
      this.renderer.setAnimationLoop(this.animation);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.container.appendChild(this.renderer.domElement);
    },
    addLights() {
      const ambientLigth = new THREE.AmbientLight(16777215, 0.1);
      ambientLigth.name = 'ambient_light';

      const directionalLight = new THREE.DirectionalLight(16777215, 0.4);
      directionalLight.position.set(0, 10, 20);
      directionalLight.name = 'main_light';

      this.scene.add(ambientLigth, directionalLight);
    },
    animation() {
      const direction = new THREE.Vector3();
      const time = performance.now();

      if (this.controls.isLocked === true) {
        const delta = (time - this.prevTime) / 1000;

        this.velocity.z -= this.velocity.z * 10 * delta;
        this.velocity.x -= this.velocity.x * 10 * delta;

        direction.z = Number(this.moveForward) - Number(this.moveBackward);
        direction.x = Number(this.moveRight) - Number(this.moveLeft);
        direction.normalize();

        if (this.moveForward || this.moveBackward)
          this.velocity.z -= direction.z * 200 * delta;
        if (this.moveLeft || this.moveRight)
          this.velocity.x -= direction.x * 200 * delta;

        this.controls.moveForward(-this.velocity.z * delta);
        this.controls.moveRight(-this.velocity.x * delta);

        this.floorReflector.material.update();
        this.composer.render();
      }

      this.prevTime = time;
    },
    initInteractiveObjects(child) {
      if (/^Arcade/.test(child.name)) {
        this.arcades.push(child);
      }
    },
    isTouchEnabled() {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    },
    loadGltf(gltf) {
      this.arcade = gltf.scene;
      this.arcade.traverse(this.initInteractiveObjects);

      this.scene.add(this.arcade);
    },
    lockControls() {
      this.controls.lock();
    },
    onJoystickMovement(event, joystick) {
      console.log(joystick);
      if (joystick.direction.x == 'left') {
        this.moveLeft = true;
        this.moveRight = false;
      } else if (joystick.direction.x == 'right') {
        this.moveLeft = false;
        this.moveRight = true;
      }

      if (joystick.direction.y == 'up') {
        this.moveForward = true;
        this.moveBackward = false;
      } else if (joystick.direction.x == 'down') {
        this.moveForward = false;
        this.moveBackward = true;
      }
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
        this.intersectsArcade[0].object.parent.children[2].material.emissive.set();
      }
    },
    onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(width, height);
      this.composer.setSize(width, height);

      const pixelRatio = this.renderer.getPixelRatio();

      this.fxaaPass.material.uniforms['resolution'].value.x =
        1 / (this.container.offsetWidth * pixelRatio);
      this.fxaaPass.material.uniforms['resolution'].value.y =
        1 / (this.container.offsetHeight * pixelRatio);
    },
  },
};
</script>

<style scoped>
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
