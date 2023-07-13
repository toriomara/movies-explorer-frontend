import { AuthForm } from '../AuthForm/AuthForm'; 
import { signin } from './../temp/movies';

const Login = () => {
  return (
    <AuthForm signin={signin}/>
  );
};

export default Login;