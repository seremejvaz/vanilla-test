import { initSearchInput } from './components/search-input';

export const root = document.getElementById('root');
export const moviesGrid = document.getElementById('MoviesGrid');

export const App = {
  init: () => {
    // Perform all required init actions
    initSearchInput();
  }
};
