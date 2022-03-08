<script>
export default {
  methods: {
    hideWrapper() {
      const cookieBox = this.$refs.wrapper;
      document.cookie =
        'CookieBy=PYCOEngineering; max-age=' + 60 * 60 * 24 * 30;
      if (document.cookie) {
        cookieBox.style.display = 'none';
      }
    },
  },
};
</script>

<template>
  <body>
    <div class="wrapper" ref="wrapper">
      <img src="../assets/cookie.png" alt />
      <div class="content">
        <header>Cookies Vereinbarung</header>
        <p>Unsere Website benutzt Cookies um Ihr Erlebnis zu verbessern!</p>
        <div class="buttons">
          <button class="item" @click="hideWrapper">Ich Verstehe</button>
          <a href="#" class="item">Mehr Informationen</a>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
    background: #2b2a26;
    height: 100vh;
}

.wrapper {
  position: absolute;
  bottom: 30px;
  left: 30px;
  background: #fff;
  text-align: center;
  max-width: 365px;
  border-radius: 15px;
  padding: 25px 25px 30px 25px;
}

.wrapper.hide {
  opacity: 0;
  pointer-events: none;
  transform: scale(0.8);
}

.wrapper img {
  max-width: 90px;
}

.wrapper .content {
  margin-top: 10px;
}

.content header {
  font-size: 25px;
  font-weight: 600;
}

.content p {
  color: #858585;
  margin: 5px 0 20px 0;
  font-size: 15px;
}

.content .buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons .item {
  margin: 0 10px;
}

.buttons button {
    padding: 10px 20px;
    background: #A243C2;
    border: none;
    outline: none;
    font-size: 17px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
}

.buttons a {
    font-size: 17px;
    color: #A243C2;
}
</style>
