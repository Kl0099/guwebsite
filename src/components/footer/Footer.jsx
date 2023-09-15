import React from 'react';
import './footer.css';
import GU from '../../assests/LogoGU.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Footer(props) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.open(path, '_blank');
  }

  const scrollToAbout = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-logo">
          <div className="f-image">
            <img src={GU} alt="GU Logo" />
          </div>
          <div className="f-logo-text">
            <h1>Gandhinagar <br/>University</h1>
          </div>
        </div>

        <div className="address">
        <h2>Khatraj - Kalol Road, Moti Bhoyan,<br/> Tal. Kalol,<br/> Dist. Gandhinagar-382721.</h2>
        </div>

        <div className="useful-links">
          <h2>Useful Links</h2>
          <ul>
            <li><Link to="/" onClick={()=>{window.scrollTo(0,0)}}>home</Link></li>
            <li onClick={scrollToAbout}><Link to='/'>About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            {/* <li><Link onClick={()=>{handleNavigation('/DirectLink')}}>DirectLink</Link></li> */}
          </ul>
        </div>

        <div className="services">
          <h2>Services</h2>
          <ul>
            <li><span>📚</span> Free Study Material</li>
            <li><span>🖥️</span> User-Friendly UI</li>
            <li><span>📝</span> Previous Year Question Bank</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
