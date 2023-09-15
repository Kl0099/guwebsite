import React, {useRef} from 'react';
import './contact.css';
import {  FaHome, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
// import { FaBuildingColumns } from 'react-icons/fa5';


export default function Contactus() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vnu5po4', 'template_4ratzyu', form.current, 'X6uRc9jk5WcoQW683')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };



  return (
    <div>
      <div className="contact-container">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail }>
            <h2>Contact-Form</h2>
            <div className="name">
            <input type="text" name="name" placeholder="Full Name" required />
            </div>
            <div className="email">
            <input type="email" name="user_email" placeholder="Email" required />
            </div>
            <div className="suggestion">
              <textarea name='message' rows="5" placeholder='Give Your Suggestions'></textarea>
            </div>
            <div>
              <button type='submit' className='contact-btn'>submit</button>
            </div>
          </form>
        </div>
        <div className="contact-text">
          <div className="official-link">
            <h2>Official links of College's Social-media</h2>

            <div className='college college-web'>
              <h3>webiste :-</h3>
              <a href="https://www.gandhinagaruni.ac.in/" target='_blank' rel="noreferrer">
                <FaHome className="icon" />
              </a>
            </div>

            <div className="college college-instagram">
              <h3>Instagram :-</h3>
              <a href="https://www.instagram.com/gandhinagaruniversity/" target='_blank' rel="noreferrer">
                <FaInstagram className="icon" />
              </a>
            </div>

            <div className="college college-facebook">
              <h3>Facebook :-</h3>
              <a href="https://www.facebook.com/GandhinagarUniversity" target='_blank' rel="noreferrer">
                <FaFacebook className="icon" />
              </a>
            </div>

            <div className="college college-linkedin">
              <h3>Linked-in :-</h3>
              <a href="https://www.linkedin.com/company/gandhinagaruni/" target='_blank' rel="noreferrer">
                <FaLinkedin className="icon" />
              </a>
            </div>

            <div className="note">
              <h3>Note :- This is ofiicial social-media links of the college.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
