import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MovieDetails from "../views/Movie/MovieDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "MovieDetails",
    component: MovieDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
