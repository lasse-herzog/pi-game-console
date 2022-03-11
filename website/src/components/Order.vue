<script setup>
import Customizer from './Customizer.vue';
import { plugin, defaultConfig, FormKit } from '@formkit/vue';
import { ref } from 'vue';

const submitted = ref(false);
const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000));
  submitted.value = true;
};
</script>

<template>
  <section>
    <Renderer ref="renderer" antialias :orbit-ctrl="{}" resize>
      <Camera ref="camera" :position="{ x: -3, y: -2, z: 4 }" />
      <Scene ref="scene" background="#282A36">
        <AmbientLight></AmbientLight>
        <GltfModel src="src/assets/Pyco.gltf" />
      </Scene>
    </Renderer>
    <div class="container">
      <div class="input">
        <h1>Bestelle dir sie direkt nach Hause!</h1>
        <FormKit
          type="form"
          v-model="formData"
          :form-class="submitted ? 'hide' : 'show'"
          submit-label="kostenpflichtig Bestellen"
          @submit="submitHandler"
          id="form"
        >
          <div class="side-by-side">
            <FormKit
              name="name"
              label="Vorname"
              placeholder="Max"
              validation="required"
              validation-behavior="live"
              help=""
              class="formField"
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
              validation="required|required|number"
              validation-behavior="live"
              help=""
            />
          </div>
          <div class="side-by-side">
            <FormKit
              name="postleitzahl"
              label="Postleitzahl"
              placeholder="12345"
              validation="required|length:5|number"
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
          <div class="center">
            <FormKit
              name="version"
              label="Version"
              help="Welche Ausstattungsvariante darf es sein?"
              type="radio"
              value="Standard"
              :options="[
                'Standard',
                'OLED-Bildschirm',
                'Limited Edition \'Traube-Minze\'',
              ]"
              id="center0"
            />
            <FormKit
              name="anzahl"
              label="Anzahl"
              type="number"
              value="1"
              min="1"
              max="10"
              validation="required|max:10|min:0"
              help="maximal 10 Konsolen pro Bestellung"
              id="center1"
            />
          </div>
        </FormKit>
      </div>
      <div v-if="submitted">
        <h2>Submission successful!</h2>
      </div>
      <div v-if="submitted">
        <h2>Modeled group values</h2>
        <pre class="form-data">{{ formData }}</pre>
      </div>
    </div>
  </section>
</template>

<script>
import { AmbientLight, Camera, GltfModel, Renderer, Scene } from 'troisjs';
export default {
  components: {
    AmbientLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
  },
  mounted() {
    var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    this.$refs.renderer.three.setSize(width, width);
  },
};
</script>

<style>
#form {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.center {
  display: flex;
  flex-flow: column;
  align-items: center;
}

#center0 {
  text-align: left;
  margin: auto;
}

#center1 {
  margin: auto;
}
Renderer {
}

section {
  background-color: #282a36;
  color: #f8f8f2;
}

.formkit-inner {
  margin: 2%;
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

pre.form-data {
  box-sizing: border-box;
  background: darkred;
  border: 1px solid #ccc;
  width: 100%;
  padding: 1em;
  border-radius: 0.5em;
}
</style>
