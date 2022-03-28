<template>
  <div class="wrapper" ref="wrapper">
    <img src="../assets/cookie.png" alt />
    <div class="content">
      <header>Cookie Vereinbarung</header>
      <p>Unsere Website benutzt Cookies um Ihr Erlebnis zu verbessern!</p>
      <div class="buttons">
        <button class="item" @click="hideWrapper">Ich Verstehe</button>
        <a href="#" class="item">Mehr Informationen</a>
      </div>
    </div>
  </div>
</template>

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

<style scoped>
.wrapper {
  background: #282a36;
  border-radius: 15px;
  bottom: 0.5rem;
  position: absolute;
  left: 0.5rem;
  max-width: 365px;
  padding: 1% 1% 2% 1%;
  text-align: center;
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
  color: #f8f8f2;
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
  background: #a243c2;
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
  color: #a243c2;
}
</style>
