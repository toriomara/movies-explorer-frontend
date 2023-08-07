import { useState, useEffect } from 'react';
import { SearchForm } from './SearchForm/SearchForm';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { filterMovies, filterDuration } from '../../utils';
import { getMovies } from '../../utils/MoviesApi';

export const Movies = (props) => {

  const {
    savedMovies,
    onMovieAdd, 
    onMovieDelete
  } = props;

  const [isLoading, setIsLoading] = useState(false); 
  const [initialMovies, setInitialMovies] = useState([]); 
  const [filteredMovies, setFilteredMovies] = useState([]); 
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isRequestErr, setIsRequestErr] = useState(false); 
  const [isNotFound, setIsNotFound] = useState(false); 

  const handleFilterMovies = (movies, search, short) => {
    const moviesList = filterMovies(movies, search, short); 
    setInitialMovies(moviesList);
    setFilteredMovies(short ? filterDuration(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
    localStorage.setItem('allMovies', JSON.stringify(movies));
  }

  const handleTogglerShort = () => {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      if (filterDuration(initialMovies).length === 0) {
        setFilteredMovies(filterDuration(initialMovies));
      } else {
        setFilteredMovies(filterDuration(initialMovies));
      }
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem('shortMovies', !isShortMovies);
  }

  const handleSearchMovies = (search) => {
    localStorage.setItem('movieSearch', search);
    localStorage.setItem('shortMovies', isShortMovies);

    if (localStorage.getItem('allMovies')) {
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      handleFilterMovies(movies, search, isShortMovies);
    } else {
      setIsLoading(true);
      getMovies()
        .then((cardsData) => {
          handleFilterMovies(cardsData, search, isShortMovies);
          setIsRequestErr(false);
        })
        .catch((err) => {
          setIsRequestErr(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setInitialMovies(movies);
      if (localStorage.getItem('shortMovies') === 'true') {
        setFilteredMovies(filterDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movieSearch')) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <SearchForm
        onSearchMovies={handleSearchMovies}
        onShortMovies={handleTogglerShort}
        isShortMovies={isShortMovies}
      />
      <MoviesCardList 
        savedMovies={savedMovies}
        cards={filteredMovies}
        isSavedMovies={false}
        isLoading={isLoading}
        isRequestErr={isRequestErr}
        isNotFound={isNotFound}
        onMovieAdd={onMovieAdd}
        onMovieDelete={onMovieDelete}
      />
    </>
  );
};
