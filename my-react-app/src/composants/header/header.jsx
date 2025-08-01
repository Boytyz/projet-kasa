import { NavLink } from 'react-router-dom';
import './header.scss'; // Import the header styles


function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <NavLink to="/" className="header__logo">
          <img src="../../assets/LOGO.png" alt="Kasa" />
        </NavLink>
        
        <nav className="header_nav">
          <NavLink to="/" className="header__nav-link">Accueil</NavLink>
          <NavLink to="/about" className="header__nav-link">À Propos</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
