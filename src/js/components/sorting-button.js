import { movieService } from '../services/movies';

const sortingButton = document.getElementById('SortingButton');
console.log(sortingButton);

sortingButton.onclick = () => {
  console.log('SA');

  movieService.toggleSorting();
};
