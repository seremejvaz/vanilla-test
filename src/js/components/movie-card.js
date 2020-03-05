import {
  NON_AVAILABLE_KEY,
  IMDb,
  ROTTEN_TOMATOES,
  METACRITIC
} from '../constant.js';

const checkMovieDataAvailable = data => {
  return data === NON_AVAILABLE_KEY ? '' : data;
};

const getRatingsIcons = rating => {
  switch (rating) {
    case 'Internet Movie Database':
      return IMDb;
    case 'Rotten Tomatoes':
      return ROTTEN_TOMATOES;
    case 'Metacritic':
      return METACRITIC;
    default:
      return '';
  }
};
/**
 *
 * @param {*} movie
 */
export const generateMovieCard = movie => {
  const el = document.createElement('div');
  const html = `
  <a class="MoviesDetail" href="https://www.imdb.com/title/${movie.imdbID}/">
  <div class="MoviesDetail-blockLeft">
    ${
      movie.Poster === 'N/A'
        ? `<div
          class="MoviesDetail-img--container"
          style="background-image: url('https://image.shutterstock.com/image-vector/no-image-available-icon-vector-600w-1323742826.jpg')"
        />`
        : `<div class="MoviesDetail-img--container" style="background-image: url(${movie.Poster})"  />`
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
    ${movie.Ratings.map(
      r =>
        `<div class="MoviesDetail-punctuation">
      <img
        class="MoviesDetail-punctuation icon"
        src=${getRatingsIcons(r.Source)}
      />
      <p class="MoviesDetail-item punctuation">${r.Value}</p>
    </div>`
    ).join(' ')}
    </div>
  </div>
</a>
  `;

  el.innerHTML = html;
  return el;
};
