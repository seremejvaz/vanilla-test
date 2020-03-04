import { generateMovieCard } from './movie-card';

export const generateMovieGrid = movieList => {
  const moviesGrid = document.getElementById('movies-grid');
  const newMovieGrid = document.createElement('div');

  movieList.map(result => {
    newMovieGrid.append(generateMovieCard(result));
  });

  moviesGrid.innerHTML = newMovieGrid.innerHTML;
};
