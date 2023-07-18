import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';

const ProfileLayout = () => (
  <>
    <Header/>
    <main>
      <Outlet/>
    </main>
  </>
);

export default ProfileLayout;