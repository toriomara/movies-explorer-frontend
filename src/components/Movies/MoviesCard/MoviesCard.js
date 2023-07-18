import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({card}) => {
  const {pathname} = useLocation();

  const [isLiked, setIsLiked] = useState(false);
  const changeCardStatus = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div>
      {card.map(card => (
        <article className="movies-card" key={card.nameRU}>
          <div className="movies-card__info">
            <h2 className="movies-card__title">{card.nameRU}</h2>
            <span className="movies-card__duration">{card.duration}</span>
            {pathname === '/movies' && 
              <button 
                className={`${isLiked ? "movies-card__like_active" : "movies-card__like"}`} 
                aria-label='Сохранить' 
                onClick={changeCardStatus}
              />
            }
            {pathname === '/saved-movies' && 
              <button 
                className="movies-card__close"
                aria-label='Удалить' 
              />
            }
          </div>
          <img className="movies-card__image" src={card.imgLink} alt={card.nameRU}/>
        </article>
      ))}
    </div>
  );
};

export default MoviesCard;
