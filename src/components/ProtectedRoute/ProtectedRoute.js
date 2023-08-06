import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ element: Component, ...props }) => {
  const {isLogged, isLoading} = props;
  const {pathname} = useLocation();

  return (
    isLogged 
    ? <Outlet /> 
    : <Navigate 
        to='/signin' 
        state={{ returnUrl: pathname }} 
        replace 
      />
  )
};
