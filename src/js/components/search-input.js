import { movieService } from '../services/movies';
import './sorting-button';

export const initSearchInput = () => {
  const searchInput = document.getElementById('Search-input');
  searchInput.onchange = e => {
    const searchString = e.target.value || '';
    if (searchString.length > 0) {
      movieService.getMovies(searchString);
    }
  };
};
