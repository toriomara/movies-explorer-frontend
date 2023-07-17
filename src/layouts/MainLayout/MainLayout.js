import { Outlet  } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MainLayout = (isLogged) => (
  <>
    <Header isLogged={isLogged}/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </>
);

export default MainLayout;
