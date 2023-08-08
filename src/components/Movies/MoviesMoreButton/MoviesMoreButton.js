export const MoviesMoreButton = (props) => {

  const {cards, shownMovies, showMoreMovies} = props;

  return (
    <div className='movies-more-button-wrapper'>
      {
        cards.length > shownMovies ? (
          <button className='movies-more-button' onClick={showMoreMovies}>
            Ещё
          </button>
        ) : ('')
      }
    </div>
  );
};
