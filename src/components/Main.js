function handleEditAvatarClick() {
  document.querySelector('.avatar-popup').classList.add('popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('.profile-popup').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.card-popup').classList.add('popup_opened');
}

export function PopupWithForm(props) {

  return(
    <div className={`popup ${props.name}-popup `}   >
      <div className={`popup__container ${props.name}-popup__container`}>
        <h2 className="popup__heading">{props.text}</h2>
        <button className={`${props.name}-popup__close-button popup__close-button`} name="close" type="button"></button>
        <form className={`${props.name}-popup__form popup__form`} name={props.name} novalidate>
          {props.children}
          <button className="submit-button" type="submit" name={`${props.name}-submit`}>{props.btnText}</button>
        </form>
      </div>
    </div>
  )
}

function ImagePopup() {
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

function Main() {
  return(
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src="#" alt="Крутая аватарка" />
            <div className="profile__pen"
            onClick={handleEditAvatarClick}
            ></div>
            <div className="profile__overlay"></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <p className="profile__activity">Исследователь океана</p>
            <button className="profile__edit-button" type="button"
            onClick={handleEditProfileClick}
            ></button>
          </div>
        </div>
        <button className="profile__add-button" type="button"
        onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="cards">
      </section>
    </main>
  );
};

export default Main;