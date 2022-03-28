<template>
  <div class="site-games">
    <div class="site-title">
      <div class="title-txt">
        <h1>PYCO Games</h1>
      </div>
      <div class="title-headings">
        <div
          class="title-heading animate__animated animate__bounceIn"
          id="pong-hd"
        >
          <h2><router-link to="#pong-info">Pong</router-link></h2>
        </div>
        <div
          class="title-heading animate__animated animate__bounceIn"
          id="snake-hd"
        >
          <h2><router-link to="#snake-info">Snake</router-link></h2>
        </div>
        <div
          class="title-heading animate__animated animate__bounceIn"
          id="pacman-hd"
        >
          <h2><router-link to="#pacman-info">Pac-Man</router-link></h2>
        </div>
        <div
          class="title-heading animate__animated animate__bounceIn"
          id="space-hd"
        >
          <h2><router-link to="#invaders-info">Space Invaders</router-link></h2>
        </div>
      </div>
    </div>
    <main class="site-content">
      <header class="content-intro wrapper" ref="intro">
        <h2>Die größten Arcade-Klassiker aller Zeiten in einer Konsole!</h2>
      </header>
      <section class="infoboxen">
        <div class="wrapper">
          <div class="game-infobox" id="pong-info">
            <div class="img-slideshow">
              <img
                :src="currentImgPong"
                alt="Szene aus dem Spiel Space Invaders"
              />
              <div class="dots">
                <span class="dot" @click="setIndex(1, 0)"></span>
                <span class="dot" @click="setIndex(1, 1)"></span>
                <span class="dot" @click="setIndex(1, 2)"></span>
              </div>
            </div>

            <div class="infotext">
              <details>
                <summary><h3 ref="headings">Pong</h3></summary>
                <section class="details-txt">
                  Teste dein Können in diesem klassischen Arcade-Spiel gegen den
                  Computer! Steuere deinen Schläger schnell und präzise und
                  lasse den Ball nicht aus dem Spielfeld entkommen.<br />
                  Jetzt nur in der PYCO-Version das Spiel in vier einzigartigen
                  Spielmodi mit steigender Schwierigkeitsgraden erleben. Reicht
                  dein Reaktionsvermögen für aus um den Gegener zu besiegen?
                </section>
              </details>
            </div>
          </div>
          <div class="game-infobox" id="snake-info">
            <div class="infotext">
              <details>
                <summary><h3 ref="headings">Snake</h3></summary>
                <section class="details-txt">
                  Du bist die Schlange! Esse Äpfel um Punkte zu erhalten und
                  größer zu werden. Doch Vorsicht: Berührst du den spielfeldrand
                  oder dich selbst ist das Spiel vorbei!<br />
                  Wähle zwischen einzigartigen Skins und knacke alle Highscores!
                </section>
              </details>
            </div>
            <div class="img-slideshow">
              <img
                :src="currentImgSnake"
                alt="Szene aus dem Spiel Space Invaders"
              />
              <div class="dots">
                <span class="dot" @click="setIndex(2, 0)"></span>
                <span class="dot" @click="setIndex(2, 1)"></span>
                <span class="dot" @click="setIndex(2, 2)"></span>
              </div>
            </div>
          </div>
          <div class="game-infobox" id="pacman-info">
            <div class="img-slideshow">
              <img
                :src="currentImgPac"
                alt="Szene aus dem Spiel Space Invaders"
              />
              <div class="dots">
                <span class="dot" @click="setIndex(3, 0)"></span>
                <span class="dot" @click="setIndex(3, 1)"></span>
                <span class="dot" @click="setIndex(3, 2)"></span>
              </div>
            </div>
            <div class="infotext">
              <details>
                <summary><h3 ref="headings">Pac-Man</h3></summary>
                <section class="details-txt">
                  Waka Waka!<br />
                  Der gelbe runde Held ist zurück und er ist hungrig!<br />Friss
                  alle Pillen und erreiche das nächste Level. Aber Pac-Man ist
                  nicht allein: Inky, Pinky, Blinky und Clyde haben es auf ihn
                  abgesehen und verfolgen ihn durch das Labyrinth. Flüchte vor
                  den Geistern, schnapp' dir die Superpillen und stelle neue
                  Punkterekorde auf!
                </section>
              </details>
            </div>
          </div>
          <div class="game-infobox" id="invaders-info">
            <div class="infotext">
              <details>
                <summary><h3 ref="headings">Space Invaders</h3></summary>
                <section class="details-txt">
                  Die Aliens greifen an! Das Ende naht! Die Welt braucht einen
                  Beschützer!<br />
                  Setz' dich ins Raumschiff und stürze dich in die Schlacht
                  gegen die Horden von Weltraummonstern. Wirst du es schaffen,
                  die Außerirdischen zu eliminieren? Das Schicksal der
                  Menschheit liegt in deinen Händen!
                </section>
              </details>
            </div>
            <div class="img-slideshow">
              <img
                :src="currentImgInvaders"
                alt="Szene aus dem Spiel Space Invaders"
              />
              <div class="dots">
                <span class="dot" @click="setIndex(4, 0)"></span>
                <span class="dot" @click="setIndex(4, 1)"></span>
                <span class="dot" @click="setIndex(4, 2)"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="comment-section">
        <div class="comments">
          <div class="comments-heading">
            <h2>Das sagen die Spieler:</h2>
          </div>
          <blockquote class="comment">
            <h3>Gute Spieleauswahl</h3>
            <p>
              PYCO überzeugt vor allem durch die exzellent gewählten Spiele, die
              auf der Konsole verfügbar sind. Hier ist wirklich für jeden was
              dabei!
            </p>

            <footer>&mdash; Retro-René, Gamer von Beruf</footer>
          </blockquote>
          <blockquote class="comment">
            <h3>Top Umsetzung bekannter Klassiker</h3>
            <p>
              Obwohl man die Spiele ja schon gefühlt tausendmal gesehen hat,
              machen mir vor allem die PYCO-Umsetzung trotzdem noch eine Menge
              Spaß. Geschickt wird hier die Essenz des Originals mit neuen
              Einfällen vermischt, die zum längeren Spielen motivieren.
            </p>

            <footer>&mdash; Anna Ausschweif, Bloggerin</footer>
          </blockquote>
          <blockquote class="comment" id="lastComment">
            <h3>Macht einfach Spaß!</h3>
            <p>
              Ich könnte mich stundenlang mit PYCO beschäftigen und hätte immer
              noch nicht genug.
            </p>

            <footer>&mdash; Lars Sörensen, Komiker</footer>
          </blockquote>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import 'animate.css';

