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
    <nav className="header--nav">
      <div className="nav--logo">
        <a href="#" onClick={handleLinkClick}>
          <img src={NavLogo} alt="Nav Logo" />
        </a>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  setMenuOpen: PropTypes.func.isRequired
}

export default Header;