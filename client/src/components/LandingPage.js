import React, { useState } from 'react';
import './LandingPage.css'; // Import your CSS file for the landing page
import logo from './logo.png';
import Footer from './footer';

function LandingPage() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <button className="sign-in-up-button">Sign In / Sign Up</button>
        <div className="hero-image-section">
          <img src={logo} alt="Hero Image" className="hero-image" />
        </div>
        <button className="cta-button" onClick={toggleContent}>
          Learn More
        </button>
        <div className={`cta-content ${showContent ? 'active' : ''}`}>
          <p>Welcome to our platform, where innovation meets public service. We are committed to empowering citizens by harnessing the latest technology and MoHUA's CPGRAMS. Our mission is to bridge the gap between you and the government, making services more accessible, responsive, and transparent. Join us in this journey of transformation and let your voice drive positive change in your community.</p>

          <p>Our platform is at the forefront of transforming public service delivery in India. With MoHUA's CPGRAMS as our foundation, we are leveraging technology to streamline government processes and improve citizen-government interactions. We believe in the potential of digital innovation to create a more efficient, accountable, and citizen-centric administration. Explore our platform and be a part of this digital revolution.</p>

          <p>Your concerns, your feedback, and your aspirations drive our mission. We are here to listen, to act, and to make a difference. Through MoHUA's CPGRAMS, we provide you with a direct line to government departments, ensuring that your grievances are heard and resolved promptly. Your voice matters, and together, we can build a more responsive and citizen-friendly government.</p>

          <p>We believe in the power of communities coming together for positive change. Our platform is a hub for citizens, government officials, and community leaders to collaborate, share ideas, and work towards common goals. By uniting our efforts, we can address the challenges our society faces and create a brighter future for all.</p>

          <p>The journey to a better tomorrow starts with you. By engaging with MoHUA's CPGRAMS and our platform, you become an active participant in the development of your nation. Whether it's reporting an issue, suggesting an improvement, or simply staying informed, your involvement is essential in shaping a brighter and more prosperous future for India.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
