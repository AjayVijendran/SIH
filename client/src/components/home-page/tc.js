import React from 'react'
import Header from '../header';
import Footer from '../footer';
import { useNavigate } from 'react-router';
import './contact.css'

const Tc = () => {
    const buttonText = 'My Profile';
    const navigate = useNavigate();
  const redirectToContact = () =>{
    navigate('/home/ContactUs')
  }
  return (
    <div className='home-page'>
        <Header buttonText={buttonText} />
        <div className="tc-content">
            <h2>Terms and Conditions</h2>

            <p>
                Please read these terms and conditions carefully before using our website. By accessing or using the website, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please do not use the website.
            </p>

            <h3>1. Use of Website</h3>
            <p>
                The content of this website is for general information and use only. It is subject to change without notice. We reserve the right to modify or discontinue any aspect of the website without prior notice.
            </p>

            <h3>2. Privacy</h3>
            <p>
                Your use of this website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
            </p>

            <h3>3. Intellectual Property</h3>
            <p>
                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited unless explicitly authorized by us.
            </p>

            <h3>4. Disclaimer</h3>
            <p>
                The information on this website is provided on an "as is" basis. We make no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, or suitability of the information. Your use of any information on this website is at your own risk.
            </p>

            <h3>5. Governing Law</h3>
            <p>
                These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
            </p>

            <p>
                If you have any questions about these terms and conditions, please <b onClick={redirectToContact}>contact us</b>.
            </p>
            </div>

        <Footer />
        </div>
        )
}

export default Tc