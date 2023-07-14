import { Outlet } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';

const PureLayout = () => (
  <div className="page">
    <div className="content">
      <Outlet/>
    </div>
  </div>
);

export default PureLayout;