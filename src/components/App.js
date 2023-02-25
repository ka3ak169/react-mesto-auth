import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { 
  PopupWithForm,
  ImagePopup
 } from './Main';
import { useState } from 'react';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
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



  return (
    <body className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}     
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
      <ImagePopup />
      {/* card template */}
      <template className="card-template">
        <div className="card__element">
          <img className="card__image" alt="" src="#" />
          <div className="card__group">
            <h2 className="card__place"></h2>
            <div className="card__like-box">
              <button className="card__like" type="button"></button>
              <p className="card__like-counter">777</p>
            </div>
          </div>
          <button className="card__trash" type="button"></button>
        </div>
      </template>
    </body>
  );
}

export default App;
