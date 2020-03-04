/**
 * This service will be used to store a local cache so we don't need
 * to repeat previously done GET calls
 */
class CacheService {
  constructor() {
    this.movieCache = {};
    this.currentQueryCachedresults = {};
  }

  /**
   * Retrieve a single movie from the cache
   * @param {string} id
   */
  getMovieFromCache(id) {
    return this.movieCache[id];
  }
  /**
   * Saves movie data on cache using it's IMDB ID as key
   * @param * movieData
   */
  saveMovieOnCache(movieData) {
    if (!movieData || !movieData.imdbID) {
      console.error('No ID found');
    }
    this.movieCache[movieData.imdbID] = movieData;
  }

  /**
   * Retrieve an array of movie objects from the cache
   */
  getMovieListFromCache(movieIdsList) {
    return movieIdsList.map(id => this.movieCache[id]);
  }

  saveCurrentQueryCachedResults(results) {
    this.currentQueryCachedresults = results;
  }

  getCurrentQueryCachedResults() {
    return this.currentQueryCachedresults;
  }
}

export const cacheService = new CacheService();
