import { movieService } from '../services/movies';
import './sorting-button';
const searchInput = document.getElementById('input');

searchInput.onchange = e => {
  const searchString = e.target.value || '';

  movieService.getMovies(searchString);
};
