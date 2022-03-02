<template>
  <h1>{{ this.title }}</h1>
</template>

<script>
export default {
  data() {
    return {
      title: null,
    };
  },
  mounted() {
    this.title = 'lel';
  },
};
</script>

<style scoped></style>
