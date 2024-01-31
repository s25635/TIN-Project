<template>
  <div v-if="movie">
    <h2>{{ movie.title }}</h2>
    <p><strong>Genre:</strong> {{ movie.genre }}</p>
    <p><strong>Release Year:</strong> {{ movie.releaseYear }}</p>\
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: null,
      movieId: this.$route.params.id,
    };
  },
  mounted() {
  },
};
</script>

<style scoped>
</style>
