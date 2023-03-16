import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState();
  const [link, setLink] = useState();

  const handleChange = (e) => {
    const inputName = e.target.name;
    if (inputName === "name") {
      setName(e.target.value);
    }
    if (inputName === "link") {
      setLink(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace({ name, link });
    setName("");
    setLink("");
  };

  return (
    <PopupWithForm
      name={`card`}
      text={`Новое место`}
      btnText={`Создать`}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__field">
        <input
          type="text"
          className="popup__form-input card-popup-name"
          id="card-name-input"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          value={name ?? ""}
          onChange={handleChange}
          required
        />
        <span className="error card-name-input-error"></span>
        <input
          type="url"
          className="popup__form-input card-popup-activity"
          id="card-activity-input"
          name="link"
          placeholder="Ссылка на картинку"
          value={link ?? ""}
          onChange={handleChange}
          required
        />
        <span className="error card-activity-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
