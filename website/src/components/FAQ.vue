<template>
  <div id="faq">
    <h1 id="headline">Any Questions?</h1>
    <app-accordion>
      <template v-slot:title>
        <h2>Warum sollte ich mir gerade eine PYCO-Konsole kaufen?</h2>
      </template>
      <template v-slot:content>
        <p>
          Ganz einfach!
          <br />
          <br />Nur unsere PYCO erweckt in dir die wahre Nostalgie, die man sich
          beim zocken von Oldschoolgames wünscht. Das gefühl beim Betätigen des
          Joysticks und beim Drücken der Buttons ist ausgezeichnet und
          begeistert selbst alt eingesessene Gamer. Überzeuge dich selbst und
          teste die PYCO in einem unserer zahlreichen Shops Deutschland weit!
        </p>
      </template>
    </app-accordion>
    <app-accordion>
      <template v-slot:title>
        <h2>Welche Spiele kann ich auf der PYCO spielen?</h2>
      </template>
      <template v-slot:content>
        <p>
          Da wir uns aktuell noch in der Entwicklung befinden gibt es aktuell
          nur 4 fertiggestellte Games:
          <br />
          <br />Space Invaders
          <br />Snake
          <br />Pong
          <br />Pac-Man
          <br />
          <br />Also nur erstklassige AAA-Games!
        </p>
      </template>
    </app-accordion>
    <app-accordion>
      <template v-slot:title>
        <h2>Können Spiele auch zu zweit gespielt werden?</h2>
      </template>
      <template v-slot:content>
        <p>
          Aktuell ist die PYCO nur für Solo-Games ausgelegt.
          <br />
          <br />Allerdings sind schon Pläne für die Zukunft vorhanden, eine
          Two-Player-PYCO auf den Markt zu bringen!
          <br />
          <br />Außerdem soll es in der Zukunft auch Kontrollerunterstützung
          geben. Das bedeutet, dass ihr euch Kontroller von uns kaufen könnt,
          und dann mit mehreren Leuten spielen könnt!
        </p>
      </template>
    </app-accordion>
    <app-accordion>
      <template v-slot:title>
        <h2>Wie schnell erhalte ich meine PYCO nach dem Kauf?</h2>
      </template>
      <template v-slot:content>
        <p>
          Klar! Warten will hier niemand!
          <br />
          <br />Sobald die Zahlungsbestätigung eingetroffen ist, wird ihre PYCO
          für den Versand vorbereitet und schnellstmöglich an unsere
          Versanddienstleister übergeben.
          <br />Je nachdem wo du wohnst, wird
          dir deine PYCO in ein bis drei Tagen zugestellt!
        </p>
      </template>
    </app-accordion>
    <app-accordion>
      <template v-slot:title>
        <h2>Wie kann ich bei euch bezahlen?</h2>
      </template>
      <template v-slot:content>
        <p>Wir akzeptieren alle gängigen Zahlungsmethoden und noch viele andere!</p>
        <div class="symbols">
          <a>
            <font-awesome-icon :icon="['fab', 'btc']" />
          </a>
          <a>
            <font-awesome-icon :icon="['fab', 'ethereum']" />
          </a>
          <a>
            <font-awesome-icon :icon="['fab', 'paypal']" />
          </a>
          <a>
            <font-awesome-icon :icon="['fab', 'apple-pay']" />
          </a>
          <a>
            <font-awesome-icon :icon="['fab', 'amazon-pay']" />
          </a>
          <a>
            <font-awesome-icon :icon="['fab', 'cc-visa']" />
          </a>
          <a>
            <font-awesome-icon :icon="['fab', 'cc-mastercard']" />
          </a>
        </div>
      </template>
    </app-accordion>
    <app-accordion>
      <template v-slot:title>
        <h2>Wie versendet ihr meine PYCO?</h2>
      </template>
      <template v-slot:content>
        <p>
          Wir versenden jede PYCO in einer dicken und sicheren Verpackung,
          damit deiner PYCO auf dem Weg zu dir nichts passiert.
          <br />
          <br />Unsere Versanddienstleister sind:
          <br />
        </p>
        <div class="symbols">
          <a>
            <font-awesome-icon :icon="['fab', 'dhl']" />
          </a>
          <a>
            <font-awesome-icon :icon="['fab', 'ups']" />
          </a>
          <a>
            <font-awesome-icon :icon="['fab', 'fedex']" />
          </a>
        </div>
      </template>
    </app-accordion>
    <app-accordion>
      <template v-slot:title>
        <h2>Kann ich meine PYCO an einen größeren Bildschirm anschließen?</h2>
      </template>
      <template v-slot:content>
        <p>
          Die PYCO bietet einen separaten HDMI-Anschluss.
          <br />Über diesen kann man nach Belieben einen anderen Bildschirm
          verwenden!
        </p>
      </template>
    </app-accordion>
    <app-accordion>
      <template v-slot:title>
        <h2>Woher bekomme ich weitere und neue Spiele für meine PYCO?</h2>
      </template>
      <template v-slot:content>
        <p>
          Jeder Besitzer einer PYCO bekommt nachfolgende Games kostenlos
          über Updates auf seine PYCO.
          <br />
          <br />Ihr könnt euch also immer überraschen lassen, was als Nächstes
          folgt :D
        </p>
      </template>
    </app-accordion>
    <app-accordion>
      <template v-slot:title>
        <h2>Ist PYCO helal?</h2>
      </template>
      <template v-slot:content>
        <p>
          Na klar! Da wir vor dem Entwickeln all unserer Unternehmensabläufe
          1000 mal nach Mekka gebetet haben, ist Allah besänftigt amk!
          <br />Es können also auch unsere muslimischen Mitbürger ihre Games auf
          der PYCO genießen!
        </p>
      </template>
    </app-accordion>
  </div>
</template>

<script>
import AppAccordion from './FAQAccordion.vue';

export default {
  components: {
    AppAccordion,
  },
};
</script>

<style>
#headline {
  color: #f8f8f2;
}

#faq {
  padding-top: 5%;
  background-color: #282a36;
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.4rem;
}

.symbols {
  text-align: center;
  padding: 1rem;
  color: #f8f8f2;
}

.symbols a {
  font-size: 5rem;
  display: inline-block;
  text-align: center;
  margin: 0 1rem;
  opacity: 0.8;
}
</style>
