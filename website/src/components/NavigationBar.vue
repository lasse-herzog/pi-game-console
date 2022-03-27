<script>

export default {
  name: 'NavigationBar',
  mounted: function () {
    var checkbox = document.getElementById("navToggle");
    checkbox.addEventListener('change', function () {
      var elements = document.getElementsByClassName('navelement');

      for (let element of elements) {
        if (this.checked) {
          element.classList.add('navanimation');
        } else {
          element.classList.remove('navanimation');
        }
      };
    });
  }
}

</script>

<template>
  <div class="navbar">
    <div class="navcontent">
      <div class="navlogo">
        <div>
          <router-link to="/">PYCO</router-link>
        </div>
        <div class="navburger">
          <input type="checkbox" id="navToggle" />
          <span></span>
          <span></span>
          <span></span>
        </div>
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
  content: "";
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
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin: 0.9rem 0px;
  margin-right: auto;
}

.navburger {
  margin-left: auto;
  display: none;
}

.navelement {
  font-size: 0.9em;
  font-family: "Roboto", sans-serif;
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
  font-family: "Roboto", sans-serif;
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

/* #region Hamburger */

.navburger input {
  display: block;
  width: 25px;
  height: 25px;
  position: absolute;
  margin: 0;

  cursor: pointer;

  opacity: 0;
  z-index: 2;

  -webkit-touch-callout: none;
}

.navburger span {
  display: block;
  width: 25px;
  height: 4px;
  margin: 4px 0;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 0px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

.navburger span:first-of-type {
  transform-origin: 0% 0%;
  margin-top: 0;
}

.navburger span:nth-of-type(3) {
  transform-origin: 0% 100%;
  margin-bottom: 0;
}

/* Rotate first span */
.navburger input:checked ~ span:nth-of-type(1) {
  opacity: 1;
  transform: rotate(45deg) translate(-0px, -0px);
}

/* Hide middle one */
.navburger input:checked ~ span:nth-of-type(2) {
  opacity: 0;
}

/* Rotate last span */
.navburger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg) translate(0, -0px);
}

/* #endregion */

/* #region Media Query */

@media only screen and (max-width: 600px) {
  .navcontent {
    flex-direction: column;
  }

  .navelement {
    max-height: 0;
    margin: 0;
    padding: 0;
    transition: all 0.15s ease-out;
    overflow: hidden;
  }

  .navanimation {
    max-height: unset;
    margin: 0.5rem 0;
    padding: unset;
    transition: all 0.15s ease-in;
  }

  .navanimation.shoplink {
    padding: 0.2rem 0.7rem;
  }

  .navburger {
    display: block;
    align-self: center;
  }

  .navlogo {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
}

/* #endregion */
</style>
