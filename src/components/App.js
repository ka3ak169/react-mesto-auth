import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { 
  PopupWithForm,
  ImagePopup
 } from './Main';




function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false)
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

  function handleCardClick(src, name) {
    setSelectedCard(src, name);
  }

  return (
    <body className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
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
            placeholder="Имя" minlength="2" maxlength="40" defaultValue='' required />
          <span className="error profile-name-input-error"></span>
          <input className="popup__form-input profile-popup-activity" id="profile-activity-input" type="text"
            name="about"  placeholder="Вид деятельности" minlength="2" maxlength="200" defaultValue='' required />
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
            placeholder="Название" minlength="2" maxlength="30" defaultValue='' required />
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

    </body>
  );
}

export default App;
