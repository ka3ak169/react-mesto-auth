import React, { useEffect } from 'react';
import api from '../utils/api';

export function ImagePopup() {
  return(
    <div className="popup image-popup">
      <div className="image-popup__container">
        <button className="image-popup__close-button popup__close-button" name="close" type="button"></button>
        <img className="image-popup__image" src="#" alt="" />
        <p className="image-popup__description"></p>
      </div>
    </div>
  )
}

export function PopupWithForm({ name, text, btnText, children, isOpen, onClose }) {
  return(
    <div className={`popup ${name}-popup ${isOpen ? `popup_opened` : ``}`}>
      <div className={`popup__container ${name}-popup__container`}>
        <h2 className="popup__heading">{text}</h2>
        <button onClick={onClose} className={`popup__close-button`} name="close" type="button"></button>
        <form className={`popup__form`} name={name} noValidate>
          {children}
          <button className="submit-button" type="submit" name={`${name}-submit`}>{btnText}</button>
        </form>
      </div>
    </div>
  )
}

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  useEffect(() => {
    api.getUserInformation().then((data) => {
      {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      }
    });
  }, []);

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Крутая аватарка" />
            <div className="profile__pen"
            onClick={onEditAvatar}
            ></div>
            <div className="profile__overlay"></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__activity">{userDescription}</p>
            <button className="profile__edit-button" type="button"
            onClick={onEditProfile}
            ></button>
          </div>
        </div>
        <button className="profile__add-button" type="button"
        onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards">
      </section>
    </main>
  );
};

export default Main;