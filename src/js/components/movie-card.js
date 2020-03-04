const generateMovieTitle = title => {
  const el = document.createElement('h1');
  el.innerText = title;
  return el;
};

const generateMovieYear = year => {
  const el = document.createElement('span');
  el.innerText = year;
  return el;
};

const generateMoviePoster = poster => {
  const el = document.createElement('img');
  el.src = poster;
  return el;
};

const generateMovieDescription = description => {
  const el = document.createElement('p');
  el.innerText = description;
  return el;
};

const generateMovieRating = rating => {
  const el = document.createElement('p');
  const title = document.createElement('strong');
  title.innerHTML = rating.Source;
  const value = document.createElement('span');
  value.innerHTML = rating.Value;

  el.append(title);
  el.append(value);
  return el;
};

export const generateMovieCard = movie => {
  console.log(movie);

  const movieCard = document.createElement('a');
  movieCard.href = `http://imdb.com/title/${movie.imdbID}`;
  movieCard.classList.add('movie-card');

  movieCard.append(generateMovieTitle(movie.Title));
  movieCard.append(generateMovieYear(movie.Year));
  movieCard.append(generateMoviePoster(movie.Poster));
  movieCard.append(generateMovieDescription(movie.Plot));
  /**
   * Ratings are returned as [{Source: string, Value: string}...]
   */
  movie.Ratings.map(rating => {
    movieCard.append(generateMovieRating(rating));
  });

  return movieCard;
};
