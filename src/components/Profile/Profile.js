const Profile = () => {
  return (
    <section className="profile">
      <form className="profile-form">
        <h1 className="profile-form__title">Привет, Владимир!</h1>
        <fieldset className="profile-form__fieldset">
         
          <div className="fieldset-input">
            <label htmlFor="name">Имя</label>
            <input
              className="fieldset-input_type_name"
              id="name"
              type="text"
              value="Виталий"
              disabled
              required
            />
          </div>
          
          <span className="fieldset-input__error-info"></span>
          <div className="fieldset-input__divider divider_dark"></div>
          
          <div className="fieldset-input">
            <label htmlFor="email">E-mail</label>
            <input
              className="fieldset-input_type_email"
              id="email"
              type="email"
              value="pochta@yandex.ru"
              disabled
              required
            />
          </div>
          
          <span className="fieldset-input__error-info"></span>
          <div className="fieldset__buttons">
            <button className="fieldset-button">Редактировать</button>
            <button className="fieldset-button fieldset-button_logout">Выйти из аккаунта</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Profile;