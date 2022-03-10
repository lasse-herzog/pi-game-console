<template>
  <div id="parrent_div">
    <section class="section-title">
      <div class="text-neon">PYCO</div>
      <div class="container index">
        <div class="card img">
          <router-link to="#hardware">
            <img src="../assets/motherboard.jpg" />
          </router-link>
        </div>
        <div class="card img">
          <router-link to="#games">
            <img src="../assets/playstation_controller.jpg" />
          </router-link>
        </div>
        <div class="card img">
          <router-link to="#design">
            <img src="../assets/architecture.jpg" />
          </router-link>
        </div>
      </div>
    </section>
    <section class="section-hardware" id="hardware">
      <div class="container hardware">
        <div class="card left font-white back-hardware stretch">
          <h1>Hardware</h1>
          <p>
            New CPU performance and efficiency cores power through complex tasks
            and preserve power while doing so.
          </p>
          <p>With such advancements come new possibilities:</p>
          <ul>
            <li>16x the details</li>
            <li>4x the size</li>
            <li>completely new rendering and lighting</li>
          </ul>
        </div>
        <div class="card right back-cpu stretch"></div>
      </div>
    </section>
    <section class="section-games" id="games">
      <div class="container games">
        <div class="card left font-white back-games stretch">
          <h1>Games</h1>
          <p>
            The Console comes with the remakes of four classic arcade titles
            preinstalled.
          </p>
          <p>Included titles are:</p>
          <ul>
            <li>
              <router-link to="games#pong-info">Pong</router-link>
            </li>
            <li>
              <router-link to="games#snake-info">Snake</router-link>
            </li>
            <li>
              <router-link to="games#pacman-info">Pac-Man</router-link>
            </li>
            <li>
              <router-link to="games#invaders-info">Space Invaders</router-link>
            </li>
          </ul>
        </div>
        <div class="container card games right stretch">
          <router-link
            to="games#pong-info"
            class="card back-pong stretch"
          ></router-link>
          <router-link
            to="games#snake-info"
            class="card back-snake stretch"
          ></router-link>
          <router-link
            to="games#pacman-info"
            class="card back-pac stretch"
          ></router-link>
          <router-link
            to="games#invaders-info"
            class="card back-space stretch"
          ></router-link>
        </div>
      </div>
    </section>
    <section class="section-design" id="design">
      <div class="container design top">
        <div class="card font-white back-black stretch center noshadow">
          <h1>Design</h1>
          <p>
            To arrive at our final product, we went through many design
            iterations and material types. In the end, we decided on a handmade
            wooden case combined with a distinctive retro look.
          </p>
        </div>
      </div>
      <div class="container design">
        <div class="container">
          <div class="card img noshadow">
            <img src="../assets/arcade_0.png" />
          </div>
          <p class="font-white">An early render with external controls.</p>
        </div>
        <div class="container">
          <div class="card img noshadow">
            <img src="../assets/arcade_1.png" />
          </div>
          <p class="font-white">The first all in one render.</p>
        </div>
        <div class="container">
          <div class="card img noshadow">
            <img src="../assets/arcade_2.png" />
          </div>
          <p class="font-white">The first wooden prototype.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
html,
body {
  /* height: 100vh; */
  overflow: hidden;
  scroll-behavior: smooth;
  background-color: #282a36;
}

#parrent_div {
  overflow: hidden;
  background-color: #282a36;
}

section {
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 64rem;
  width: auto;
  height: 100vh;
  margin: auto;
  padding: 0;
}

.container.design {
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.container.design > .container {
  flex: 1 1 200px;
  max-width: 33%;
}

.container.design.top {
  padding-top: 50vh;
}

.container.games {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.container.hardware {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.container.index {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.container.index > div {
  margin: 1rem;
}

.card {
  max-height: 80vh;
  height: auto;
  margin: auto;
  padding: 0 0.5rem;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
}

.card.noshadow {
  box-shadow: none;
  text-shadow: none;
}

.card.games {
  flex-direction: column;
  padding: 0;
}

.card.games > * {
  flex-direction: column;
  max-height: 25%;
  width: 100%;
  border-radius: 0;
  background-size: cover;
}

.card.games > *:first-child {
  border-radius: 0rem 1rem 0rem 0rem;
}

.card.games > *:last-child {
  border-radius: 0rem 0rem 1rem 0rem;
}

.card.stretch {
  height: 100%;
}

.card.center {
  text-align: center;
}

.card.left {
  width: 50%;
  margin: auto;
  border-radius: 1rem 0rem 0rem 1rem;
}

.card.right {
  width: 50%;
  margin: auto;
  border-radius: 0rem 1rem 1rem 0rem;
}

.card.img {
  padding: 0;
  box-shadow: #000000 0px 8px 24px;
  margin: 1rem;
}

.card.img.noshadow {
  box-shadow: none;
}

.card.img img {
  display: block;
  max-width: 100%;
  width: auto;
  height: auto;
  border-radius: 0.5rem;
}

.card a {
  color: unset;
}

.card h1 {
  font-weight: 700;
  font-size: 4em;
  margin: 1rem;
}

.card p {
  font-weight: 300;
  font-size: 1.5em;
  margin: 1rem;
}

.card ul {
  padding-left: 0;
  font-weight: 500;
  font-size: 2em;
  margin: 1rem;
}

.card li {
  padding: 0.1rem 0;
  padding-left: 1rem;
  list-style-type: none;
  position: relative;
}

.card li:before {
  content: '-';
  font-size: 1em;
  position: absolute;
  top: 0rem;
  left: 0rem;
}

.section-title {
  background-image: url(../assets/brick_wall.png);
  background-repeat: no-repeat;
  background-position: center center;
}

.section-hardware {
  background-color: #7fd1ae;
  background-image: url(../assets/circuit_blurred.jpg);
  background-repeat: no-repeat;
  background-position: center center;
}

.section-games {
  background-color: #7fd1ae;
  background-image: url(../assets/playstation_controller_blurred.jpg);
  background-repeat: no-repeat;
  background-position: center center;
}

.text-neon {
  max-width: 64rem;
  width: auto;
  margin: auto;
  padding-top: 7.2rem;
  font-family: 'Liberty';
  font-size: 14em;
  letter-spacing: -0.05em;
  color: #e5a8ff;
  text-shadow: 0 0 2rem #b300ff;
  animation: flicker 5s ease-in-out infinite alternate;
}

.font-white {
  color: #ffffff;
}

.back-black {
  background-color: #282a36;
}

.back-hardware {
  background-color: #282a36;
}

.back-games {
  background-color: #282a36;
}

.back-cpu {
  background-image: url(../assets/cpu.jpg);
  background-repeat: no-repeat;
  background-position: center center;
}

.back-pong {
  background-image: url(../assets/gc_pong.png);
  background-repeat: no-repeat;
  background-position: center center;
}

.back-snake {
  background-image: url(../assets/gc_snake.png);
  background-repeat: no-repeat;
  background-position: center center;
}

.back-pac {
  background-image: url(../assets/gc_pacman.png);
  background-repeat: no-repeat;
  background-position: center center;
}

.back-space {
  background-image: url(../assets/gc_space.png);
  background-repeat: no-repeat;
  background-position: center center;
}

@keyframes flicker {
  0% {
    text-shadow: 0 0 2rem #b300ff;
  }
  5.5% {
    text-shadow: 0 0 0rem;
  }
  6% {
    text-shadow: 0 0 2rem #b300ff;
  }
  7% {
    text-shadow: 0 0 0rem;
  }
  8% {
    text-shadow: 0 0 2rem #b300ff;
  }
}
</style>
