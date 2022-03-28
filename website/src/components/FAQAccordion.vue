<template>
  <div id="container">
    <div>
      <button
        @click="toggleAccordion()"
        class="accordion-title"
        :aria-expanded="isOpen"
        :aria-controls="`collapse${_uid}`"
      >
        <slot name="title" />
      </button>
    </div>
    <div class="accordion-content" v-show="isOpen" :id="`collapse${_uid}`">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scope>
#container {
  padding: 1% 5%;
}

.accordion-title {
  border-radius: 15px;
  border-width: 0;
  min-height: 6rem;
  max-width: 65rem;
  color: #f8f8f2;
  background-color: #a243c2;
  width: 100%;
  cursor: pointer;
}

.accordion-content {
  color: #f8f8f2;
}
</style>
