import { Outlet  } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const MainLayout = (props) => {

  const {
    isLogged,
    isOpen,
    onClose,
  } = props;

  return (
    <>
      <Header
        isLogged={isLogged}
        isOpen={isOpen}
        onClose={onClose}
      />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
};