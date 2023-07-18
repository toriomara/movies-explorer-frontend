import { Link } from 'react-router-dom';
import BurgerMenu from '../Movies/BurgerMenu/BurgerMenu';
import { useState } from 'react';

const Navigation = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav>
      <ul className="navigation-list">
        <Link className="navigation-list__link" to="/movies">
          Фильмы
        </Link>
        <Link className="navigation-list__link" to="/saved-movies">
          Сохранённые фильмы
        </Link>
        <Link className="navigation-list__link" to="/profile">
          Аккаунт
          <div className="navigation-icon-wrapper">
            <span className="navigation-icon-wrapper__icon"></span>
          </div>
        </Link>
      </ul>
      <button className="navigation__burger" onClick={handleMenuOpen}></button>
      <BurgerMenu isMenuOpen={isMenuOpen} onClose={handleMenuOpen}/>
    </nav>
  );
};

export default Navigation;
