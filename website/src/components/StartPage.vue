<template>
  <div id="container" ref="container"></div>
</template>

<script>
import * as THREE from 'three';

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

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setAnimationLoop(this.animation);
      this.container.appendChild(this.renderer.domElement);
    },
  },
};
</script>
