import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login({setLoggedIn, loggedIn}){
  const navigate = useNavigate();
  console.log(setLoggedIn);
  console.log(loggedIn);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);

    navigate('/');
    // здесь обработчик регистрации
  }

  return (
    <div className='entry-form'>
      <h2 className='entry-form__heading'>Вход</h2>
      <form onSubmit={handleSubmit}>
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
            type="password"
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
        > Войти           
          </button>
      </form>           
    </div>
  );
};

export default Login;