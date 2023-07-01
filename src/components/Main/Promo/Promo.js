import ellipses from '../../../images/ellipses.svg';

const Promo = () => (
  <section className="promo">
      <div className="promo__container">
        <p className="promo__text">
          Учебный проект студента факультета Веб-разработки.
        </p>
        <img src={ellipses} alt="ОСОСОС" className="promo__ellipses" />
      </div>
  </section>
);

export default Promo;
