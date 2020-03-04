/**
 *
 * @param {*} movie
 */
export const generateMovieCard = movie => {
  const el = document.createElement('div');
  const html = `
  <a class="MoviesDetail" href="https://www.imdb.com/title/${movie.imdbID}/">
  <div class="MoviesDetail-blockLeft">
    <img
      class="MoviesDetail-img"
      src="${movie.Poster}"
    />
  </div>
  <div class="MoviesDetail-blockRight">
    <div class="MoviesDetail-header">
      <p class="MoviesDetail-title">${movie.Title}</p>
      <p class="MoviesDetail-item">${movie.Year}</p>
    </div>
    <div class="MoviesDetail-subBlock">
      <p class="MoviesDetail-item">${movie.Genre}</p>
      <p class="MoviesDetail-item">${movie.Runtime}</p>
    </div>
    <p class="MoviesDetail-description">
     ${movie.Plot}
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
    })}
    </div>
  </div>
</a>
  `;

  el.innerHTML = html;
  return el;
};
