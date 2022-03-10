<script setup>
import NavBar from './components/NavigationBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div>

    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

@font-face {
  font-family: 'Liberty';
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/907368/liberty.otf');
}

html,
body {
  background-color: #000;
  margin: 0 !important;
  padding: 0 !important;
  scroll-behavior: smooth;
}
</style>
