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
          <br />Space Invaders <br />Snake <br />Pong <br />Pac-Man
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
          Versanddienstleister übergeben. <br />Je nachdem wo du wohnst, wird
          dir deine PYCO in ein bis drei Tagen zugestellt!
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
          Versanddienstleister übergeben. <br />Je nachdem wo du wohnst, wird
          dir deine PYCO in ein bis drei Tagen zugestellt!
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
          Versanddienstleister übergeben. <br />Je nachdem wo du wohnst, wird
          dir deine PYCO in ein bis drei Tagen zugestellt!
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
          Versanddienstleister übergeben. <br />Je nachdem wo du wohnst, wird
          dir deine PYCO in ein bis drei Tagen zugestellt!
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
          Versanddienstleister übergeben. <br />Je nachdem wo du wohnst, wird
          dir deine PYCO in ein bis drei Tagen zugestellt!
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
          Versanddienstleister übergeben. <br />Je nachdem wo du wohnst, wird
          dir deine PYCO in ein bis drei Tagen zugestellt!
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
  font-size: 1.5rem;
}

p {
  font-size: 1.2rem;
}
</style>
