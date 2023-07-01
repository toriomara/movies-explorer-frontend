const Footer = () => (
  <footer className="footer">
      <div className="footer__container">
        <span className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</span>
        <div className="divider_dark"/>
        <div className="footer__basement">
          <span className="footer__basement__props">©{new Date().getFullYear()}</span>
          <nav className="footer__nav">
            <a className="footer__nav__link" href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
            <a className="footer__nav__link" href="https://github.com/toriomara" target="_blank" rel="noopener noreferrer">Github</a>
          </nav>
        </div>
      </div>
  </footer>
);
export default Footer;
