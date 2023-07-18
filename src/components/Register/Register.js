import { AuthForm } from '../AuthForm/AuthForm';
import { signup } from './../temp/movies';

const Register = () => {
  return (
    <div className="register">
      <AuthForm signup={signup}/>
    </div>
  );
};

export default Register;