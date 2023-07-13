const Profile = () => {
  return (
    <section className="profile">
      <form className="profile__form">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <fieldset className="profile__fieldset">
          <div className="profile__input">
            <label className="profile__label" htmlFor="name">Имя</label>
            <input
              className="profile__input_type-name"
              id="name"
              type="text"
              value='Виталий'
              disabled
              required
            />
          </div>
          <span className='profile__error-info'></span>
          <div className="profile__divider divider_dark"></div>
          <div className="profile__input">
            <label className="profile__label" htmlFor="email">E-mail</label>
            <input
              className="profile__input_type-email"
              id="email"
              type="email"
              value='pochta@yandex.ru'
              disabled
              required
            />
          </div>
          <span className='profile__error-info'></span>
          <div className="profile__buttons">
            <button className="profile__button">Редактировать</button>
            <button className="profile__button profile__button_logout">Выйти из аккаунта</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Profile;