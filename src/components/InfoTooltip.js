import React from 'react';

function InfoTooltip() {
  return(
    // <div className={`popup ${name}-popup ${isOpen ? `popup_opened` : ``}`}>
    <div className={`popup info-popup popup_opened`}>
      <div className={`popup__container info-popup__container`}>
        <div className={'info-popup__picture'} ></div>
        <p className={'info-popup__text'}>Вы успешно зарегистрировались!</p>
        <button
          // onClick={onClose}
          className={`popup__close-button`}
          name="close"
          type="button"
        ></button>        
      </div>
    </div>
  );
};

export default InfoTooltip;