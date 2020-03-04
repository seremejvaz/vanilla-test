import { API_URL } from '../constant';
import axios from 'axios';

class ApiService {
  constructor() {
    this.axios = axios;
    this.axios.defaults.baseURL = API_URL;
  }
  /**
   * Performs a string search by movie title
   * @param {string} query
   */
  getMovies(query) {
    return this.axios.get(`&s=${query}`);
  }
  /**
   * Performs multiple axios operations
   * @param * moviesListgetDetailArray
   */
  getMoviesWithDetails(moviesListgetDetailArray) {
    return this.axios.all(moviesListgetDetailArray);
  }

  /**
   * Performs a detail GET by IMDB ID. An array of these
   * will be used in getMoviesWithDetails to all the returned ones
   * @param {string} imdbId 
   */
  getMovieDetails(imdbId) {
    return this.axios.get(`&i=${imdbId}`);
  }
}

export const apiService = new ApiService();
