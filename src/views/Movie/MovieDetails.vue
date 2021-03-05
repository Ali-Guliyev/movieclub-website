<template>
  <div class="movieDetails__header">
    <div class="movieDetails__wrapper">
      <h1 class="movieDetailsHeader__title">Movieclub</h1>
      <img
        class="movieDetailsHeader__img"
        src="@/assets/img/clapperboard.png"
        alt=""
      />
    </div>
  </div>

  <div class="movieDetails__main">
    <div class="movieDetailsCard">
      <div class="movieDetailsMain__column-1">
        <img :src="movie.Poster" alt="" />
      </div>
      <div class="movieDetailsMain__column-2">
        <h1>{{ movie.Title }}</h1>
        <p>
          {{ movie.hours }}hr {{ movie.minutes }}min &nbsp; • &nbsp;&nbsp;
          {{ movie.Year }} &nbsp; • &nbsp;
          {{ movie.Genre }}
        </p>
        <br />

        <p>{{ movie.Plot }}</p>
        <br />

        <div v-if="movie.Director != 'N/A'">
          <h2>Director</h2>
          <p>{{ movie.Director }}</p>
          <br />
        </div>

        <div v-if="movie.Actors != 'N/A'">
          <h2>Actors</h2>
          <p>{{ movie.Actors }}</p>
          <br />
        </div>

        <h2>Cast</h2>
        <p>{{ movie.Country }}</p>

        <span @click="$router.go(-1)" class="material-icons">
          west
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MovieService from "@/services/MovieService.js";
import { ref } from "vue";

export default {
  props: ["id"],
  setup(props) {
    const movie = ref({});

    MovieService.getMovieById(props.id).then((res) => {
      movie.value = res.data;
      // Make Changes To The Current
      movie.value.hours = Math.floor(parseInt(movie.value.Runtime) / 60);
      movie.value.minutes = parseInt(movie.value.Runtime) % 60;
    });

    return { movie };
  },
};
</script>
