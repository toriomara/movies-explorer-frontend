import { NavLink } from 'react-router-dom';
import { BurgerMenu } from '../Movies/BurgerMenu/BurgerMenu';
import { useState } from 'react';

export const Navigation = ({isOpen, onClose}) => {

  return (
    <nav>
      <nav className='navigation-list'>
        <NavLink 
          className='navigation-list__link' 
          aria-label='Фильмы'
          to='/movies'
        >
          Фильмы
        </NavLink>
        <NavLink 
          className='navigation-list__link' 
          aria-label='Сохранённые фильмы'
          to='/saved-movies'
        >
          Сохранённые фильмы
        </NavLink>
        <NavLink 
          className='navigation-list__link'
          aria-label='Аккаунт'
          to='/profile'
        >
          Аккаунт
            <i className='navigation-icon-wrapper__icon'/>
        </NavLink>
      </nav>
      <button 
        className='navigation__burger'
        aria-label='Меню'
        onClick={onClose}
      ></button>
      <BurgerMenu isOpen={isOpen} onClose={onClose}/>
    </nav>
  );
};
