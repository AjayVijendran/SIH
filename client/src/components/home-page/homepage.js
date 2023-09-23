import React, { useState } from 'react';
import './homepage.css'; // Import your CSS file for the landing page
import logo from '../logo.png';
import Header from '../header';
import Footer from '../footer.js'
import { MyChat } from '../chat';
function Homepage() {
  return (
    <div className="home-page">
        <Header/>
      <section className="hero-section">
        {/* <button className="sign-in-up-button">Sign In / Sign Up</button> */}
        <div className="hero-image-section">
          <img src={logo} alt="Hero Image" className="hero-image" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Homepage;
