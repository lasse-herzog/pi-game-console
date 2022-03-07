<template>
  <div id="container" ref="container"></div>
</template>

<script>
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.moveForward = false;
      this.moveBackward = false;
      this.moveLeft = false;
      this.moveRight = false;

      this.velocity = new THREE.Vector3();

      this.arcades = [];
      this.waypoints = [];

      this.intersectsArcade = [];
      this.intersectsWaypoint = [];

      this.container = this.$refs.container;
      this.drag = false;

      this.camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        50
      );
      this.camera.position.set(12, 5, 12);

      this.scene = new THREE.Scene();

      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2();

      const loader = new GLTFLoader();

      loader.load(
        './src/assets/Arcade.gltf',
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

      const ambientLight = new THREE.AmbientLight(0xffffff);
      this.scene.add(ambientLight);

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setAnimationLoop(this.animation);

      this.container.appendChild(this.renderer.domElement);

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
      /*
      this.controls.addEventListener('lock', function () {
        instructions.style.display = 'none';
        blocker.style.display = 'none';
      });

      controls.addEventListener('unlock', function () {
        blocker.style.display = 'block';
        instructions.style.display = '';
      });*/

      this.scene.add(this.controls.getObject());
      this.controls.getObject().position.set(12, 6, 12);

      document.addEventListener('keydown', this.onKeyDown, false);
      document.addEventListener('keyup', this.onKeyUp, false);

      this.renderer.domElement.addEventListener(
        'mousedown',
        () => (this.drag = false),
        false
      );

      this.renderer.domElement.addEventListener(
        'mousemove',
        this.onMouseMove,
        false
      );

      this.renderer.domElement.addEventListener(
        'mouseup',
        this.onMouseUp,
        false
      );
    },
    animation(prevTime) {
      const time = performance.now();
      const direction = new THREE.Vector3();
      // this.controls.update(time);
      // TWEEN.update(time);

      if (this.controls.isLocked === true) {
        const delta = (time - prevTime) / 1000;

        this.velocity.x -= this.velocity.x * 125.0 * delta;
        this.velocity.z -= this.velocity.z * 125.0 * delta;

        direction.z = Number(this.moveForward) - Number(this.moveBackward);
        direction.x = Number(this.moveRight) - Number(this.moveLeft);
        direction.normalize(); // this ensures consistent movements in all directions

        if (this.moveForward || this.moveBackward)
          this.velocity.z -= direction.z * 5000.0 * delta;
        if (this.moveLeft || this.moveRight)
          this.velocity.x -= direction.x * 5000.0 * delta;

        this.controls.moveRight(-this.velocity.x * delta);
        this.controls.moveForward(-this.velocity.z * delta);
      }

      this.renderer.render(this.scene, this.camera);
    },
    initInteractiveObjects(child) {
      if (/^Arcade/.test(child.name)) {
        this.arcades.push(child);
      } else if (/^Waypoint/.test(child.name)) {
        this.waypoints.push(child);
      }
    },
    loadGltf(gltf) {
      gltf.scene.traverse(this.initInteractiveObjects);
      this.scene.add(gltf.scene);
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
    onMouseUp() {
      this.controls.lock();

      if (this.drag) {
        return;
      }

      if (this.intersectsArcade.length > 0) {
        this.$router.push('test');
      } else if (this.intersectsWaypoint.length > 0) {
        const coords = { x: this.camera.position.x, z: this.camera.position.z };

        new TWEEN.Tween(coords)
          .to({
            x: this.intersectsWaypoint[0].object.position.x,
            z: this.intersectsWaypoint[0].object.position.z,
          })
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() =>
            this.camera.position.set(coords.x, this.camera.position.y, coords.z)
          )
          .onComplete(() => {
            this.controls.target.set(
              this.camera.position.x,
              this.camera.position.y,
              this.camera.position.z - 0.01
            );
          })
          .start();
      }
    },
    onMouseMove(event) {
      this.drag = true;

      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);

      this.intersectsArcade = this.raycaster.intersectObjects(this.arcades);
      this.intersectsWaypoint = this.raycaster.intersectObjects(this.waypoints);

      if (this.intersectsArcade.length > 0) {
        this.intersectsArcade[0].object.parent.children[2].material.emissive.set(
          0xbf40bf
        );
      } else if (this.intersectsWaypoint.length > 0) {
        this.intersectsWaypoint[0].object.material.color.set(0xbf40bf);
      }
    },
  },
};
</script>
