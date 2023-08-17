import photo from '../../../images/photo.jpg';

const AboutMe = () => (
  <section className='about-me'>
    <h2 className='section-header'>Студент</h2>
    <div className='about-me__divider divider_light'/>
    <div className='about-me__info'>
      <div className='about-me__desc'>
        <h3 className='about-me-desc__title'>Владимир</h3>
        <span className='about-me-desc__subtitle'>Фронтенд-разработчик, 40 лет</span>
        <p className='about-me-desc__text'>Я живу в Волгограде, закончил исторический факультет. 
          Люблю слушать музыку, иногда занимаюсь бегом. Начал самостоятельно изучать разработку,
          но позже понял, что без путеводной звезды или навигатора-компаса мне не справиться. Понял, что обучение поможет получить
          целостную картину. Выбрал Яндекс.Практикум как авторитетную и заслуживающую уважению школу. В целом мне понравилось обучение.
          Хочу получить работу для того, чтобы глубже изучить JS и Ract. Конечно, мне нравится писать код; особенно нравится когда 
          получается лаконично.
        </p>
        <a className='about-me-desc__link' to='https://github.com/toriomara' target='_blank'>Github</a>
      </div>
      <img className='about-me-info__photo' src={photo} alt='Владимир Будкевич'/>
    </div>
  </section>
);

export default AboutMe;
