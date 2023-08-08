import { Link } from 'react-router-dom';

export const NaviNotLogin = () => (
  <div className='navi-not-login__container__login'>
    <Link 
      className='navi-not-login__button_register'
      aria-label='Регистрация'
      to='/signup'
      >
      Регистрация
    </Link>
    <Link to='/signin'>
      <button 
        className='navi-not-login__button_login' 
        aria-label='Войти'
        to='/signin'
      >
        Войти
      </button>
    </Link>
  </div>
);