import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';

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