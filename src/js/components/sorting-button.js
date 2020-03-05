import { movieService } from '../services/movies';

const sortingButton = document.getElementById('Search-button');

sortingButton.onclick = () => {
  movieService.toggleSorting();
};

export const renderSortingButton = activeSorting => {
  const sortButtonContainer = document.getElementById('Search-button');
  const el = document.createElement('div');
  const sortingIcon =
    activeSorting === 1 ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
  const html = `
  <i class="material-icons md-light">
    ${sortingIcon}
  </i>
  `;
  el.innerHTML = html;
  sortButtonContainer.innerHTML = '';
  document.getElementById('Search-button').append(el);
};
