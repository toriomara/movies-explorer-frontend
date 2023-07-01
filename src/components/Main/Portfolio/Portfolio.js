const Portfolio = () => (
  <section className="portfolio">
    <h2 className="section-subheader">Портфолио</h2>
    <ul className="portfolio__content">
      <li className="portfolio__content__item">
        <a className="portfolio__link" href="https://github.com/toriomara/how-to-learn" target="_blank" rel="noopener noreferrer">
          Статичный сайт
        </a>
        <span className="portfolio__arrow-up"></span>
      </li>
      <div className="divider_dark"/>
      <li className="portfolio__content__item">
        <a className="portfolio__link" href="https://github.com/toriomara/how-to-learn" target="_blank" rel="noopener noreferrer">
          Адаптивный сайт
        </a>
        <span className="portfolio__arrow-up"></span>
      </li>
      <div className="divider_dark"/>
      <li className="portfolio__content__item">
        <a className="portfolio__link" href="https://github.com/toriomara/how-to-learn" target="_blank" rel="noopener noreferrer">
          Одностраничное приложение
        </a>
        <span className="portfolio__arrow-up"></span>
      </li>
    </ul>
  </section>
);

export default Portfolio;
