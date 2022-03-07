<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import GameConsole from './components/GameConsole.vue';
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Moin" /> -->
  <NavigationBar/>
  <GameConsole />
</template>

<style>
@font-face {
  font-family: "Liberty";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/907368/liberty.otf");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

html,
body {
  background-color: #000;
  margin: 0 !important;
  padding: 0 !important; 
  scroll-behavior: smooth;
}
</style>
