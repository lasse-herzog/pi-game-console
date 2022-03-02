<template>
  <div id="container" ref="container"></div>
</template>

<script>
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    animation(time) {
      //this.controls.update();
      TWEEN.update(time);

      this.renderer.render(this.scene, this.camera);
    },
    init() {
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
      this.camera.position.set(0, 3, 1);

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

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableZoom = false;
      this.controls.enablePan = false;
      this.controls.enableDamping = true;
      this.controls.rotateSpeed = -0.25;

      this.controls.target.set(
        this.camera.position.x,
        this.camera.position.y,
        this.camera.position.z - 0.01
      );

      this.controls.update();

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
    onMouseUp() {
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
