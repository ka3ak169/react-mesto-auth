import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { 
  PopupWithForm,
  ImagePopup
 } from './Main';


function App() {
  return (
    <body className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm 
        name={`profile`} 
        text={`Редактировать профиль`} 
        btnText={`Сохранить`} 
        children={
          <fieldset className="popup__field">
            <input className="popup__form-input profile-popup-name" id="profile-name-input" type="text" name="name" value=""
              placeholder="Имя" minlength="2" maxlength="40" required />
            <span className="error profile-name-input-error"></span>
            <input className="popup__form-input profile-popup-activity" id="profile-activity-input" type="text"
              name="about" value="" placeholder="Вид деятельности" minlength="2" maxlength="200" required />
            <span className="error profile-activity-input-error"></span>
          </fieldset>
        }
      />
      <PopupWithForm 
        name={`card`} 
        text={`Новое место`} 
        btnText={`Создать`} 
        children={
          <fieldset className="popup__field">
            <input type="text" className="popup__form-input card-popup-name" id="card-name-input" name="name" value=""
              placeholder="Название" minlength="2" maxlength="30" required />
            <span className="error card-name-input-error"></span>
            <input type="url" className="popup__form-input card-popup-activity" id="card-activity-input" name="link"
              value="" placeholder="Ссылка на картинку" required />
            <span className="error card-activity-input-error"></span>
          </fieldset>
        }
      />
      <PopupWithForm 
        name={`deleteCard`} 
        text={`Вы уверены?`} 
        btnText={`Да`} 
      />
      <PopupWithForm 
        name={`avatar`} 
        text={`Обновить аватар`} 
        btnText={`Сохранить`} 
        children={
          <fieldset className="popup__field avatar-popup__field">
            <input type="url" className="popup__form-input" id="avatar-popup-input" name="link"
              value="" placeholder="Ссылка на картинку" required />
            <span className="error avatar-popup-input-error"></span>
          </fieldset>
        }
      />
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
