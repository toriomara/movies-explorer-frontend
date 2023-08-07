import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { PureLayout } from '../../layouts/PureLayout/PureLayout';
import { ProfileLayout } from '../../layouts/ProfileLayout/ProfileLayout';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';
import * as mainApi from '../../utils/MainApi';

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isLogged, setIsLogged] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isTooltipOpen: false,
    isSuccess: Boolean,
    message: '',
    textButton: '',
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeAllPopups = () => {
    setIsInfoTooltip({ ...isInfoTooltip, isTooltipOpen: false });
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi
        .getToken(token)
        .then((res) => {
          if (res) {
            localStorage.removeItem('allMovies');
            setIsLogged(true);
          }
          navigate(pathname);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    if (isLogged) {
      mainApi
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          if (err === 400) {
            console.log('При передаче токена произошла ошибка');
          }
          if (err === 401) {
            console.log('Некорректный токен');
          }
        });
      mainApi
        .getCards()
        .then((moviesData) => {
          setSavedMovies(moviesData.reverse());
        })
        .catch((err) => {
          if (err === 400) {
            console.log('При передаче токена произошла ошибка');
          }
          if (err === 401) {
            console.log('Некорректный токен');
          }
        });
    }
  }, [isLogged]);

  const handleRegister = ({ name, email, password }) => {
    mainApi
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
        setIsInfoTooltip({
          isTooltipOpen: true,
          isSuccess: true,
          message: 'Вы успешно зарегистрировались!',
          textButton: 'Закрыть',
        });
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setIsInfoTooltip({
            isTooltipOpen: true,
            isSuccess: false,
            message:
              'Этот email уже зарегистрирован. Пожалуйста, введите другой адрес',
            textButton: 'Хорошо',
          });
        } else {
          console.log('Ошибка: `${err}`');
        }
      })
      .finally(() => {
        console.log(`Hello!`);
      });
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    mainApi
      .authorize({ email, password })
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setIsLogged(true);
        navigate('/movies');
      })
      .catch((err) => {
        setIsLogged(false);
        if (err === 'Ошибка: 400') {
          console.log('Не заполнены почта и/или пароль');
        } else if (err === 'Ошибка: 401') {
          console.log('Пользователь с таким email не найден');
        }
      })
      .finally(() => {
        setIsLoading(true);
      });
  };

  const handleUpdateUser = async (user) => {
    try {
      const res = await mainApi.setUserInfo(user);
      setCurrentUser(res);
      setIsInfoTooltip({
        isTooltipOpen: true,
        isSuccess: true,
        message: 'Ваши данные успешно обновлены!',
        textButton: 'Закрыть',
      });
    } catch (err) {
      if (err === 'Ошибка: 409') {
        setIsInfoTooltip({
          isTooltipOpen: true,
          isSuccess: false,
          message:
            'Этот email уже зарегистрирован. Пожалуйста, введите другой адрес',
          textButton: 'Хорошо',
        });
      } else {
        console.log('Ошибка: `${err}`');
      }
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLogged(false);
    navigate('/');
  };

  const handleMovieAdd = (movie) => {
    mainApi
      .addMovie(movie)
      .then((addedMovie) => {
        setSavedMovies([addedMovie, ...savedMovies]);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  };

  const handleMovieDelete = (movie) => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((movies) => movies.filter((i) => i._id !== movie._id));
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout
              isLogged={isLogged}
              isLoading={isLoading}
              isOpen={isOpen}
              onClose={handleOpen}
            />
          }
        >
          <Route index element={<Main isLoading={isLoading} />} />
          <Route
            element={
              <ProtectedRoute isLogged={isLogged} isLoading={isLoading} />
            }
          >
            <Route
              path='movies'
              element={
                <Movies
                  savedMovies={savedMovies}
                  onMovieAdd={handleMovieAdd}
                  onMovieDelete={handleMovieDelete}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path='saved-movies'
              element={
                <SavedMovies
                  savedMovies={savedMovies}
                  onMovieDelete={handleMovieDelete}
                />
              }
            />
          </Route>
        </Route>
        <Route
          element={
            <ProfileLayout
              isLogged={isLogged}
              isOpen={isOpen}
              onClose={handleOpen}
            />
          }
        >
          <Route element={<ProtectedRoute isLogged={isLogged} />}>
            <Route
              path='/profile'
              element={
                <Profile
                  isLoading={isLoading}
                  onLogout={handleLogout}
                  onUpdateUser={handleUpdateUser}
                />
              }
            />
          </Route>
        </Route>
        <Route path='signup' element={<PureLayout />}>
          <Route
            path='/signup'
            element={
              <Register isLogged={isLogged} onRegister={handleRegister} />
            }
          />
        </Route>
        <Route path='signin' element={<PureLayout />}>
          <Route
            path='/signin'
            element={<Login isLogged={isLogged} onLogin={handleLogin} />}
          />
        </Route>
        <Route path='*' element={<PureLayout />}>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <InfoTooltip state={isInfoTooltip} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
};

export default App;
