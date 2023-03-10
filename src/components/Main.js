import React, { useState, useEffect, useContext } from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [cards, setCards] = useState([]);
  const userContext = useContext(CurrentUserContext);

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
            <img className="profile__avatar" src={userContext.avatar} alt="Крутая аватарка" />
            <div className="profile__pen"
            onClick={onEditAvatar}
            ></div>
            <div className="profile__overlay"></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userContext.name}</h1>
            <p className="profile__activity">{userContext.about}</p>
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