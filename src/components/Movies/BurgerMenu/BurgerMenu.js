import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = (props) => {

  const {isMenuOpen, onClose } = props;

  // useEffect(() => {
  //   window.addEventListener('resize', onClose);
  //   return(() => {
  //     window.removeEventListener('resize', onClose);
  //   })
  // }, [isMenuOpen])
  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen])

  return (
    <div className={`${isMenuOpen ? "burger-menu_active" : "burger-menu"}`}>
      <button className="navigation__burger_close" onClick={onClose} />
      <div className="burger-menu__navi-block">
        <Link className="burger-menu__link" to="/" onClick={onClose}>
          Главная
        </Link>
        <Link className="burger-menu__link" to="/movies" onClick={onClose}>
          Фильмы
        </Link>
        <Link className="burger-menu__link" to="/saved-movies" onClick={onClose}>
          Сохранённые фильмы
        </Link>
      </div>
        <Link className="burger-menu__link" to="/profile" onClick={onClose}>
          Аккаунт
          <div className="navigation__icon-wrapper">
            <span className="navigation__icon"></span>
          </div>
        </Link>
    </div>
  );
};

export default BurgerMenu;
