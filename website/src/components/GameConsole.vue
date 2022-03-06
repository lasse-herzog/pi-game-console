<script setup>
import { ref } from 'vue'
defineProps({})
</script>

<template>
    <div id="parrent_div">
        <section class="section-title">
            <div class="text-neon">PigCo</div>
            <div class="container-index">
                <div>
                    <a id="img_hardware" href="#hardware">
                        <img src="../assets/motherboard.jpg" />
                    </a>
                </div>
                <div>
                    <a id="img_games" href="#games">
                        <img src="../assets/playstation_controller.jpg" />
                    </a>
                </div>
                <div>
                    <a id="img_design" href="#design">
                        <img src="../assets/architecture.jpg" />
                    </a>
                </div>
            </div>
        </section>
        <section class="section-hardware" id="hardware">
            <div class="container-hardware">
                <div>
                    <h1>Hardware</h1>
                    <p>New CPU performance and efficiency cores power through complex tasks and preserve power while doing so.</p>
                    <p>With such advancements come new possibilities:</p>
                    <ul>
                        <li>16x the details</li>
                        <li>4x the size</li>
                        <li>completely new rendering and lighting</li>
                    </ul>
                </div>
                <div></div>
            </div>
        </section>
        <section class="section-games" id="games"></section>
        <section class="section-design" id="design"></section>
    </div>
</template>

<style scoped>
html,
body {
    height: 100vh;
    overflow: hidden;
    scroll-behavior: smooth;
}

#parrent_div {
    overflow: scroll;
    overflow-x: hidden;
    height: 100vh;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y proximity;
}

section {
    height: 100vh;
    scroll-snap-align: start;
    position: relative;
    font-family: "Roboto", sans-serif;
}

h1 {
    font-weight: 700;
    font-size: 4em;
}

p {
    font-weight: 300;
    font-size: 1.5em;
}

ul {
    padding-left: 0;
    font-weight: 500;
    font-size: 2em;
}

li {
    padding: 0.1rem 0;
    padding-left: 1rem;
    list-style-type: none;
    position: relative;
}

li:before {
    content: "-";
    font-size: 1em;
    position: absolute;
    top: 0rem;
    left: 0rem;
}

img {
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
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

.container-hardware {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 64rem;
    width: auto;
    height: 100vh;
    margin: auto;
    padding: 0 0.5rem;
}

.container-hardware > div {
    max-height: 80vh;
    height: 100%;
    width: 50%;
    margin: auto;
    text-align: left;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.container-hardware > div:nth-child(1) {
    background: #009694;
    margin: auto;
    border-radius: 1rem 0rem 0rem 1rem;
}

.container-hardware > div:nth-child(1) > * {
    margin: 1rem;
}

.container-hardware > div:nth-child(2) {
    background-image: url(../assets/cpu.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    margin: auto;
    border-radius: 0rem 1rem 1rem 0rem;
}

.container-index {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    max-width: 64rem;
    width: auto;
    height: 50vh;
    margin: auto;
}

.container-index > div {
    margin: 1rem;
}

.container-index > div > a > img {
    border-radius: 0.5rem;
    box-shadow: #000000 0px 8px 24px;
}

.text-neon {
    max-width: 64rem;
    width: auto;
    margin: auto;
    padding-top: 7.2rem;
    font-family: "Liberty";
    font-size: 14em;
    letter-spacing: -0.05em;
    color: #e5a8ff;
    text-shadow: 0 0 2rem #b300ff;
    animation: flicker 5s ease-in-out infinite alternate;
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
