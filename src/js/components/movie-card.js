import { NON_AVAILABLE_KEY } from '../constant.js';

const checkMovieDataAvailable = data => {
  return data === NON_AVAILABLE_KEY ? '' : data;
};
/**
 *
 * @param {*} movie
 */
export const generateMovieCard = movie => {
  console.log(movie);
  const el = document.createElement('div');
  const html = `
  <a class="MoviesDetail" href="https://www.imdb.com/title/${movie.imdbID}/">
  <div class="MoviesDetail-blockLeft">
    ${
      movie.Poster === 'N/A'
        ? `<img
          class="MoviesDetail-img"
          src="https://image.shutterstock.com/image-vector/no-image-available-icon-vector-600w-1323742826.jpg"
        />`
        : `<img class="MoviesDetail-img" src="${movie.Poster}" />`
    }
  </div>
  <div class="MoviesDetail-blockRight">
    <div class="MoviesDetail-header">
      <p class="MoviesDetail-title">${checkMovieDataAvailable(movie.Title)}</p>
      <p class="MoviesDetail-item">${checkMovieDataAvailable(movie.Year)}</p>
    </div>
    <div class="MoviesDetail-subBlock">
      <p class="MoviesDetail-item">${checkMovieDataAvailable(movie.Genre)}</p>
      <p class="MoviesDetail-item">${checkMovieDataAvailable(movie.Runtime)}</p>
    </div>
    <p class="MoviesDetail-description">
     ${checkMovieDataAvailable(movie.Plot)}
    </p>
    <div class="MoviesDetail-subBlock">
    ${movie.Ratings.map(r => {
      return `<div class="MoviesDetail-punctuation">
      <img
        class="MoviesDetail-punctuation icon"
        src="https://cdn.icon-icons.com/icons2/564/PNG/512/IMDb_icon-icons.com_54172.png"
      />
      <p class="MoviesDetail-item punctuation">${r.Value}</p>
    </div>`;
    }).join(' ')}
    </div>
  </div>
</a>
  `;

  el.innerHTML = html;
  return el;
};
