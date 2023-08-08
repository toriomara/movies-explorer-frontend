import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ element: Component, ...props }) => {
  const {isLogged} = props;
  const {pathname} = useLocation();

  return (
    isLogged 
    ? <Outlet /> 
    : <Navigate 
        to='/' 
        state={{ returnUrl: pathname }} 
        replace 
      />
  )
};
