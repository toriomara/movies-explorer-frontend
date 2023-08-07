import { useState, useEffect } from 'react';
import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList';
import { filterMovies, filterDuration } from '../../utils/index';

export const SavedMovies = ({savedMovies, onMovieDelete}) => {

  const [filteredMovies, setFilteredMovies] = useState(savedMovies); 
  const [isShortMovies, setIsShortMovies] = useState(false); 
  const [isNotFound, setIsNotFound] = useState(false); 
  const [searchRequest, setSearchRequest] = useState('');

  const handleSearchMovies = (request) => {
    setSearchRequest(request);
  }

  const handleShortMovies = () => {
    setIsShortMovies(!isShortMovies);
  }

  useEffect(() => {
    const moviesList = filterMovies(savedMovies, searchRequest);
    setFilteredMovies(isShortMovies ? 
      filterDuration(moviesList) 
    : 
      moviesList);
  }, [savedMovies, isShortMovies, searchRequest]);

  useEffect(() => {
    (filteredMovies.length === 0) ? 
      setIsNotFound(true) 
    : 
      setIsNotFound(false);
  }, [filteredMovies]);

  return (
    <>
      <SearchForm
        onSearchMovies={handleSearchMovies}
        onShortMovies={handleShortMovies}
      />
      <MoviesCardList 
        savedMovies={savedMovies}
        onMovieDelete={onMovieDelete}
        isSavedMovies={true}
        cards={filteredMovies}
        isNotFound={isNotFound}
      />
    </>
  );
};
