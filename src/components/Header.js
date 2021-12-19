import '../styles/main.scss';

import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <a
        href="https://www.soamee.com/"
        alt="Home"
        target="_blank"
        rel="noreferrer"
      >
        <img className="header__logo" src={logo} alt="Logo" title="Logo" />
      </a>
    </header>
  );
};

export default Header;
