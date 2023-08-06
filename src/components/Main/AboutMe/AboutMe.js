import photo from '../../../images/photo.jpg';

const AboutMe = () => (
  <section className='about-me'>
    <h2 className='section-header'>Студент</h2>
    <div className='about-me__divider divider_light'/>
    <div className='about-me__info'>
      <div className='about-me__desc'>
        <h3 className='about-me-desc__title'>Владимир</h3>
        <span className='about-me-desc__subtitle'>Фронтенд-разработчик, 40 лет</span>
        <p className='about-me-desc__text'>Я родился и живу не в Саратове, закончил исторический факультет. 
          Я люблю слушать музыку, но бегом не увлекаюсь. Начал самостоятельно изучать разработку,
          но позже понял, что без путеводной звезды или навигатора-компаса мне не справиться. Решил, что обучение поможет получить
          целостную картину. Выбрал Яндекс.Практикум как авторитетную и заслужившую уважению школу. В целом мне понравилось обучение.
          Не очень я сдружился с БЭМом, но это вопрос практики, я думаю.
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
