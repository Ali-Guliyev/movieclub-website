<template>
  <router-link :to="{ name: 'MovieDetails', params: { id: movie.imdbID } }">
    <div class="movieCard">
      <img :src="movie.Poster" alt="" />
      <div class="movieCard__about">
        <h2>{{ movie.Title }}</h2>
        <div class="rating">
          <p>{{ movie.imdbRating }}</p>
          <span class="material-icons">
            star_border_purple500
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import MovieService from "@/services/MovieService.js";

export default {
  components: { MovieService },
  props: ["movie"],
  setup(props) {
    MovieService.getMovieById(props.movie.imdbID).then((res) => {
      props.movie.imdbRating = res.data.imdbRating;
    });
  },
};
</script>
