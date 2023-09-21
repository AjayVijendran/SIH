import React from 'react';
import './footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-options">
        <ul>
          <li><a href="#contact">About</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#contact">Privacy</a></li>
          <li><a href="#contact">T & C</a></li>
          {/* Add more footer options as needed */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
