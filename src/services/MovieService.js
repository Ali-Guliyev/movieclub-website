import axios from "axios";

const API_KEY = "62ace8d";

const apiClient = axios.create({
  baseURL: `http://www.omdbapi.com`,
});

export default {
  getMovies(search) {
    return apiClient.get(`?apikey=${API_KEY}&s=${search}`);
  },
  getMovieById(id) {
    return apiClient.get(`?apikey=${API_KEY}&i=${id}`);
  },
};
