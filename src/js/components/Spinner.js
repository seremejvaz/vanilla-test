import spinnerGif from '../../assets/spinner.gif';

const getSpinner = isHidden => {
  const hiddenClass = isHidden ? ' hidden' : '';
  return `
 <img
     class="Search-spinner image${hiddenClass}"
     src="https://raw.githubusercontent.com/seremejvaz/vanilla-test/master/src/assets/spinner.gif"
 />
 `;
};

export const showSpinner = () => {
  const searchSpinner = document.getElementById('Search-spinner');
  const spinner = document.createElement('div');
  spinner.classList.add('Search-spinner');

  // Using src=${spinnerGif} works fine locally but doesn't work on Netlify
  // (even thought the build seems to copy the asset with the correct name).
  // I didn't want to spend much time in the deploy so I used the direct raw
  // url from Github.
  spinner.innerHTML = getSpinner();
  searchSpinner.innerHTML = spinner.outerHTML;
};

export const hideSpinner = () => {
  const searchSpinner = document.getElementById('Search-spinner');
  const spinner = document.createElement('div');
  spinner.classList.add('Search-spinner');
  spinner.innerHTML = getSpinner(true);
  searchSpinner.innerHTML = spinner.outerHTML;
};
