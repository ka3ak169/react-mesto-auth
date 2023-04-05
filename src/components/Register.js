import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';


function Register({setLoggedIn, loggedIn}){
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);

    navigate('/');
    // здесь обработчик регистрации
  }

  return (
    <div className='entry-form'>
      <h2 className='entry-form__heading'>Регистрация</h2>
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
            value={formValue.email}
            onChange={handleChange}
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
            value={formValue.password}
            onChange={handleChange}
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
      <p className='entry-form__caption'>Уже зарегистрированы? <Link className='entry-form__caption' to={'/sign-in'}>Войти</Link></p>
      
    </div>
  );
};

export default Register;