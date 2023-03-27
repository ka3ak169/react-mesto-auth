import React from 'react';
import noUnion from '../images/Union3.svg'
import yesUnion from '../images/Union2.svg'

function InfoTooltip() {
  const image123 = "url(../images/Union3.svg)"
  return(
    // <div className={`popup ${name}-popup ${isOpen ? `popup_opened` : ``}`}>
    // <div className={`popup info-popup popup_opened`}>
    <div className={`popup info-popup`}>
      <div className={`popup__container info-popup__container`}>
        <div className={'info-popup__picture'} style={{backgroundImage: `url(${noUnion})`}} ></div>
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