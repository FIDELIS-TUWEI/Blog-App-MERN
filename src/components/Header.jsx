import PropTypes from "prop-types";
import "../styles/header.css";
import { HiX, HiMenu } from "react-icons/hi";
import NavLogo from "../assets/nav-logo.png";

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
    <>
      <nav className="header--nav">
        <div className="nav--logo">
          <a href="#" onClick={handleLinkClick}>
            <img src={NavLogo} alt="Nav Logo" />
          </a>
        </div>
        <div className="nav--divider"></div>
        <ul className="nav--list">
          <li><a href="#home"></a>Home</li>
          <li><a href="#services"></a>Services</li>
          <li><a href="#about"></a>About Us</li>
          <li><a href="#references"></a>References</li>
          <li><a href="#contact"></a>Contact</li>
        </ul>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  setMenuOpen: PropTypes.func.isRequired
}

export default Header;