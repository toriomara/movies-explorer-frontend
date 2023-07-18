import { AuthForm } from '../AuthForm/AuthForm'; 
import { signin } from './../temp/movies';

const Login = () => {
  return (
    <div className="login">
      <AuthForm signin={signin}/>
    </div>
  );
};

export default Login;