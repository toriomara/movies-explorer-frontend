import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';

const ProfileLayout = () => (
  <div className="content page">
    <Header/>
    <Outlet/>
  </div>
);

export default ProfileLayout;