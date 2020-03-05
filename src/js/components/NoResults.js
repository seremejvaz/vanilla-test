import { moviesGrid } from '../App';

export const generateNoresultsContent = () => {
  if (!document.getElementsByClassName('no-result').length) {
    const el = document.createElement('div');
    el.classList.add('NoResults');
    const html = `
      <img 
        class="NoResults img" 
        src="https://cdn.dribbble.com/users/37530/screenshots/2485318/no-results.png"
      />
      <p class="NoResults text">No results</p>
    `;
    el.innerHTML = html;
    moviesGrid.innerHTML = '';
    moviesGrid.append(el);
  }
};
