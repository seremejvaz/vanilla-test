import { movieService } from '../services/movies';

const sortingButton = document.getElementById('SortingButton');

if (sortingButton) {
  sortingButton.onclick = () => {
    movieService.toggleSorting();
  };
}
