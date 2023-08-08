import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const BurgerMenu = ({isOpen, onClose }) => {

  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth > 768) return onClose();
    }
    if (isOpen) {
      window.addEventListener('resize', closeMenu);
      return  () => {window.removeEventListener('resize', closeMenu)};
    }
  }, [innerWidth, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen])

  return (
    <div className={`${isOpen ? "burger-menu_active" : "burger-menu"}`}>
      <button className="burger-menu__button-close" onClick={onClose} />
      <div className="burger-menu__navi-block">
        <Link 
          className="burger-menu__link"
          aria-label="Главная"
          to="/" 
          onClick={onClose}
          >
          Главная
        </Link>
        <Link 
          className="burger-menu__link" 
          aria-label="Фильмы"
          to="/movies" 
          onClick={onClose}
          >
          Фильмы
        </Link>
        <Link 
          className="burger-menu__link" 
          aria-label="Сохранённые фильмы"
          to="/saved-movies" 
          onClick={onClose}
          >
          Сохранённые фильмы
        </Link>
      </div>
        <Link 
          className="burger-menu__link" 
          aria-label="Аккаунт"
          to="/profile" 
          onClick={onClose}
        >
          Аккаунт
          <div className="navigation-icon-wrapper">
            <span className="navigation-icon-wrapper__icon"></span>
          </div>
        </Link>
    </div>
  );
};
