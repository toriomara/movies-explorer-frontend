import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export const Logo = () => (
  <Link className='logo' to='/'>
    <img src={logo} alt='Лого Movie 43'/>
  </Link>
);
