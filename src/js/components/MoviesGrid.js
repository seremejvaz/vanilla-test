import { generateMovieCard } from './MovieDetail';

export const generateMovieGrid = movieList => {
  const moviesGrid = document.getElementById('MoviesGrid');
  const newMovieGrid = document.createElement('div');

  movieList.map(result => {
    newMovieGrid.append(generateMovieCard(result));
  });

  moviesGrid.innerHTML = newMovieGrid.innerHTML;
};
