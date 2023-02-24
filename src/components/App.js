import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { PopupWithForm } from './Main';

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
      {/* card popup */}
      {/* <div className="popup card-popup popup_opened"> */}
      <div className="popup card-popup">
        <div className="popup__container card-popup__container">
          <h2 className="popup__heading">Новое место</h2>
          <button className="popup__close-button" name="close" type="button"></button>
          <form className="card-popup__form popup__form" novalidate>
            <fieldset className="popup__field">
              <input type="text" className="popup__form-input card-popup-name" id="card-name-input" name="name" value=""
                placeholder="Название" minlength="2" maxlength="30" required />
              <span className="error card-name-input-error"></span>
              <input type="url" className="popup__form-input card-popup-activity" id="card-activity-input" name="link"
                value="" placeholder="Ссылка на картинку" required />
              <span className="error card-activity-input-error"></span>
            </fieldset>
            <button className="submit-button submit-button_invalid card-submit-button" type="submit" name="card-submit">Создать</button>
          </form>
        </div>
      </div>
      {/* delete-card popup */}
      {/* <div className="popup deleteCard-popup popup_opened"> */}
        <div className="popup deleteCard-popup">
          <div className="popup__container deleteCard-popup__container">
            <h2 className="popup__heading">Вы уверены?</h2>
            <button className="deleteCard-popup__close-button popup__close-button" name="close" type="button"></button>
            <form className="deleteCard-popup__form popup__form" name="formDelete" novalidate>
              <button className="submit-button submit-button123" type="submit" name="delete-submit">Да</button>
            </form>
          </div>
        </div>
      {/* avatar popup */}
      {/* <div className="popup avatar-popup popup_opened"> */}
      <div className="popup avatar-popup">
        <div className="avatar-popup__container popup__container">
          <h2 className="popup__heading">Обновить аватар</h2>
          <button className="popup__close-button" name="close" type="button"></button>
          <form className="avatar-popup__form popup__form" name="formAvatar" novalidate>
            <fieldset className="popup__field avatar-popup__field">
              <input type="url" className="popup__form-input" id="avatar-popup-input" name="link"
                value="" placeholder="Ссылка на картинку" required />
              <span className="error avatar-popup-input-error"></span>
            </fieldset>
            <button className="submit-button submit-button_invalid avatar-submit-button" type="submit" name="profile-submit">Сохранить</button>
          </form>
        </div>
      </div>
      {/* image popop */}
      {/* <div className="popup image-popup popup_opened"> */}
      <div className="popup image-popup">
        <div className="image-popup__container">
          <button className="image-popup__close-button popup__close-button" name="close" type="button"></button>
          <img className="image-popup__image" src="#" alt="" />
          <p className="image-popup__description"></p>
        </div>
      </div>
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
