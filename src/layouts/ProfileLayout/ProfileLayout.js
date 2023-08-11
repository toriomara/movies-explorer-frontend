import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export const ProfileLayout = ({isLogged}) => {

  return (
    <>
      <Header isLogged={isLogged} />
      <main>
        <Outlet/>
      </main>
    </>
  )
};
