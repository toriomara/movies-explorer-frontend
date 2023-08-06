import React, { useEffect, useContext, useState, useRef } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation';

export const Profile = ({ onLogout, onUpdateUser, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);

  const {
    values, 
    errors,
    handleChange,
    isValid,
    setValues,
    resetForm,    
    setIsValid,
  } = useFormValidation();
  const [isInputedValues, setIsInputedValues] = useState(false);



  useEffect(() => {
    if (currentUser) {
      setValues(currentUser)
    }
    console.log(values.name);
  }, [currentUser, resetForm]);
  
  // =================================================================== //
  // +++++++++++++++++++                             +++++++++++++++++++ //
  // =================================================================== //

  // const inputName = useRef('');
  // const inputEmail = useRef('');
  // console.log(inputName)

  // useEffect(() => {
  //   if (currentUser.name === values.name && currentUser.email === values.email) {
  //     setValues({name: inputName.current, email: inputEmail.current}); 
  //   }
  // }, [currentUser]);

  // =================================================================== //
  // +++++++++++++++++++                             +++++++++++++++++++ //
  // =================================================================== //
      
      
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  };

  useEffect(() => {
    (currentUser.name === values.name && currentUser.email === values.email)
    ? setIsInputedValues(true)
    : setIsInputedValues(false)
  }, [values]);

  const changeButton = `${
    (!isValid || isLoading || isInputedValues) ? 
      'fieldset-button_disable'
    : 
      'fieldset-button'
  }`

  const profileInputName = `${
    !errors.name 
    ? 'profile__input'
    : 'profile__input_error'
  }`
  
  const profileInputEmail = `${
    !errors.email
    ? 'profile__input'
    : 'profile__input_error'
  }`

  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }

  return (
      <section className='profile'>
        <form
          onSubmit={handleSubmit}
          noValidate
        >
          <h1 className='profile-form__title'>Привет, {currentUser.name}</h1>
          <h2 className='profile-form__title'>{count}</h2>
          <button 
          type='button'
            onClick={addCount}>+1</button>
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
                // ref={inputName}
                />
            </div>
            <div className='profile__error_active'>
              {errors.name}
            </div>

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
                // ref={inputEmail}
              />
            </div>
            <div className='profile__error_active'>
              {errors.email}
            </div>
          
            <div className='fieldset__buttons'>
              <button
                className={changeButton}
                disabled={!isValid ? true : false}
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
}

