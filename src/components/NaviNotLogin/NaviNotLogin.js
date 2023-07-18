import { Link } from 'react-router-dom';

const NaviNotLogin = () => (
  <div className="navi-not-login__container__login">
    <Link className="navi-not-login__button_register" to="/signup">Регистрация</Link>
    <Link to="/signin">
      <button className="navi-not-login__button_login" to="/signin">Войти</button>
    </Link>
  </div>
);

export default NaviNotLogin;
