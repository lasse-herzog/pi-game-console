<template>
  <section>
    <Renderer ref="renderer" antialias :orbit-ctrl="{}" resize>
      <Camera ref="camera" :position="{ x: -10, y: 2, z: 0 }" />
      <Scene ref="scene" background="#282A36">
        <AmbientLight></AmbientLight>
        <GltfModel
          src="./Pyco1.glb"
          ref="model"
          v-if="versionSelection === 'Standard'"
        />
        <GltfModel
          src="./Pyco3.glb"
          ref="model"
          v-if="versionSelection === 'OLED-Bildschirm'"
        />
        <GltfModel
          src="./Pyco2.glb"
          ref="model"
          v-if="versionSelection === 'Limited Edition \'Traube-Minze\''"
        />
      </Scene>
    </Renderer>
    <div class="container">
      <div class="input">
        <h1>Bestelle dir sie direkt nach Hause!</h1>
        <FormKit
          type="form"
          :form-class="submitted ? 'hide' : 'show'"
          submit-label="kostenpflichtig Bestellen"
          @submit="submitHandler"
          id="form"
          v-model="data"
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
              v-model="versionSelection"
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
    </div>
    <div v-if="submitted">
      <h2>Submission successful!</h2>
    </div>
    <div v-if="submitted">
      <h2>Modeled group values</h2>
      <pre class="form-data">{{ data }}</pre>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { AmbientLight, Camera, GltfModel, Renderer, Scene } from 'troisjs';

export default {
  components: {
    AmbientLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
  },
  setup() {
    const submitted = ref(false);
    const submitHandler = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      submitted.value = true;
    };
  },
  mounted() {
    let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    let height =
      window.innerHeight > 0 ? window.innerHeight * 0.5 : screen.height * 0.5;
    this.$refs.renderer.three.setSize(width, height);
  },
  data() {
    return {
      versionSelection: 'Standard',
    };
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
  width: 50px;
  height: 50px;
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
