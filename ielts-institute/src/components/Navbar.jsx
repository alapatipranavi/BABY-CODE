import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>IELTS Institute</h2>
        </div>
        
        <nav className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#courses" className="nav-link" onClick={closeMenu}>Courses</a>
          <a href="#testimonials" className="nav-link" onClick={closeMenu}>Testimonials</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
        </nav>

        <button
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span className="hamburger" aria-hidden="true">☰</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
