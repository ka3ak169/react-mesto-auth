import React from 'react';
import { Link } from 'react-router-dom';


function Register(){

  return (
    <div className='entry-form'>
      <h2 className='entry-form__heading'>Регистрация</h2>
      <form>
        <fieldset className='entry-form__field'>
          <input
            className="entry-form__form-input"
            id="entry-form-email-input"
            type="text"
            name="email"
            placeholder="Email"
            minLength="2"
            maxLength="40"
            defaultValue={''}
            required
          />
          <input
            className="entry-form__form-input"
            id="entry-form-password-input"
            type="email"
            name="password"
            placeholder="Пароль"
            minLength="2"
            maxLength="40"
            defaultValue={''}
            required
           />          
        </fieldset>
        <button
          className="entry-form__submit-button"
          type="submit"
          name="submit"
        > Зарегистрироваться           
          </button>
      </form>
      <p className='entry-form__caption'>Уже зарегистрированы? <Link className='entry-form__caption' to={'/'}>Войти</Link></p>
      
    </div>
  );
};

export default Register;