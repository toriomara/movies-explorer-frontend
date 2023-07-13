import { useState } from 'react';

const MoviesCard = ({card}) => {

  const [isLiked, setIsLiked] = useState(false);
  const changeCardStatus = () => {
    setIsLiked(!isLiked)
  }

  return (
    <>
      {card.map(card => (
        <article className="movies-card" key={card.nameRU}>
          <div className="movies-card__info">
            <h2 className="movies-card__info__title">{card.nameRU}</h2>
            <span className="movies-card__info__duration">{card.duration}</span>
            <button 
              className={`${isLiked ? "movies-card__like_active" : "movies-card__like"}`} 
              aria-label='Сохранить' 
              onClick={changeCardStatus}/>
          </div>
          <img className="movies-card__image" src={card.imgLink} alt={card.nameRU}/>
        </article>
      ))}
    </>
  );
};

export default MoviesCard;
