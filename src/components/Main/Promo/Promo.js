import ellipses from '../../../images/ellipses.svg';

const Promo = () => (
  <section className="promo">
    <div className="promo-container">
      <p className="promo__text">
        Учебный проект студента факультета Веб-разработки
      </p>
      <img 
        className="promo__ellipses"
        src={ellipses} alt="Эллипсы" 
      />
    </div>
  </section>
);

export default Promo;
