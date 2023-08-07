import { useEffect } from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useNavigate } from 'react-router-dom';

export const Register = ({isLogged, onRegister}) => {

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
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(values);
  };

  return (
    <AuthForm 
      onSubmit={handleSubmit}
      onChange={handleChange}
      isValid={isValid}
      errors={errors}
      values={values}
      resetForm={resetForm}
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      question='Уже зарегистрированы?'
      link='/signin'
      linkText='Войти'
    />
  );
};
