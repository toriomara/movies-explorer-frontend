import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export const ProfileLayout = (props) => {

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
    </>
  )
};
