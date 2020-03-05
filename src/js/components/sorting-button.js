import { movieService } from '../services/movies';

const SEARCH_BUTTON_KEY = 'Search-button';
const sortingButton = document.getElementById(SEARCH_BUTTON_KEY);

sortingButton.onclick = () => {
  movieService.toggleSorting();
};

export const renderSortingButton = activeSorting => {
  const sortButtonContainer = document.getElementById(SEARCH_BUTTON_KEY);
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
  document.getElementById(SEARCH_BUTTON_KEY).append(el);
};
