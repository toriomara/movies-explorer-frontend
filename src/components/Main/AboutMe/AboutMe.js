import { Link } from 'react-router-dom';
import photo from '../../../images/photo.jpg';

const AboutMe = () => (
  <section className="about-me">
    <h2 className="section-header">Студент</h2>
    <div className="about-me__divider divider"/>
    <div className="about-me__info">
      <div className="about-me__info__desc">
        <h3 className="about-me__info__desc__title">Виталий</h3>
        <span className="about-me__info__desc__subtitle">Фронтенд-разработчик, 30 лет</span>
        <p className="about-me__info__desc__text">Я родился и живу не в Саратове, закончил исторический факультет. 
          У меня есть жена, ружьё и собака. Я люблю слушать музыку, но бегом не увлекаюсь. Начал самостоятельно изучать разработку,
          но позже понял, что без путеводно звезды или навигатора-компаса мне не выбраться их этих местами уютных дебрей. 
          Выбрал Яндекс.Практикум как авторитетную и заслужившую уважению школу. В целом мне понравилось обучение, почти даже очень, 
          если бы не БЭМ. Когда слышу про него становлюсь глух и нем. 
          Хочу получить работу для того, чтобы глубже изучить JS и Ract. Конечно, мне нравится писать код; особенно нравится когда получается
          лаконично, а когда не получается прокрастинация случается. Да я ещё и графоман
        </p>
        <Link className="about-me__info__desc__link" to="https://github.com/toriomara" target="_blank">Github</Link>
      </div>
      <img className="about-me__info__photo" src={photo} alt="Владимир Будкевич"/>
    </div>
  </section>
);

export default AboutMe;
