import spinnerGif from '../../assets/spinner.gif';

export const showSpinner = () => {
  const searchSpinner = document.getElementById('Search-spinner');
  const spinner = document.createElement('div');
  spinner.classList.add('Search-spinner');

  const html = `
    <img
        class="Search-spinner image"
        src=${spinnerGif}
    />
    `;
  spinner.innerHTML = html;
  searchSpinner.append(spinner);
};

export const hideSpinner = () => {
  const searchSpinner = document.getElementById('Search-spinner');
  searchSpinner.innerHTML = '';
};
