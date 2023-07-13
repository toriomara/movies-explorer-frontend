import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import NaviNotLogin from '../NaviNotLogin/NaviNotLogin';
import Navigation from '../Navigation/Navigation';

const Header = ({isLogged}) => {

  const {pathname} = useLocation()

  return (
    <header className={`header_${pathname === '/' ? "type-green" : "type-dark"}`}>
      <div className="header__container">
        <Link className="header__logo__link" to='/'>
          <img src={logo} alt="Лого"/>
        </Link>
        {/* {isLogged ? <Navigation/> : <NaviNotLogin/>} */}
        {isLogged ? <NaviNotLogin/> : <Navigation/>}
      </div>
    </header>
  );
};

export default Header;
