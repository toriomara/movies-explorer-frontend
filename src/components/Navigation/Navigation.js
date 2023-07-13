import { Link } from 'react-router-dom';
import BurgerMenu from '../Movies/BurgerMenu/BurgerMenu';
import { useState } from 'react';

const Navigation = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navigation">
      <div className="navigation__list">
        <Link className="navigation__list__link" to="/movies">
          Фильмы
        </Link>
        <Link className="navigation__list__link" to="/saved-movies">
          Сохранённые фильмы
        </Link>
        <Link className="navigation__list__link" to="/profile">
          Аккаунт
          <div className="navigation__icon-wrapper">
            <span className="navigation__icon"></span>
          </div>
        </Link>
      </div>
      <button className="navigation__burger" onClick={handleMenuOpen}></button>
      <BurgerMenu isMenuOpen={isMenuOpen} onClose={handleMenuOpen}/>
    </nav>
  );
};

export default Navigation;
