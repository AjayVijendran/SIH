import React from 'react';
import './header.css'
function Header({ buttonText }) {
  return (
    <header className="navbar">
      {/* Navigation Menu */}
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>
      {/* Sign In / Sign Up Button */}
      <button className="sign-in-up-button">{buttonText}</button>
    </header>
  );
}

export default Header;
