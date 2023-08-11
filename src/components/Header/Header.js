import { useLocation } from 'react-router-dom';
import { NaviNotLogin } from '../NaviNotLogin/NaviNotLogin';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';

export const Header = ({isLogged}) => {

  const {pathname} = useLocation();

  return (
    <header className={`header_${pathname === '/' ? 'type-green' : 'type-dark'}`}>
      <div className='header-container'>
        <Logo/>
        {
          isLogged 
          ? <Navigation /> 
          : <NaviNotLogin/>}
      </div>
    </header>
  );
};
