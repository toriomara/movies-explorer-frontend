const SearchForm = () => {

  return (
    <form className="search-form">
      <label className="search-form__label">
        <input
          className="search-form__input"
          id="searchMovie"
          name="searchMovie"
          type="text"
          autoComplete="off"
          placeholder="Фильм"
          required
        />
        <button className="search-form__button" type="submit"/>
        <div className="search-form__error"></div>
      </label>
      <div className="search-form__divider divider_dark"></div>

      <label className="search-form__label-short">
        <input className="search-form__label-checkbox" type="checkbox" name="shortCheckbox"/>
        <span className="search-form__label-text" htmlFor="shortCheckbox">Короткометражки</span>
      </label>
    </form>
  );
};

export default SearchForm;