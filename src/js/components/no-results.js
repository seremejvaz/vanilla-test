import { moviesGrid } from '../../index';

export const generateNoresultsContent = () => {
  if (!document.getElementsByClassName('no-result').length) {
    const div = document.createElement('div');
    div.classList.add('no-result');
    div.innerHTML = 'No results';
    moviesGrid.innerHTML = '';
    moviesGrid.append(div);
  }
};
