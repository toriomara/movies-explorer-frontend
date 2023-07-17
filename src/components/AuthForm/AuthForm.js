import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";

export const AuthForm = () => {
  const {pathname} = useLocation();

  return (
    <section className="auth">
      {pathname === "/signup" &&
        <>
          <div className="auth-header">
            <Logo/>
            <h1 className="auth-title">Добро пожаловать!</h1>
          </div>

          <form className="auth-form">
            <label className="auth-form__label">Имя</label>
            <input
              className="auth-form__input"
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Имя"
              required
              />
            <label className="auth-form__label">Email</label>
            <input
              className="auth-form__input"
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              placeholder="Email"
              required
              />
            <label className="auth-form__label">Пароль</label>
            <input
              className="auth-form__input"
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              placeholder="Пароль"
              required
              />
            <div className="auth-form__error">
              {/* {signup.error} */}Something went wrong...
            </div>

            <div className="auth__signup">
              <button 
                className="signup-button"
                type="submit"
              >
                Зарегистрироваться
              </button>
              <span className="signup-basement">
                Уже зарегистрированы?
                <Link className="signup-basement__link" to="/signin">
                  Войти
                </Link>
              </span>
            </div>
          </form>
        </>
      }
      {pathname === "/signin" &&
        <>
          <div className="auth-header">
            <Logo/>
            <h1 className="auth-title">Рады видеть!</h1>
          </div>
          <form className="auth-form">
            <label className="auth__form__label">Email</label>
            <input
              className="auth-form__input"
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              placeholder="Email"
              required
            />
            <label className="auth-form__label">Пароль</label>
            <input
              className="auth-form__input"
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              placeholder="Пароль"
              required
            />
            <div className="auth-form__error">
              {/* {signin.error} */}
            </div>
            
            <div className="auth__signup">
              <button 
                className="signup-button"
                type="submit"
              >
                Войти
              </button>
              <span className="signup-basement">
                Ещё не зарегистрированы?
                <Link className="signup-basement__link" to="/signup">
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