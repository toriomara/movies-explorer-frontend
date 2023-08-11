import { Outlet  } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const MainLayout = ({isLogged}) => {

  return (
    <>
      <Header isLogged={isLogged} />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
};