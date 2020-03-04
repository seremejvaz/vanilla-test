import { movieService } from '../services/movies';

const sortingButton = document.getElementById('SortingButton');

sortingButton.onclick = () => {
  movieService.toggleSorting();
};
