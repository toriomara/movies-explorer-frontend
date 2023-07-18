import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({movies}) => {
  return (
    <div className="movies-card-list">
      <MoviesCard card={movies}/>
    </div>
  );
};

export default MoviesCardList;