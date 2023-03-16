import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup ({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef()
  const linkRef = useRef()

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar(linkRef.current);

    inputRef.current.value = '';
  }

  const handleChange = (e) => {
    linkRef.current = e.target.value;
  }

  return(
    <PopupWithForm
      name={`avatar`} 
      text={`Обновить аватар`} 
      btnText={`Сохранить`}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >      
      <fieldset className="popup__field avatar-popup__field">
        <input ref={inputRef} type="url" className="popup__form-input" id="avatar-popup-input" name="link"
          placeholder="Ссылка на картинку" defaultValue={''} onChange={handleChange} required />
        <span className="error avatar-popup-input-error"></span>
      </fieldset>        
    </PopupWithForm>
  )
}