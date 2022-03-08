<script setup>
import Remove from 'vue-material-design-icons/ChevronUp.vue'
import Add from 'vue-material-design-icons/ChevronDown.vue'
</script>


<template>
    <body>
        <div class="headline">
            <a>Any Questions?</a>
        </div>
        <div class="container">
            <div class="accordion">
                <div class="accordion-item" id="question1">
                    <a class="accordion-link" href="#question1">
                        Warum sollte ich mir gerade eine PYCO-Konsole kaufen?
                        <Add class="add" />
                        <Remove class="remove" />
                    </a>
                    <div class="answer">
                        <p>
                            Ganz einfach! <br/><br/>
                            Nur unsere PYCO erweckt in dir die wahre Nostalgie, die man sich beim zocken von Oldschoolgames wünscht.
                            Das gefühl beim Betätigen des Joysticks und beim Drücken der Buttons ist ausgezeichnet und begeistert selbst alt eingesessene Gamer.
                            Überzeuge dich selbst und teste die PYCO in einem unserer zahlreichen Shops Deutschland weit!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="accordion">
                <div class="accordion-item" id="question2">
                    <a class="accordion-link" href="#question2">
                        Welche Spiele kann ich auf der PYCO spielen?
                        <Add class="add" />
                        <Remove class="remove" />
                    </a>
                    <div class="answer">
                        <p>
                            Da wir uns aktuell noch in der Entwicklung befinden gibt es aktuell nur 4 fertiggestellte Games: <br/><br/>
                            Space Invaders <br/>
                            Snake <br/>
                            Pong <br/>
                            Pac-Man <br/>
                            <br/>
                            Also nur erstklassige AAA-Games!

                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="accordion">
                <div class="accordion-item" id="question3">
                    <a class="accordion-link" href="#question3">
                        Können Spiele auch zu zweit gespielt werden?
                        <Add class="add" />
                        <Remove class="remove" />
                    </a>
                    <div class="answer">
                        <p>
                            Aktuell ist die PYCO nur für Solo-Games ausgelegt. <br/>
                            <br/>
                            Allerdings sind schon Pläne für die Zukunft vorhanden, eine Two-Player-PYCO auf den Markt zu bringen! <br/>
                            <br/>
                            Außerdem soll es in der Zukunft auch Kontrollerunterstützung geben. Das bedeutet, dass ihr euch Kontroller von uns kaufen könnt, und dann mit mehreren Leuten spielen könnt!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="accordion">
                <div class="accordion-item" id="question4">
                    <a class="accordion-link" href="#question4">
                        Wie schnell erhalte ich meine PYCO nach dem Kauf?
                        <Add class="add" />
                        <Remove class="remove" />
                    </a>
                    <div class="answer">
                        <p>
                            Klar! Warten will hier niemand! <br/>
                            <br/>
                            Sobald die Zahlungsbestätigung eingetroffen ist, wird ihre PYCO für den Versand vorbereitet und schnellstmöglich an unsere Versanddienstleister übergeben. <br/>
                            Je nachdem wo du wohnst, wird dir deine PYCO in ein bis drei Tagen zugestellt!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="accordion">
                <div class="accordion-item" id="question5">
                    <a class="accordion-link" href="#question5">
                        Wie kann ich bei euch bezahlen?
                        <Add class="add" />
                        <Remove class="remove" />
                    </a>
                    <div class="answer">
                        <p>
                            Wir akzeptieren alle gängigen Zahlungsmethoden und noch viele andere! <br/>
                        </p>
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
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="accordion">
                <div class="accordion-item" id="question6">
                    <a class="accordion-link" href="#question6">
                        Wie versendet ihr meine PYCO?
                        <Add class="add" />
                        <Remove class="remove" />
                    </a>
                    <div class="answer">
                        <p>
                            Wir versenden jede PYCO in einer dicken und sicheren Verpackung, damit deiner PYCO auf dem Weg zu dir nichts passiert. <br/>
                            <br/>
                            Unsere Versanddienstleister sind: <br/>
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
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="accordion">
                <div class="accordion-item" id="question7">
                    <a class="accordion-link" href="#question7">
                        Kann ich meine PYCO an einen größeren Bildschirm anschließen?
                        <Add class="add" />
                        <Remove class="remove" />
                    </a>
                    <div class="answer">
                        <p>
                            Die PYCO bietet einen separaten HDMI-Anschluss. <br/>
                            Über diesen kann man nach Belieben einen anderen Bildschirm verwenden!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="accordion">
                <div class="accordion-item" id="question8">
                    <a class="accordion-link" href="#question8">
                        Woher bekomme ich weitere und neue Spiele für meine PYCO?
                        <Add class="add" />
                        <Remove class="remove" />
                    </a>
                    <div class="answer">
                        <p>
                            Jeder Besitzer einer PYCO bekommt nachfolgende Games kostenlos über Updates auf seine PYCO. <br/>
                            <br/>
                            Ihr könnt euch also immer überraschen lassen, was als Nächstes folgt :D
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="accordion">
                <div class="accordion-item" id="question9">
                    <a class="accordion-link" href="#question9">
                        Ist PYCO helal?
                        <Add class="add" />
                        <Remove class="remove" />
                    </a>
                    <div class="answer">
                        <p>
                            Na klar! Da wir vor dem Entwickeln all unserer Unternehmensabläufe 1000 mal nach Mekka gebetet haben, ist Allah besänftigt amk! <br/>
                            Es können also auch unsere muslimischen Mitbürger ihre Games auf der PYCO genießen!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>


<style scoped>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.headline {
    font-size: 5rem;
    color: #F8F8F2;
    padding: 5rem;
}

body {
    width: 100%;
    height: 100%;
    background: #2b2a26;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.container {
    width: 100%;
    max-width: 80rem;
    margin: 0 1.5rem;
}

.symbols {
  text-align: center;
  padding: 1rem;
  color: #F8F8F2;
}
.symbols a{
  font-size: 5rem;
  display: inline-block;
  text-align: center;
  margin: 0 1rem;
  opacity: 0.8;
}

.accordion-item {
    background-color: #A243C2;
    border-radius: 15px;
    margin-bottom: 1rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    padding: 1rem;
    box-shadow: 0.5rem 2px 0.5rem rgba(0, 0, 0, 0.1);
}

.accordion-link {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    background-color: #A243C2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
}

.accordion-link .remove {
    display: none;
}

.answer {
    max-height: 0;
    overflow: hidden;
    position: relative;
    background-color: #2b2a26;
    transition: max-height 850ms;
}

.answer::before {
    content: "";
    position: absolute;
    width: 0.6rem;
    height: 100%;
    background-color: #0FFF50;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}

.answer p {
    color: #F8F8F2;
    font-size: 1.7rem;
    padding: 2rem;
}

.accordion-item:target .answer {
    max-height: 100rem;
}

.accordion-item:target .accordion-link .add {
    display: none;
}

.accordion-item:target .accordion-link .remove {
    display: block;
    padding: 2rem;
}
</style>

