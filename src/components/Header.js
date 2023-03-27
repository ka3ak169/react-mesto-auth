import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../images/VectorlogoW.svg';

function Header(){
  const url = useLocation();
  const links = () => {
    if (url.pathname === "/sign-in") {
      return <div className="header__link">
      {/* <Link to={'sign-up'} style={{color: '#fff', textDecorationLine: 'none'}}>email@mail.com</Link> */}
      <Link to={'sign-up'} style={{color: '#fff', textDecorationLine: 'none', marginLeft: '24px'}}>Регистрация</Link>
      </div>;
    }
    if (url.pathname === "/sign-up") {
      return <div className="header__link">
      {/* <Link to={'sign-up'} style={{color: '#fff', textDecorationLine: 'none'}}>email@mail.com</Link> */}
      <Link to={'sign-up'} style={{color: '#fff', textDecorationLine: 'none', marginLeft: '24px'}}>Войти</Link>
      </div>;
    }
    if (url.pathname === "/") {
      return <div className="header__link">
      <Link to={'sign-up'} style={{color: '#fff', textDecorationLine: 'none'}}>email@mail.com</Link>
      <Link to={'sign-up'} style={{color: '#fff', textDecorationLine: 'none', marginLeft: '24px', color: '#A9A9A9'}}>Выйти</Link>
      </div>;
    }
  };
  return( 
    <header className="header">
      <img className="header__logo" src={logo} alt="лого" />
      {links()}
    </header>
  );
};

export default Header;