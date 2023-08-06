export const MoviesCard = (props) => {

  const {
    card, 
    isSavedMovies,
    onMovieAdd,
    onMovieDelete,
    savedMovies,
    saved
  } = props;

  const durationHours = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return (hours > 0) ? `${hours} ч ${minutes} м`: `${minutes} м`
  }

  const handleChangeStatus = () => {
    if (saved) {
      onMovieDelete(savedMovies.filter((i) => i.movieId === card.id)[0]);
    } else {
      onMovieAdd(card);
    }
  }

  const deleteMovie = () => {
    onMovieDelete(card);
  }

  const changeButton = `${
    saved ? 'movies-card__like_active' : 'movies-card__like'
  }`;

  return (
    <article className='movies-card'>
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{card.nameRU}</h2>
        <span className='movies-card__duration'>{durationHours(card.duration)}</span>
        {
          isSavedMovies ? 
            <button 
              className='movies-card__close' 
              onClick={deleteMovie}
              type='button'
              aria-label='Удалить'
            />
            :
            <button 
              className={changeButton} 
              onClick={handleChangeStatus}
              type='button'
              aria-label='Сохранить'
            />
        }
      </div>
      <a 
        className='movies-card__link' 
        href={card.trailerLink}
        target='_blank'
        rel='noreferrer noopener'
        >
        <img 
          className='movies-card__image' 
          src={(typeof card.image === 'string') ? card.image : `https://api.nomoreparties.co/${card.image.url}`}
          alt={card.nameRU}
        />
      </a>
    </article>
  );
};