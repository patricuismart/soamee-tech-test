import '../styles/main.scss';

import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" title="Logo" />
      <h1 className="header__title">Resultados</h1>
    </header>
  );
};

export default Header;
