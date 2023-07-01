import { Link } from 'react-router-dom';
import photo from '../../../images/photo.png';

const AboutMe = () => (
  <section className="about-me">
    <h2 className="section-header">Студент</h2>
    <div className="about-me__divider divider"/>
    <div className="about-me__info">
      <div className="about-me__info__desc">
        <h3 className="about-me__info__desc__title">Виталий</h3>
        <span className="about-me__info__desc__subtitle">Фронтенд-разработчик, 30 лет</span>
        <p className="about-me__info__desc__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          {/* eslint-disable-next-line max-len */}
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <Link className="about-me__info__desc__link" to="https://github.com/toriomara" target="_blank">Github</Link>
      </div>
      <img className="about-me__info__photo" src={photo} alt="Владимир Будкевич"/>
    </div>
  </section>
);

export default AboutMe;
