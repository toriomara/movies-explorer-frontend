import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Header = () => (
  <header className="header">
      <div className="header__container">
        <img src={logo} alt="Лого"/>
        <div className="header__container__login">
          <Link className="header__button_register" to="/signup">Регистрация</Link>
          <button className="header__button_login">Войти</button>
        </div>
      </div>
  </header>
);

export default Header;
