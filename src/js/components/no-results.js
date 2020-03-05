import { moviesGrid } from '../../index';

export const generateNoresultsContent = () => {
  if (!document.getElementsByClassName('no-result').length) {
    const el = document.createElement('div');
    const html = `
      <div class="no-results">
        <img class="no-results image" src=""/>
        <p class="no-results text">No results</p>
      </div> 
    `;
    el.innerHTML = html;
    return el;
  }
};
