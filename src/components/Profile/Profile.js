import React, { useEffect, useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation';

export const Profile = ({ onLogout, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const { values, errors, handleChange, isValid, setValues } =
    useFormValidation();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      console.log(currentUser.email);
    }
  }, [currentUser]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    try {
      onUpdateUser({
        name: values.name,
        email: values.email,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isInputedValues =
    currentUser.name === values.name && currentUser.email === values.email;

  const isButtonDisabled = !isValid || isLoading || isInputedValues;

  const changeButton = `${
    isButtonDisabled ? 'fieldset-button_disable' : 'fieldset-button'
  }`;

  const profileInputName = `${
    !errors.name ? 'profile__input' : 'profile__input_error'
  }`;

  const profileInputEmail = `${
    !errors.email ? 'profile__input' : 'profile__input_error'
  }`;

  return (
    <section className='profile'>
      <form onSubmit={handleSubmit} noValidate>
        <h1 className='profile-form__title'>Привет, {currentUser.name}</h1>
        <fieldset className='profile-form__fieldset'>
          <div className='fieldset-input'>
            <label htmlFor='name'>Имя</label>
            <input
              className={profileInputName}
              name='name'
              id='name'
              type='text'
              placeholder='Имя'
              onChange={handleChange}
              value={values.name || ''}
              pattern='[a-zA-ZАа-яёА-ЯЁ\s\-]{2,30}$'
              required
            />
          </div>
          <div className='profile__error_active'>{errors.name}</div>

          <div className='fieldset-input__divider divider_dark'></div>

          <div className='fieldset-input'>
            <label htmlFor='name'>Email</label>
            <input
              className={profileInputEmail}
              name='email'
              id='email'
              type='email'
              placeholder='Email'
              onChange={handleChange}
              value={values.email || ''}
              pattern='^\S+@\S+\.\S+$'
              required
            />
          </div>
          <div className='profile__error_active'>{errors.email}</div>

          <div className='fieldset__buttons'>
            <button
              className={changeButton}
              disabled={isButtonDisabled}
              type='submit'
            >
              Редактировать
            </button>
            <button
              type='button'
              className='fieldset-button fieldset-button_logout'
              onClick={onLogout}
            >
              Выйти из аккаунта
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
