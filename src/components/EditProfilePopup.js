import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    
  }, [currentUser, isOpen]);

  const handleChange = (e) => {
    const inputName = e.target.name;
    if (inputName === "name") {
      setName(e.target.value);
    }
    if (inputName === "about") {
      setDescription(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser({ name, about: description });
  };

  return (
    <PopupWithForm
      name={`profile`}
      text={`Редактировать профиль`}
      btnText={`Сохранить`}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__field">
        <input
          className="popup__form-input profile-popup-name"
          id="profile-name-input"
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          value={name ?? ""}
          onChange={handleChange}
          required
        />
        <span className="error profile-name-input-error"></span>
        <input
          className="popup__form-input profile-popup-activity"
          id="profile-activity-input"
          type="text"
          name="about"
          placeholder="Вид деятельности"
          minLength="2"
          maxLength="200"
          value={description ?? ""}
          onChange={handleChange}
          required
        />
        <span className="error profile-activity-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
