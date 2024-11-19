import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './AppBar.css';

function AppBar({ toggleSidebar }) {
  // Local state to handle the active class for nav-links (hamburger menu)
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Toggle the menu active state when hamburger is clicked
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuActive(false); // This will close the hamburger menu on link click
  };

  return (
    <header className="app-bar">
      <div className="logo">Adams Academy</div>

      {/* Hamburger icon for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar links, with conditional class based on the menu state */}
      <div className={`nav-links ${isMenuActive ? 'active' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="#about" onClick={handleLinkClick}>About</Link>
        <Link to="#services" onClick={handleLinkClick}>Services</Link>
        <Link to="#contact" onClick={handleLinkClick}>Contact</Link>

        {/* Register and Login buttons */}
        <Link to="/register" className="nav-button" onClick={handleLinkClick}>Register</Link>
        <Link to="/login" className="nav-button" onClick={handleLinkClick}>Login</Link>
      </div>
    </header>
  );
}

export default AppBar;
