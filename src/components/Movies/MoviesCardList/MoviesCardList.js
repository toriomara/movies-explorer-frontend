import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Preloader } from '../Preloader/Preloader'
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { MoviesMoreButton } from '../MoviesMoreButton/MoviesMoreButton';

export const MoviesCardList = (props) => {
  const {
    cards,
    savedMovies,
    isSavedMovies,
    isLoading,
    isRequestErr,
    isNotFound,
    onMovieAdd,
    onMovieDelete
  } = props;

  const {pathname} = useLocation();
  const [shownMovies, setShownMovies] = useState(0);

  const amountMovies = () => {
    const innerWidth = window.innerWidth;
    (innerWidth >= 768) ? setShownMovies(4) :
    (innerWidth > 320 && innerWidth < 480) ? setShownMovies(1) : setShownMovies(2);
  }

  useEffect(() => {
    amountMovies();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', amountMovies);
    }, 100);
    return () => 
    {window.removeEventListener('resize', amountMovies)};
  }, ['resize']);

  const getSavedMovieCard = (savedMovies, card) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  const showMoreMovies = () => {
    const innerWidth = window.innerWidth;
    (innerWidth >= 768) ? setShownMovies(shownMovies + 1) :
    (innerWidth > 320 && innerWidth < 480) ? setShownMovies(shownMovies + 2) : 
    setShownMovies(shownMovies + 1);
  }

  return (
    <div className='movies-card-list'>
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && <span className='service-message'>Ничего не найдено</span>}
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
}