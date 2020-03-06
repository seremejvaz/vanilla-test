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
  <a class="MovieDetail" href="https://www.imdb.com/title/${
    movie.imdbID
  }/" target="_blank">
    <div class="MovieDetail-blockLeft">
      ${
        movie.Poster === 'N/A'
          ? `<div
            class="MovieDetail-img--container"
            style="background-image: url('https://image.shutterstock.com/image-vector/no-image-available-icon-vector-600w-1323742826.jpg')"
          />`
          : `<div class="MovieDetail-img--container" style="background-image: url(${movie.Poster})"  />`
      }
    </div>
    <div class="MovieDetail-blockRight">
      <div class="MovieDetail-header">
        <p class="MovieDetail-title">${checkMovieDataAvailable(movie.Title)}</p>
        <div class="MovieDetail-subBlock">
          <p class="MovieDetail-item">${checkMovieDataAvailable(movie.Year)}</p>
          <p class="MovieDetail-item">${checkMovieDataAvailable(
            movie.Runtime
          )}</p>
        </div>
      </div>
      <p class="MovieDetail-item">${checkMovieDataAvailable(movie.Genre)}</p>
      <p class="MovieDetail-description">
      ${checkMovieDataAvailable(movie.Plot)}
      </p>
      <div class="MovieDetail-bottom-subBlock">
      ${movie.Ratings.map(
        r =>
          `<div class="MovieDetail-punctuation">
        <img
          class="MovieDetail-punctuation icon"
          src=${getRatingsIcons(r.Source)}
        />
        <p class="MovieDetail-item punctuation">${r.Value}</p>
      </div>`
      ).join(' ')}
      </div>
    </div>
  </a>
  `;

  el.innerHTML = html;
  return el;
};
