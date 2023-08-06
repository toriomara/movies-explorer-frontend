import success from '../../images/success.svg';
import error from '../../images/fail.svg';

export const InfoTooltip = (props) => {

  const { 
    onClose, 
    state: { isTooltipOpen, isSuccess, message, textButton } 
  } = props;

  return (
    <section className={`popup ${isTooltipOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button
          className='popup__close-button'
          type='button'
          aria-label='Закрыть'
          onClick={onClose}
        />
        <img 
          className='popup__image'
          src={isSuccess ? success : error} 
          alt={message} 
        />
        <h2 className='popup__title'>{message}</h2>
        <button 
          className='navi-not-login__button_login' 
          aria-label='Закрыть'
          onClick={onClose}
        >
        {textButton}
      </button>
      </div>
    </section>
  );
};
