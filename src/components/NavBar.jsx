import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Trafalgar Logo" className="logo-image" />
          <span className="logo-text">
            cl<span className="ai">AI</span>rdoc
          </span>
        </div>
        <ul className="nav-links">
          <li><a href="#hero1" className="active">Home</a></li>
          <li><a href="#services">Why Us?</a></li>
          <li><a href="#solution">About Us</a></li>
          <li><a href="#how">How it works?</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
