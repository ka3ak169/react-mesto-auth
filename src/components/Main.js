import React, { useState, useEffect } from 'react';
import api from '../utils/api';

export function ImagePopup({ card, onClose }) {
  return(
    <div className={`popup image-popup ${card ? `popup_opened` : ``}`}>
      <div className="image-popup__container">
        <button onClick={onClose} className="image-popup__close-button popup__close-button" name="close" type="button"></button>
        <img className="image-popup__image" src={card.src} alt={card.name} />
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

function Card({name, src, likes, handleClick}) {

  return(
      <div className="card__element">
        <img className="card__image" alt={name} src={src} onClick={() => handleClick({src, name})} />
        <div className="card__group">
          <h2 className="card__place">{name}</h2>
          <div className="card__like-box">
            <button className="card__like" type="button"></button>
            <p className="card__like-counter">{likes}</p>
          </div>
        </div>
        <button className="card__trash" type="button"></button>
      </div>
  )
}

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInformation()
    .then((data) => {
      {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  useEffect(() => {
    api.getInitialCards()
    .then((data) => {      
        setCards(data.map((item) => ({
          id: item._id,
          src: item.link,
          name: item.name,
          likes: item.likes.length
        })));      
    })
    .catch((error) => {
      console.log(error)
    })
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
        {
          cards.map(({id, ...props}) => <Card key={id} {...props} handleClick={onCardClick}/>)
        }
      </section>
    </main>
  );
};

export default Main;