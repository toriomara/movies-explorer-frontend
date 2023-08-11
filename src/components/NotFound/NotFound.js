import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const NotFound = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(4);

  setTimeout(() => {
    navigate(-1)
  }, 3000);
  
  // const timer = setTimeout(function tick() {
  //   count = count - 1;
  //   timer = setTimeout(tick, 1000);
  //   navigate(-1)
  // }, 1000)

  return (
    <section className='not-found'>
      <div className='not-found__text'>
        <h1 className='not-found__title'>404</h1>
        <h2 className='not-found__subtitle'>Страница не найдена</h2>
        {/* <h3>
          Через {count} секунды вы будете перенапралены обратно
        </h3> */}
      </div>
      <button className='not-found__button' onClick={() => navigate(-1)}>Назад</button>
    </section>
  );
};

