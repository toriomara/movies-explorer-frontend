import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SearchForm = (props) => {

  const {
    onSearchMovies, 
    onShortMovies, 
    isShortMovies
  } = props;
  
  const {pathname} = useLocation();

  const [isRequestError, setIsRequestError] = useState(false);
  const [request, setRequest] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (request.trim().length === 0) {
      setIsRequestError(true);
    } else {
      setIsRequestError(false);
      onSearchMovies(request);
    }
  };
  
  const handleChangeSearch = (evt) => {
    setRequest(evt.target.value);
  }

  useEffect(() => {
    if (pathname === '/movies' && localStorage.getItem('movieSearch')) {
      const localSearch = localStorage.getItem('movieSearch');
      setRequest(localSearch);
    }
  }, [pathname]);

  return (
    <>
      <form 
        className='search-form'
        onSubmit={handleSubmit}
        noValidate
      >
        <label className='search-form__label'>
          <input
            className='search-form__input'
            id='searchMovie'
            name='searchMovie'
            type='text'
            autoComplete='off'
            placeholder='Фильм'
            value={request || ''}
            onChange={handleChangeSearch}
            required
          />
          <button className='search-form__button' type='submit'/>
          <div className='search-form__error'></div>
        </label>
        <div className='search-form__divider divider_dark'></div>
        <ShortCheckbox
          onShortMovies={onShortMovies} 
          isShortMovies={isShortMovies} 
        />
      </form>
      {
        isRequestError && (
        <span className='search-form'>
          Нужно ввести ключевое слово
        </span>)
      }
    </>
  );
};

export const ShortCheckbox = ({ onShortMovies, isShortMovies }) => {
  return (
    <label className='search-form__label-short'>
      <input 
        className='search-form__label-checkbox' 
        onChange={onShortMovies}
        type='checkbox' 
        name='shortCheckbox'
        checked={isShortMovies}
      />
      <span className='filter__text' htmlFor='shortCheckbox'>Короткометражки</span>
    </label>
  );
}