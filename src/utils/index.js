import { SHORT_MOVIE_DURATION } from './constants';

export const filterMovies = (movies, search) => {
  const moviesBySearch = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userSearch = search.toLowerCase().trim();
    return (
      movieRu.indexOf(userSearch) !== -1 || movieEn.indexOf(userSearch) !== -1
    );
  });
  return moviesBySearch;
};

export const filterDuration = (movies) => {
  return movies.filter((movie) => movie.duration < SHORT_MOVIE_DURATION);
};
