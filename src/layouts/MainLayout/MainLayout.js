import { Outlet  } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MainLayout = (isLogged) => (
  <div className="page">
    <Header isLogged={isLogged}/>
      <div className="content">
        <Outlet/>
      </div>
    <Footer/>
  </div>
);

export default MainLayout;
