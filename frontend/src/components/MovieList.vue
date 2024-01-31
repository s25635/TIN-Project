<template>
  <div>
    <h2>Movies</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }} - {{ movie.genre }} ({{ movie.releaseYear }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
    };
  },
  mounted() {

  },
};
</script>

<style scoped>
</style>
