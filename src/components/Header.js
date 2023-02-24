import logo from '../images/VectorlogoW.svg';

function Header(){
  return(
    <header class="header">
      <img class="header__logo" src={logo} alt="лого" />
    </header>
  );
};

export default Header;