import { moviesGrid } from '../App';

export const generateNoresultsContent = () => {
  if (!document.getElementsByClassName('no-result').length) {
    const el = document.createElement('div');
    el.classList.add('no-results');
    const html = `
      <img 
        class="no-results img" 
        src="https://cdn.dribbble.com/users/37530/screenshots/2485318/no-results.png"
      />
      <p class="no-results text">No results</p>
    `;
    el.innerHTML = html;
    moviesGrid.innerHTML = '';
    moviesGrid.append(el);
  }
};
