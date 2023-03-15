import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInformation()
    .then((data) => {
      {
        setCurrentUser(data);
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
          card: item,
          src: item.link,
          name: item.name,
          likes: item.likes,
          owner: item.owner._id          
        })));      
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', src: ''})
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  const handleCardClick = (src, name) => {
    setSelectedCard(src, name);
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      api.deleteLike(card._id)
      .then(data => {
          setCards((state) => state.map((c) => c._id === card._id ? data : c));
        })
      .catch((error) => {
        console.log(error);
      })
    } else {
      api.addLike(card._id)
      .then(data => {
        setCards((state) => state.map((c) => c._id === card._id ? data : c));
    })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  // console.log(handleCardLike);
 
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
        />
        <Footer />
        <PopupWithForm
          name={`profile`} 
          text={`Редактировать профиль`} 
          btnText={`Сохранить`} 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >         
          <fieldset className="popup__field">
            <input className="popup__form-input profile-popup-name" id="profile-name-input" type="text" name="name" 
              placeholder="Имя" minLength="2" maxLength="40" defaultValue='' required />
            <span className="error profile-name-input-error"></span>
            <input className="popup__form-input profile-popup-activity" id="profile-activity-input" type="text"
              name="about"  placeholder="Вид деятельности" minLength="2" maxLength="200" defaultValue='' required />
            <span className="error profile-activity-input-error"></span>
          </fieldset>        
        </PopupWithForm>
        <PopupWithForm
          name={`card`} 
          text={`Новое место`} 
          btnText={`Создать`}  
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >       
          <fieldset className="popup__field">
            <input type="text" className="popup__form-input card-popup-name" id="card-name-input" name="name" 
              placeholder="Название" minLength="2" maxLength="30" defaultValue='' required />
            <span className="error card-name-input-error"></span>
            <input type="url" className="popup__form-input card-popup-activity" id="card-activity-input" name="link"
              placeholder="Ссылка на картинку" defaultValue='' required />
            <span className="error card-activity-input-error"></span>
          </fieldset>        
        </PopupWithForm>
        <PopupWithForm 
          name={`deleteCard`} 
          text={`Вы уверены?`} 
          btnText={`Да`} 
        />
        <PopupWithForm
          name={`avatar`} 
          text={`Обновить аватар`} 
          btnText={`Сохранить`}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >      
          <fieldset className="popup__field avatar-popup__field">
            <input type="url" className="popup__form-input" id="avatar-popup-input" name="link"
              placeholder="Ссылка на картинку" defaultValue='' required />
            <span className="error avatar-popup-input-error"></span>
          </fieldset>        
        </PopupWithForm>
        <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}      
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
