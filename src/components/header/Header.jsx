import PropTypes from "prop-types";
import "./header.css";
import { HiX, HiMenu } from "react-icons/hi";
import NavLogo from "../../assets/Logo.png";

const Header = ({ menuOpen, setMenuOpen }) => {
  const menuIcon = menuOpen ? <HiX /> : <HiMenu />;

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header className="header">
        <Navbar setMenuOpen={setMenuOpen}/>
      </header>
      <button className="burger--menu" onClick={handleToggle}>{menuIcon}</button>
    </>
  )
};

Header.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired
}

export const ResponsiveMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`res--menu ${menuOpen ? "res--menu--open" : ""}`}>
      <Navbar setMenuOpen={setMenuOpen} />
    </div>
  )
};

ResponsiveMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired
};

const Navbar = ({ setMenuOpen }) => {
  const handleLinkClick = () => {
    setMenuOpen(false)
  };

  return (
    <nav className="header--nav">
      <div className="nav--logo">
        <a href="#home" onClick={handleLinkClick}>
          <img src={NavLogo} alt="Nav Logo" className="nav--logo" />
        </a>
      </div>
      <div className="nav--divider"></div>
      <ul className="nav--list">
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About Us</a></li>
        <li><a href="#references" onClick={handleLinkClick}>References</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  setMenuOpen: PropTypes.func.isRequired
}

export default Header;