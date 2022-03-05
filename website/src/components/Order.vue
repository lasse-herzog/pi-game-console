<script setup>
import {plugin, defaultConfig} from '@formkit/vue'
import {ref} from 'vue'

const submitted = ref(false)
const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}
</script>

<template>
  <div class="container">
    <div id="preview">
      </div>
    <div class="input">
      <h1>Bestelle dir sie direkt nach Hause</h1>
      <FormKit
          type="form"
          v-model="formData"
          :form-class="submitted ? 'hide' : 'show'"
          submit-label="kostenpflichtig Bestellen"
          @submit="submitHandler"
      >
        <div class="side-by-side">
          <FormKit
              name="name"
              label="Vorname"
              placeholder="Max"
              validation="required"
              validation-behavior="live"
              help=""
          />
          <FormKit
              name="sir_name"
              label="Nachname"
              placeholder="Mustermann"
              validation="required"
              validation-behavior="live"
              help=""
          />
        </div>

        <div class="side-by-side">
          <FormKit
              name="strasse"
              label="Straße"
              placeholder="Musterallee"
              validation="required"
              validation-behavior="live"
              help=""
          />
          <FormKit
              name="hausnummer"
              label="Hausnummer"
              placeholder="1"
              validation="required"
              validation-behavior="live"
              help=""
          />
        </div>
        <div class="side-by-side">
          <FormKit
              name="postleitzahl"
              label="Postleitzahl"
              placeholder="12345"
              validation="required"
              validation-behavior="live"
              help=""
          />
          <FormKit
              name="stadt"
              label="Stadt"
              placeholder="Musterstadt"
              validation="required"
              validation-behavior="live"
              help=""
          />
        </div>
        <FormKit
            name="version"
            label="Version"
            help="Welche Ausstattungsvariante darf es sein?"
            type="radio"
            value="Standard"
            :options="['Standard', 'OLED-Bildschirm', 'Limited Edition \'Traube-Minze\'']"
        />
        <FormKit
            name="anzahl"
            label="Anzahl"
            type="number"
            value="1"
            min="1"
            max="10"
            help="maximal 10 Konsolen pro Bestellung"
        />
      </FormKit>
      <div v-if="submitted">
        <h2>Submission successful!</h2>
      </div>
      <div v-if="submitted">
      <h2>Modeled group values</h2>
      <pre class="form-data">{{ formData }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const formData = ref({})

    return {
      formData
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: auto;
  display: flex;
  justify-content: center;
}

.side-by-side {
  display: flex;
  align-items: flex-start;
}

pre.range-output {
  background: #eee;
  border-radius: 0.5em;
  text-align: center;
  margin-left: 1em;
  margin-top: 1.5em;
  font-weight: bold;
  padding: 0.5em;
  line-height: 1;
  width: 1.5em;
}

pre.form-data {
  box-sizing: border-box;
  background: #eee;
  border: 1px solid #ccc;
  width: 100%;
  padding: 1em;
  border-radius: 0.5em;
}
</style>
