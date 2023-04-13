import React from "react";

export default function PopupWithForm({
  name,
  text,
  btnText,
  children,
  isOpen,
  onClose,
  onSubmit,
  isValid
}) {
  return (
    <div className={`popup ${name}-popup ${isOpen ? `popup_opened` : ``}`}>
      <div className={`popup__container ${name}-popup__container`}>
        <h2 className="popup__heading">{text}</h2>
        <button
          onClick={onClose}
          className={`popup__close-button`}
          name="close"
          type="button"
        ></button>
        <form
          className={`popup__form`}
          onSubmit={onSubmit}
          name={name}
        >
          {children}
          <button
            className={`submit-button ${isValid ? '' : 'submit-button_invalid' }`}
            type="submit"
            name={`${name}-submit`}
          >
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}
