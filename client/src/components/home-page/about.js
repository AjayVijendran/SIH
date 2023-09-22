import React from 'react'
import Header from '../header';
import Footer from '../footer.js'
import './about.css'

const About = () => {
    const buttonText = 'My Profile';
  return (
    
    <div className='home-page'>
        <Header buttonText={buttonText} />
        <div className="about-content">
            <h2>About Us</h2>
            <p>
                Welcome to our website! We are a dedicated team of professionals passionate about providing high-quality services to our citizens. We are committed to excellence and customer satisfaction.
            </p>
            <p>
                Our goal is to make the society problem free and full of harmony. We are working hard to achieve this by handling the day-to-day grievances of the citizens and making sure that they reach the right ears.
            </p>
            <h3>Our Values</h3>
            <ul>
                <li>Customer-Centric Approach</li>
                <li>Integrity and Transparency</li>
                <li>Innovation and Creativity</li>
                <li>Teamwork and Collaboration</li>
                <li>Continuous Improvement</li>
            </ul>
            <p>
                Thank you for visiting our website, and we look forward to serving you and taking care of your grievances.
            </p>
            </div>
        <Footer />
    </div>
  )
}

export default About