import React from 'react'
import Header from '../header';
import Footer from '../footer.js'
import './contact.css'

const Contact = () => {
    const buttonText = 'My Profile';
  return (
    
    <div className='home-page'>
        <Header buttonText={buttonText} />
        <div className="contact-content">
        <h2>Contact Us</h2>
        <p>Please lodge your grievances at the website. For additional information, you can contact the following persons</p>
        <table className="contact-table">
        <thead>
            <tr>
            <th>Serial no.</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Contact number</th>
            <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Ajay Vijendran</td>
            <td>Joint Secretary</td>
            <td>+91 9361442826</td>
            <td>ajay.vijendran@gmail.com</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Aadhith Sridharan</td>
            <td>Secretary</td>
            <td>+91 8925275256</td>
            <td>aadhith.sridharan@gmail.com</td>
            </tr>
        </tbody>
        </table>

        <b>For technical concerns, send mail to: gopalsingh@gmail.com</b>

      </div>
        <Footer />
    </div>
  )
}

export default Contact