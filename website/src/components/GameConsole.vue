<script setup>
import { ref } from 'vue'
defineProps({})
</script>

<template>
    <div id="parrent_div">
        <section class="section-title">
            <div class="text-neon">PigCo</div>
            <div class="container index">
                <div class="card img">
                    <a href="#hardware">
                        <img src="../assets/motherboard.jpg" />
                    </a>
                </div>
                <div class="card img">
                    <a href="#games">
                        <img src="../assets/playstation_controller.jpg" />
                    </a>
                </div>
                <div class="card img">
                    <a href="#design">
                        <img src="../assets/architecture.jpg" />
                    </a>
                </div>
            </div>
        </section>
        <section class="section-hardware" id="hardware">
            <div class="container hardware">
                <div class="card left font-white back-aqua stretch">
                    <h1>Hardware</h1>
                    <p>New CPU performance and efficiency cores power through complex tasks and preserve power while doing so.</p>
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
                <div class="card font-white back-aqua">
                    <h1>Games</h1>
                    <p>New CPU performance and efficiency cores power through complex tasks and preserve power while doing so.</p>
                    <p>With such advancements come new possibilities:</p>
                </div>
                <div>
                    <div class="card img">
                        <a href>
                            <img src="../assets/architecture.jpg" />
                        </a>
                    </div>
                    <div class="card img">
                        <a href>
                            <img src="../assets/architecture.jpg" />
                        </a>
                    </div>
                    <div class="card img">
                        <a href>
                            <img src="../assets/architecture.jpg" />
                        </a>
                    </div>
                    <div class="card img">
                        <a href>
                            <img src="../assets/architecture.jpg" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
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

.card {
    max-height: 80vh;
    height: auto;
    margin: auto;
    padding: 0 0.5rem;
    text-align: left;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 0.5rem;
}

.card.stretch {
    height: 100%;
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
}

.card.img img {
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
    border-radius: 0.5rem;
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
    content: "-";
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

.container {
    max-width: 64rem;
    width: auto;
    height: 100vh;
    margin: auto;
    padding: 0;
}

.container.games {
    height: 100vh;
}

.container.games > *:first-child {
    width: auto;
    text-align: center;
}

.container.games > *:not(:first-child) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1;
    align-content: center;
    max-width: 25vw;
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

.font-white {
    color: #ffffff;
}

.back-aqua {
    background-color: #0090ae;
}

.back-cpu {
    background-image: url(../assets/cpu.jpg);
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