export default {
  name: 'image-slider',
  data() {
    return {
      pongImages: ['./pong_alt1.png', './pong_alt0.png', './pong0.png'],
      snakeImages: ['./snake0.png', './snake1.png', './snake2.png'],
      pacImages: ['./pacman0.png', './pacman1.png', './pacman2.png'],
      invadersImages: ['./space0.png', './space1.png', './space2.png'],
      currentIndex: 0,
      currentIndex02: 0,
      currentIndex03: 0,
      currentIndex04: 0,
      timer: null,
    };
  },

  mounted: function () {
    //this.startSlide();
    let element = this.$refs.intro;
    element.addEventListener('click', () => {
      element.classList.add('animate__animated', 'animate__flash');
    });
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 5000);
    },

    next: function () {
      this.currentIndex += 1;
    },

    prev: function () {
      this.currentIndex -= 1;
    },

    setIndex(slideshow, slidenr) {
      if (slideshow == 1) {
        this.currentIndex = slidenr;
      } else if (slideshow == 2) {
        this.currentIndex02 = slidenr;
      } else if (slideshow == 3) {
        this.currentIndex03 = slidenr;
      } else {
        this.currentIndex04 = slidenr;
      }
    },
  },

  computed: {
    currentImgPong: function () {
      return this.pongImages[
        Math.abs(this.currentIndex) % this.pongImages.length
      ];
    },
    currentImgSnake: function () {
      return this.snakeImages[
        Math.abs(this.currentIndex02) % this.snakeImages.length
      ];
    },
    currentImgPac: function () {
      return this.pacImages[
        Math.abs(this.currentIndex03) % this.pacImages.length
      ];
    },
    currentImgInvaders: function () {
      return this.invadersImages[
        Math.abs(this.currentIndex04) % this.invadersImages.length
      ];
    },
  },
};
</script>

