<template>
  <div id="container" ref="container"></div>
</template>

<script>
import * as THREE from 'three';

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
      this.controls.update();

      this.renderer.render(this.scene, this.camera);
    },
    init() {
      this.arcades = [];
      this.container = this.$refs.container;

      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        5,
        50
      );
      this.camera.position.set(13, 2, 20);

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

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setAnimationLoop(this.animation);
      this.container.appendChild(this.renderer.domElement);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // this.controls.enablePan = false;
      this.controls.enableDamping = true;

      this.renderer.domElement.addEventListener('click', this.onClick, false);
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
    onClick() {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      var intersectsArcade = this.raycaster.intersectObjects(this.arcades);

      if (intersectsArcade.length > 0) {
        this.$router.push('test');
      }
    },
  },
};
</script>
