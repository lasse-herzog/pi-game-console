<template>
  <div id="container" ref="container"></div>
</template>

<script>
import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    animation(time) {
      this.renderer.render(this.scene, this.camera);
    },
    init() {
      this.container = this.$refs.container;

      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.25,
        20
      );

      this.scene = new THREE.Scene();

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
    },
    loadGltf(gltf) {
      this.scene.add(gltf.scene);
    },
  },
};
</script>