<style scoped>
@media screen {
  /*Heading styles*/
  .site-title {
    width: 100%;
    height: 100vh;
    background-color: #282a36;

    left: 0;
    right: 0;
    display: flex;

    flex-flow: column;
    overflow: hidden;
  }

  .title-txt {
    color: #ff10f0;
    margin: auto;
  }
  /*Unterüberschriften stylings */
  .title-heading a {
    text-decoration: none;
    color: #f8f8f2;
    margin: auto;
  }
  .title-headings h2:hover {
    cursor: pointer;
    animation: tada;
    animation-duration: 1s;
  }
  #pong-hd a {
    text-shadow: 1px 1px 9px rgb(43, 43, 43);
  }
  #snake-hd {
    text-shadow: 1px 1px 9px rgb(0, 199, 0);
  }
  #pacman-hd {
    text-shadow: 1px 1px 9px rgb(251, 255, 0);
    white-space: nowrap;
  }
  #space-hd {
    text-shadow: 1px 1px 9px rgb(0, 66, 207);
  }

  /*Content styles*/
  .site-content {
    line-height: 1.5;
    padding-top: 1rem;
    margin-bottom: 0;
    flex: 1 auto;
    background-color: #282a36;
    color: #f8f8f2;
  }
  .content-intro {
    font-size: 2rem;
    color: #ff10f0;
  }

  .wrapper {
    min-width: 320px;
    max-width: 1024px;
    padding: 0 1rem;
    margin: 0 auto;
    padding-bottom: 1em;
  }
  /*Game infoboxes styles*/
  .infoboxen > .wrapper {
    display: grid;
    grid-template-columns: 4fr;
    grid-gap: 1rem;
  }
  .infoboxen {
    background-color: #282a36;
    padding: 1rem 0;
    margin-bottom: 0;
  }

  /*Spezielle Styles für große Bildschirme */
  @media screen and (min-width: 940px) {
    .game-infobox {
      text-align: center;
      background-color: #a243c2;
      padding: 1rem;
      margin: 1rem 0;
      display: grid;
      grid-template-columns: 4fr 4fr;
      grid-gap: 1rem;
      border: 0.5rem solid #a243c2;
      border-radius: 18px;
    }
    .site-title h1 {
      margin-top: 46%;
      margin-bottom: 0;
      font-size: 7em;
      text-shadow: 1px 1px 9px #ff10f0;
    }

    .title-headings {
      display: flex;
      padding-bottom: 27rem;
      margin: 1rem 10rem;
      text-decoration: none;
    }
    
    .title-headings > .title-heading {
      margin: auto;
      font-size: 1.5em;
      color: #f8f8f2;
    }
    
    .comment-section{
      padding: 2rem;
      margin:auto;
      
    }
    
  } /*Ende Media Query*/

  /*Spezielle Styles für kleinere Bildschirme */
  @media screen and (max-width: 940px) {
    .game-infobox {
      text-align: center;
      background-color: #a243c2;
      padding: 1rem;
      margin: 1rem 0;
      display: flex;
      flex-flow: column;
      border: 0.5rem solid #a243c2;
      border-radius: 18px;
    }
    .title-headings {
      display: flex;
      flex-flow: column;
      padding-bottom: 27rem;
      margin: auto;
      text-decoration: none;
    }
    .title-headings > .title-heading {
      margin: auto;
      font-size: 1em;
      color: #f8f8f2;
    }
    .site-title h1 {
      margin-top: 46%;
      margin-bottom: 0;
      font-size: 5em;
      text-shadow: 1px 1px 9px #ff10f0;
    }

    .content-intro {
      font-size: 1rem;
    }
    .comment-section{
      padding: 1rem;
    }
  } /*Ende Media Query*/

  .infotext {
    margin: auto;
  }
  .infotext h3 {
    font-size: 2em;
    font-weight: bold;
  }
  .title-imgs {
    display: flex;
  }
  .title-image img {
    width: 100%;
    height: auto;
    margin: auto;
    border-radius: 18px;
  }

  /*Aufklappbarer Text */
  summary {
    position: relative;
  }
  summary::marker {
    color: transparent;
  }
  summary:hover {
    cursor: pointer;
    color: #0fff50;
  }
  details {
    transition: all 1s ease;
  }
  details[open] summary ~ * {
    animation: fadeIn;
    animation-duration: 1s;
  }
  details[close] summary ~ * {
    animation: fadeOut;
    animation-duration: 1s;
  }
  .details-txt{
    background-color:#a243c2;
    box-shadow: none;
    padding-bottom: 1rem;
  }

  /*Kommentare */
  .comments {
    border: 5px solid #a243c2;
    border-radius: 18px;
  }
  .comments-heading {
    font-size: 1.5em;
  }
  .comment {
    background-color: #282a36;
    text-align: center;
    padding: 1em;
    margin: 0 0 1em 0;
    border-radius: 18px;
  }
  
  #lastComment {
    margin-bottom: 0;
  }

  /*Bilder Slideshow*/
  .img-slideshow {
    margin: auto;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .img-slideshow img {
    max-width: 100%;
    height: auto;
    border-radius: 18px;
  }
  .dots {
    display: flex;
    flex-flow: row;
    margin-top: 1rem;
  }
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 0.2rem;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active,
  .dot:hover {
    background-color: #717171;
  }
}
</style>
