import { AuthForm } from '../AuthForm/AuthForm';
import { signup } from './../temp/movies';

const Register = () => {
  return (
    <AuthForm signup={signup}/>
  );
};

export default Register;