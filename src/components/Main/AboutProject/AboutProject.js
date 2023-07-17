 const AboutProject = () => (
  <section className="about-project">
    <h2 className="section-header">О проекте</h2>
    <div className="about-project__divider divider_light"/>
    <div className="about-project__details">
      <span className="about-project__title">Дипломный проект включал 5 этапов</span>
      <span className="about-project__title">На выполнение диплома ушло 5 недель</span>
      <p className="about-project__desc">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      <p className="about-project__desc">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
    </div>
      <div className="about-project__timeline">
          <span className="about-project__stage">1 неделя</span>
          <span className="about-project__stage">4 недели</span>
          <span className="about-project__techs">Back-end</span>
          <span className="about-project__techs">Front-end</span>
      </div>
  </section>
);

export default AboutProject;
