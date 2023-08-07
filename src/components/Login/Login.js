import { AuthForm } from '../AuthForm/AuthForm';
import { useEffect } from 'react';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useNavigate } from 'react-router-dom';

export const Login = ({isLogged, onLogin}) => {

  const navigate = useNavigate();
  // isLogged ? navigate('/') : null;
  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  }, [isLogged])

  const {
    values, 
    handleChange, 
    errors, 
    isValid,
    resetForm 
  } = useFormValidation({
    email: '',
    password: ''
  });

  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values);
  };

  return (
    <AuthForm 
      onSubmit={handleSubmit}
      onChange={handleChange}
      isValid={isValid}
      errors={errors}
      values={values}
      resetForm={resetForm}
      title='Рады видеть!'
      buttonText='Войти'
      question='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
    />
  );
};


