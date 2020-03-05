import spinnerGif from '../../assets/spinner.gif';

export const showSpinner = () => {
  const searchSpinner = document.getElementById('Search-spinner');
  const spinner = document.createElement('div');
  spinner.classList.add('Search-spinner');

  // Using src=${spinnerGif} works fine locally but doesn't work on Netlify
  // (even thought the build seems to copy the asset with the correct name).
  // I didn't want to spend much time in the deploy so I used the direct raw
  // url from Github.
  const html = `
    <img
        class="Search-spinner image"
        src="https://github.com/seremejvaz/vanilla-test/raw/master/src/assets/spinner.gif"
    />
    `;
  spinner.innerHTML = html;
  searchSpinner.append(spinner);
};

export const hideSpinner = () => {
  const searchSpinner = document.getElementById('Search-spinner');
  searchSpinner.innerHTML = '';
};
