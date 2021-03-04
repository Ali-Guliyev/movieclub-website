<template>
  <main>
    <form class="main__form" @submit.prevent="handleSearch">
      <input
        spellcheck="false"
        v-model="query"
        class="main__searchInput"
        type="text"
        placeholder="Search a movie"
      />
    </form>

    <MovieList :movies="movies" />
  </main>
</template>

<script>
import { ref } from "vue";
import MovieService from "../services/MovieService.js";
import MovieList from "./Movie/MovieList.vue";

export default {
  components: { MovieList },
  setup() {
    const query = ref("");
    const movies = ref([]);

    const handleSearch = () => {
      MovieService.getMovies(query.value).then((res) => {
        let data = res.data.Search;
        if (data != undefined) {
          movies.value = data.filter((movie) => movie.Poster.includes("http"));
        }
      });
    };

    return { movies, query, handleSearch };
  },
};
</script>
