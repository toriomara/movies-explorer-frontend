import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesMoreButton from './MoviesMoreButton/MoviesMoreButton';
import { movies } from '../temp/movies';

const Movies = () => {

  return (
    <>
      <SearchForm/>
      <MoviesCardList movies={movies}/>
      <MoviesMoreButton/>
    </>
  );
};

export default Movies;