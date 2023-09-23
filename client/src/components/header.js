import React from 'react';
import './header.css'
import { useNavigate } from 'react-router';
function Header({ buttonText }) {
  const profile =()=>{
    nav('/profile')
  }
  const nav = useNavigate();
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
      <button className="sign-in-up-button" onClick={profile}>My Profile</button>
    </header>
  );
}

export default Header;
