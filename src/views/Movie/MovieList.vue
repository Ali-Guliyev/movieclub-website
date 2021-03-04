<template>
  <ul class="movie__list">
    <MovieCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
  </ul>
</template>

<script>
import MovieCard from "../Movie/MovieCard.vue";

export default {
  components: { MovieCard },
  props: ["movies"],
};
</script>
