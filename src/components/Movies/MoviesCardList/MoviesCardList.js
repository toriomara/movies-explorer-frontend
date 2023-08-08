import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Preloader } from '../Preloader/Preloader';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { MoviesMoreButton } from '../MoviesMoreButton/MoviesMoreButton';
import {
  WIDE_SCREEN_WIDTH,
  TABLET_PC_WIDTH,
  MOBILE_WIDTH,
  MORE_MOVIES_WIDE_SCREEN,
  MORE_MOVIES_TABLET_PC,
  MORE_MOVIES_MOBILE,
  ONE_MORE_MOVIES,
} from '../../../utils/constants';

export const MoviesCardList = (props) => {
  const {
    cards,
    savedMovies,
    isSavedMovies,
    isLoading,
    isRequestErr,
    isNotFound,
    onMovieAdd,
    onMovieDelete,
  } = props;

  const { pathname } = useLocation();
  const [shownMovies, setShownMovies] = useState(0);

  const amountMovies = () => {
    const innerWidth = window.innerWidth;
    innerWidth >= WIDE_SCREEN_WIDTH
      ? setShownMovies(MORE_MOVIES_WIDE_SCREEN)
      : innerWidth > MOBILE_WIDTH && innerWidth < TABLET_PC_WIDTH
      ? setShownMovies(ONE_MORE_MOVIES)
      : setShownMovies(MORE_MOVIES_TABLET_PC);
  };

  useEffect(() => {
    amountMovies();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', amountMovies);
    }, 100);
    return () => {
      window.removeEventListener('resize', amountMovies);
    };
  }, ['resize']);

  const getSavedMovieCard = (savedMovies, card) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  };

  const showMoreMovies = () => {
    const innerWidth = window.innerWidth;
    innerWidth >= WIDE_SCREEN_WIDTH
      ? setShownMovies(shownMovies + ONE_MORE_MOVIES)
      : innerWidth > MOBILE_WIDTH && innerWidth < TABLET_PC_WIDTH
      ? setShownMovies(shownMovies + MORE_MOVIES_MOBILE)
      : setShownMovies(shownMovies + ONE_MORE_MOVIES);
  };

  return (
    <div className='movies-card-list'>
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (
        <span className='service-message'>Ничего не найдено</span>
      )}
      {isRequestErr && !isLoading && (
        <span className='service-message'>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </span>
      )}
      {!isLoading && !isRequestErr && !isNotFound && (
        <>
          {pathname === '/saved-movies' ? (
            <>
              <ul>
                {cards.map((card) => (
                  <MoviesCard
                    key={card._id || card.id}
                    saved={getSavedMovieCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedMovies={isSavedMovies}
                    onMovieAdd={onMovieAdd}
                    onMovieDelete={onMovieDelete}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul>
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={card._id || card.id}
                    saved={getSavedMovieCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedMovies={isSavedMovies}
                    onMovieAdd={onMovieAdd}
                    onMovieDelete={onMovieDelete}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <MoviesMoreButton
                cards={cards}
                shownMovies={shownMovies}
                showMoreMovies={showMoreMovies}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};
