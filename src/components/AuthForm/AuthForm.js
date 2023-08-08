import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Logo } from '../Logo/Logo';

export const AuthForm = (props) => {
  
  const {pathname} = useLocation();
  
  const { 
    onSubmit, 
    onChange, 
    errors,
    isValid,
    values,
    title, 
    buttonText, 
    link, 
    linkText, 
    question 
  } = props;

  const [isError, setIsError] = useState({
    name: false,
    email: false,
    password: false,
  })

  const errorShow = isError ? 'auth-form__error_active' : '';

  const onBlur = (evt) => {
    const name = evt.target.name;
    setIsError({...isError, [name]: true});
  }

  return (
    <section className='auth'>
      <div className='auth-header'>
        <Logo/>
        <h1 className='auth-title'>{title}</h1>
      </div>

      <form 
        className='auth-form'
        onSubmit={onSubmit}
        noValidate
      >
        {pathname === '/signup' &&
          <>
            <label className='auth-form__label'>Имя</label>
            <input
              className={!errors.name ? 'auth-form__input' : 'auth-form__input_error'}
              id='name'
              name='name'
              type='text'
              autoComplete='off'
              placeholder='Имя'
              pattern='[a-zA-ZАа-яёА-ЯЁ\s\-]{2,30}$'
              // minLength='2'
              // maxLength='30'
              onBlur={onBlur}
              onChange={onChange}
              value={values.name || ''}
              required
            />
            <div className={errorShow}>
              {isError.name && errors.name && `${errors.name}`}
            </div>
          </>
        }
        <label className='auth-form__label'>Email</label>
        <input
          className={!errors.email ? 'auth-form__input' : 'auth-form__input_error'}
          id='email'
          name='email'
          type='email'
          autoComplete='off'
          placeholder='Email'
          pattern='^\S+@\S+\.\S+$'
          onBlur={onBlur}
          onChange={onChange}
          value={values.email || ''}
          required
        />
        <div className={errorShow}>
          {isError.email && errors.email && `${errors.email}`}
        </div>

        <label className='auth-form__label'>Пароль</label>
        <input
          className={!errors.password ? 'auth-form__input' : 'auth-form__input_error'}
          id='password'
          name='password'
          type='password'
          autoComplete='off'
          placeholder='Введите пароль'
          minLength='6'
          onBlur={onBlur}
          onChange={onChange}
          value={values.password || ''}
          required
        />

        <div className={errorShow}>
          {isError.password && errors.password && `${errors.password}`}
        </div>

        <div className='auth__signup'>
          <button 
            className={isValid ? 'signup-button_enable' : 'signup-button'}
            type='submit'
            aria-label={buttonText}
            disabled={!isValid}
          >
            {buttonText}
          </button>
          <span className='signup-basement'>
            {question}
            <Link 
              className='signup-basement__link' 
              to={link}
              aria-label={linkText}
            >
              {linkText}
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
};