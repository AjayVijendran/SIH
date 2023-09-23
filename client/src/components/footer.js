import React from 'react';
import { useNavigate } from 'react-router';
import './footer.css'
function Footer() {
  const navigateContactUs = () => {
    navigate('/home/ContactUs')
  }
  const navigateTC = () => {
    navigate('/home/TC')
  }
  const navigate=useNavigate();
  return (
    <footer className="footer">
      <div className="footer-options">
        <ul>
          <li><a onClick={navigateContactUs}>Contact Us</a></li>
          <li><a onClick={navigateTC}>T & C</a></li>
          {/* Add more footer options as needed */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
