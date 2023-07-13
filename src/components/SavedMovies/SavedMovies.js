import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesMoreButton from '../Movies/MoviesMoreButton/MoviesMoreButton';
import { savedMovies } from '../temp/movies';

const Movies = () => {

  return (
    <>
      <SearchForm/>
      <MoviesCardList movies={savedMovies}/>
      <MoviesMoreButton/>
    </>
  );
};

export default Movies;