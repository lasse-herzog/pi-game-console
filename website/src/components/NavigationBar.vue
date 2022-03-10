<template>
  <div class="navbar">
    <div class="navcontent">
      <div class="navlogo">
        <router-link to="/">PYCO</router-link>
      </div>
      <div class="navelement">
        <router-link to="console">PYCO</router-link>
      </div>
      <div class="navelement">
        <router-link to="games">Games</router-link>
      </div>
      <div class="navelement">
        <router-link to="faq">FAQ</router-link>
      </div>
      <div class="navelement shoplink">
        <router-link to="shop">Buy now</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: unset;
  text-decoration: none;
}

.navbar {
  z-index: 1;
  background-color: #1d1d1fb8;
  backdrop-filter: saturate(180%) blur(20px);
  color: #fff;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  /* justify-content: space-between; */
}

.navbar::after {
  content: '';
  display: block;
  position: absolute;
  top: 100%;
  width: 100%;
  height: 1px;
  background-color: #ffffff3d;
  box-sizing: content-box;
  margin: 0;
  padding: 0;
}

.navcontent {
  z-index: 2;
  max-width: 64rem;
  width: auto;
  margin: auto;
  padding: 0 1rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.navlogo {
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin: 0.9rem 0px;
  margin-right: auto;
}

.navelement {
  font-size: 0.9em;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1.4rem;
  width: auto;
  margin: 0 1rem;
  cursor: pointer;
}

.navelement:hover {
  color: #2996fd;
}

.shoplink {
  font-size: 0.9em;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1.4rem;
  cursor: pointer;
  padding: 0.2rem 0.7rem;
  background-color: #0071e3;
  border-radius: 980px;
}

.shoplink:hover {
  background-color: #147ce5;
  color: #fff;
}
</style>
