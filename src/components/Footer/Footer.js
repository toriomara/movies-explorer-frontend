export const Footer = () => (
  <footer className='footer'>
      <div className='footer-container'>
        <span className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</span>
        <div className='footer__divider divider_dark'/>
        <div className='footer__basement'>
          <span className='basement-props'>©{new Date().getFullYear()}</span>
          <nav className='basement-nav'>
            <a className='basement-nav__link' href='https://practicum.yandex.ru/' target='_blank' rel='noopener noreferrer'>Яндекс.Практикум</a>
            <a className='basement-nav__link' href='https://github.com/toriomara' target='_blank' rel='noopener noreferrer'>Github</a>
          </nav>
        </div>
      </div>
  </footer>
);
