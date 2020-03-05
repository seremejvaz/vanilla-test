import { cacheService } from './cache';
import { apiService } from './api';
import { generateMovieGrid } from '../components/movies-grid';
import { generateNoresultsContent } from '../components/no-results';
import { renderSortingButton } from '../components/sorting-button';
import { showSpinner, hideSpinner } from '../components/spinner';
class MovieService {
  constructor() {
    this.activeTitleSorting = 1;
  }
  toggleSorting() {
    this.activeTitleSorting = this.activeTitleSorting * -1;
    this.showSortedMovieGrid(cacheService.getCurrentQueryCachedResults());
    renderSortingButton(this.activeTitleSorting);
  }

  sortMovies(a, b) {
    if (a.Title < b.Title) {
      return this.activeTitleSorting * -1;
    }
    if (a.Title > b.Title) {
      return this.activeTitleSorting;
    }
    return 0;
  }

  showSortedMovieGrid(movies) {
    hideSpinner();
    if (movies && movies.length > 0) {
      generateMovieGrid(movies.sort((a, b) => this.sortMovies(a, b)));
    }
  }

  /**
   * Retrieves all the movies.
   * 1 - Perform a querstring search by title to retrieve the list of movies
   * 2 - Retrieve the complete movie details with search by IMDB Id
   *   2.1 - Exclude the movies that we already have saved on cache
   *   2.2 - Perform the GET by ID on the remaining movies
   * 3 - Save the new retrieved details to cache by ID
   * 4 - Call the generateMovieGrid with the list that we retrieve from the cache
   *     (using the ones we already have and the new ones that we just saved there)
   * @param {string} searchString
   */
  getMovies(searchString) {
    showSpinner();
    apiService.getMovies(searchString).then(
      d => {
        const res = d.data.Search;
        if (res && res.length > 0) {
          apiService
            .getMoviesWithDetails(
              res
                // We exclude the movies we already have on cache
                .filter(
                  result => !cacheService.getMovieFromCache(result.imdbID)
                )
                // And then we retrieve only the IDs of those to make the detail request
                .map(r => apiService.getMovieDetails(r.imdbID))
            )
            .then(detailsList => {
              // We save on cache the result of the new movies
              detailsList.map(movieDetail => {
                cacheService.saveMovieOnCache(movieDetail.data);
              });

              cacheService.saveCurrentQueryCachedResults(
                cacheService.getMovieListFromCache(
                  res.map(result => result.imdbID)
                )
              );

              this.showSortedMovieGrid(
                cacheService.getCurrentQueryCachedResults()
              );
            });
        } else {
          hideSpinner();

          // If there are not results
          generateNoresultsContent();
        }
      },
      e => {
        // We show a toast if there's some error on the server request
        showErrorToast(e);
      }
    );
  }
}
export const movieService = new MovieService();
