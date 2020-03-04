import { movieService } from '../services/movies';
import './sorting-button';
const searchInput = document.getElementById('Search-input');

searchInput.onchange = e => {
  const searchString = e.target.value || '';
  movieService.getMovies(searchString);
};
