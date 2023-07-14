import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';

export const AuthForm = () => {
  const {pathname} = useLocation();

  return (
    <section className="auth">
      {pathname === '/signup' &&
        <>
          <div className="auth__header">
            <Logo/>
            <h1 className='auth__title'>Добро пожаловать!</h1>
          </div>

          <form className='auth__form'>
            <label className='auth__form__label'>Имя</label>
            <input
              className='auth__input'
              id='name'
              name='name'
              type='text'
              autoComplete='off'
              placeholder='Имя'
              required
              />
            <label className='auth__form__label'>Email</label>
            <input
              className='auth__input'
              id='email'
              name='email'
              type='email'
              autoComplete='off'
              placeholder='Email'
              required
              />
            <label className='auth__form__label'>Пароль</label>
            <input
              className='auth__input'
              id='password'
              name='password'
              type='password'
              autoComplete='off'
              placeholder='Пароль'
              required
              />
            <div className='auth__error'>
              {/* {signup.error} */}Something went wrong...
            </div>

            <div className='auth__signup'>
              <button 
                className='auth__button'
                type='submit'
              >
                Зарегистрироваться
              </button>
              <span className="auth__signup__basement">
                Уже зарегистрированы?
                <Link to='/signin' className='auth__link'>
                  Войти
                </Link>
              </span>
            </div>
          </form>
        </>
      }
      {pathname === '/signin' &&
        <>
          <div className="auth__header">
            <Logo/>
            <h1 className='auth__title'>Рады видеть!</h1>
          </div>
          <form className='auth__form'>
            <label className='auth__form__label'>Email</label>
            <input
              className='auth__input'
              id='email'
              name='email'
              type='email'
              autoComplete='off'
              placeholder='Email'
              required
            />
            <label className='auth__form__label'>Пароль</label>
            <input
              className='auth__input'
              id='password'
              name='password'
              type='password'
              autoComplete='off'
              placeholder='Пароль'
              required
            />
            <div className='auth__error'>
              {/* {signin.error} */}
            </div>
            
            <div className='auth__signup'>
              <button 
                className='auth__button'
                type='submit'
              >
                Войти
              </button>
              <span className='auth__signup__basement'>
                Ещё не зарегистрированы?
                <Link to='/signup' className='auth__link'>
                  Регистрация
                </Link>
              </span>
            </div>
          </form>
        </>  
      }
    </section>
  );
};