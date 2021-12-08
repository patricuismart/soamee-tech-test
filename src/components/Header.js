import '../styles/App.scss';
import '../styles/Reset.scss';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo" title="Logo" />{' '}
      <h1 className="header__title">Resultados</h1>
    </header>
  );
};

export default Header;
