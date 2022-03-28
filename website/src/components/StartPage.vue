<template>
  <div id="container" ref="container">
    <div id="blocker" ref="blocker">
      <CookiesPopup />
      <div
        id="instructions"
        ref="instructions"
        @mouseup="initPointerLockControls()"
        @touchend="initTouchControls()"
      >
        <p>
          Click Me! <br />
          Move: WASD <br />
          Look: MOUSE
        </p>
      </div>
    </div>
    <div id="joystick_zone" ref="joystick_zone" />
  </div>
</template>

<script>
// libraries
import nipplejs from 'nipplejs';
import * as THREE from 'three';

import CookiesPopup from './CookiesPopup.vue';

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
      this.blocker = this.$refs.blocker;
      this.instructions = this.$refs.instructions;

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
      this.mouse = new THREE.Vector2();
      this.raycaster = new THREE.Raycaster();

      // Scene
      this.scene = new THREE.Scene();

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

      this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);
      this.pmremGenerator.fromScene(this.scene);

      // Registering Event Listeners
      window.addEventListener('resize', this.onWindowResize);
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
      this.initLighting();
    },
    initLighting() {
      const ambientLigth = new THREE.AmbientLight(16777215, 0.1);
      ambientLigth.name = 'ambient_light';

      const directionalLight = new THREE.DirectionalLight(16777215, 0.4);
      directionalLight.position.set(0, 10, 20);
      directionalLight.name = 'main_light';

      this.scene.add(ambientLigth, directionalLight);
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
    initPointerLockControls() {
      if (this.controls instanceof PointerLockControls) {
        console.log('lol1');
        this.controls.lock();
        return;
      }

      this.controls = new PointerLockControls(
        this.camera,
        this.renderer.domElement
      );

      this.controls.addEventListener(
        'lock',
        () => {
          this.blocker.style.display = 'none';
          this.instructions.style.display = 'none';
        },
        false
      );

      this.controls.addEventListener(
        'unlock',
        () => {
          this.blocker.style.display = 'block';
          this.instructions.style.display = '';
        },
        false
      );

      document.addEventListener('keydown', this.onKeyDown, false);
      document.addEventListener('keyup', this.onKeyUp, false);

      this.renderer.domElement.addEventListener(
        'mousemove',
        this.onMouseMove,
        false
      );

      this.renderer.domElement.addEventListener('click', (event) => {
        if (this.doesArcadeIntersect(event)) {
          this.$router.push(
            this.intersectsArcade[0].object.parent.name.replace('Arcade', '')
          );
        }
      });

      this.initCamera();
      console.log('lol');

      this.controls.lock();
    },
    initTouchControls() {
      if (this.controls instanceof TouchControls) {
        this.controls.lock();
        return;
      }

      const joystickOptions = {
        mode: 'static',
        position: { left: '50%', bottom: '50%' },
        zone: this.$refs.joystick_zone,
      };

      this.controls = new TouchControls(this.camera, this.renderer.domElement);

      this.controls.addEventListener(
        'lock',
        () => {
          this.blocker.style.display = 'none';
          this.instructions.style.display = 'none';

          this.joystick = nipplejs.create(joystickOptions);
          this.joystick
            .on('move', (event, joystick) =>
              this.onJoystickMovement(event, joystick)
            )
            .on('end', () => {
              this.moveBackward = false;
              this.moveForward = false;
              this.moveLeft = false;
              this.moveRight = false;
            });
        },
        false
      );

      this.controls.addEventListener(
        'unlock',
        () => {
          this.blocker.style.display = 'block';
          this.instructions.style.display = '';

          this.joystick.destroy();
        },
        false
      );

      this.renderer.domElement.addEventListener(
        'touchstart',
        () => (this.drag = false)
      );

      this.renderer.domElement.addEventListener(
        'touchmove',
        () => (this.drag = true)
      );

      this.renderer.domElement.addEventListener('click', (event) => {
        if (this.drag === false && this.doesArcadeIntersect(event)) {
          this.controls.unlock();
          this.$router.push(
            this.intersectsArcade[0].object.parent.name.replace('Arcade', '')
          );
        }
      });

      this.initCamera();
      this.controls.lock();
      console.log(this.controls);
    },
    initCamera() {
      this.camera.position.set(12, 6, 12);
      this.camera.lookAt(0, 6, 0);
    },
    animation() {
      if (this.controls === undefined) {
        return;
      }

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
    doesArcadeIntersect(event) {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      this.intersectsArcade = this.raycaster.intersectObjects(this.arcades);

      return this.intersectsArcade.length > 0;
    },
    initInteractiveObjects(child) {
      if (/^Arcade/.test(child.name)) {
        this.arcades.push(child);
      }
    },
    loadGltf(gltf) {
      gltf.scene.traverse(this.initInteractiveObjects);

      this.scene.add(gltf.scene);
    },
    onJoystickMovement(event, joystick) {
      this.moveForward = false;
      this.moveBackward = false;
      this.moveLeft = false;
      this.moveRight = false;

      switch (Math.floor((joystick.angle.degree + 22.5) / 45)) {
        case 1:
          this.moveForward = true;
          this.moveRight = true;
          break;
        case 2:
          this.moveForward = true;
          break;
        case 3:
          this.moveForward = true;
          this.moveLeft = true;
          break;
        case 4:
          this.moveLeft = true;
          break;
        case 5:
          this.moveBackward = true;
          this.moveLeft = true;
          break;
        case 6:
          this.moveBackward = true;
          break;
        case 7:
          this.moveBackward = true;
          this.moveRight = true;
          break;
        default:
          this.moveRight = true;
          break;
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
      if (this.doesArcadeIntersect(event)) {
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
  components: {
    CookiesPopup,
  },
};
</script>

<style scoped>
#blocker {
  background-color: #282a36;
  position: absolute;
  width: 100%;
  height: 100%;
}

#instructions {
  color: #f8f8f2;
  cursor: pointer;
  height: 100%;
  width: 100%;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#joystick_zone {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 25%;
  width: 50%;
}
</style>
