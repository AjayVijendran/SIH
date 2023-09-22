import React, { useState } from 'react';
import './LandingPage.css'; // Import your CSS file for the landing page
import logo from './logo.png';
import Footer from './footer';
import { useNavigate } from 'react-router';
import image1 from './cpgrams_1.png'
import image2 from './cpgrams_2.png'
import image3 from './cpgrams_3.png'

function LandingPage() {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  const redirectToLogin = () =>{
    navigate('/auth')
  }
  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero1-section">
        <button className="sign1-in-up-button" onClick={redirectToLogin}>Sign In / Sign Up</button>
        <div className="hero1-image-section">
          <img src={logo} alt="Hero" className="hero1-image" />
        </div>
        <button className="cta1-button" onClick={toggleContent}>
          Learn More
        </button>
        <div className={`cta1-content ${showContent ? 'active' : ''}`}>
          
          <p>Welcome to our platform, where innovation meets public service. We are committed to empowering citizens by harnessing the latest technology and MoHUA's CPGRAMS. Our mission is to bridge the gap between you and the government, making services more accessible, responsive, and transparent. Join us in this journey of transformation and let your voice drive positive change in your community.</p>

          <img src={image1} alt="Image 3" />

          <p className='' c>Our platform is at the forefront of transforming public service delivery in India. With MoHUA's CPGRAMS as our foundation, we are leveraging technology to streamline government processes and improve citizen-government interactions. We believe in the potential of digital innovation to create a more efficient, accountable, and citizen-centric administration. Explore our platform and be a part of this digital revolution.</p>

          <img src={image2} alt="Image 3" />

          <p className='welcome-text'>Your concerns, your feedback, and your aspirations drive our mission. We are here to listen, to act, and to make a difference. Through MoHUA's CPGRAMS, we provide you with a direct line to government departments, ensuring that your grievances are heard and resolved promptly. Your voice matters, and together, we can build a more responsive and citizen-friendly government.</p>

          <img src={image3} alt="Image 3" />

          <p>We believe in the power of communities coming together for positive change. Our platform is a hub for citizens, government officials, and community leaders to collaborate, share ideas, and work towards common goals. By uniting our efforts, we can address the challenges our society faces and create a brighter future for all.The journey to a better tomorrow starts with you. By engaging with MoHUA's CPGRAMS and our platform, you become an active participant in the development of your nation. Whether it's reporting an issue, suggesting an improvement, or simply staying informed, your involvement is essential in shaping a brighter and more prosperous future for India.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
