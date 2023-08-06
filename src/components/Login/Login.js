import { AuthForm } from '../AuthForm/AuthForm';
import { useEffect } from 'react';
import { useFormValidation } from '../../hooks/useFormValidation';

export const Login = ({onLogin}) => {

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


