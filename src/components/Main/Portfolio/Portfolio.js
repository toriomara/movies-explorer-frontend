const Portfolio = () => (
  <section className='portfolio'>
    <h2 className='section-subheader'>Портфолио</h2>
    <ul>
      <li>
        <a 
          className='portfolio-link' 
          href='https://github.com/toriomara/how-to-learn' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <span>Статичный сайт</span>
          <span className='portfolio-link__icon'></span>
        </a>
      </li>
      <div className='portfolio__divider divider_dark'/>
      <li>
        <a 
          className='portfolio-link' 
          href='https://github.com/toriomara/russian-travel' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <span>Адаптивный сайт</span>  
          <span className='portfolio-link__icon'></span>
        </a>
      </li>
      <div className='portfolio__divider divider_dark'/>
      <li>
        <a 
          className='portfolio-link' 
          href='https://github.com/toriomara/how-to-learn' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <span>Одностраничное приложение</span>
          <span className='portfolio-link__icon'></span>
        </a>
      </li>
    </ul>
  </section>
);

export default Portfolio;
