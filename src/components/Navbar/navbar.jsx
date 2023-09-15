import React, { useState } from "react";
import './navbar.css'
import { NavLink,Link } from 'react-router-dom'
import LogoGU from '../../assests/LogoGU.png'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar(){

    const scrollToAbout = (event) => {
      event.preventDefault();
        const aboutSection = document.getElementById(`${event}`);
        
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      const [showNav, setShownav] = useState(false);
    
      const toggleNav = () => {
        setShownav(!showNav);
      }

      return (

        <div className="navbar">

        <nav>
          <div className="nav-logo">
            <img src={LogoGU} alt="" />
          </div>

          <div className={`nav-tags ${showNav ? 'show' : ''}`}>
            <Link to="/" className='Navlinks' onClick={()=>{window.scrollTo(0,0)}} ><li>Home</li></Link>
            <a href="#about-section" className='Navlinks' onClick={(event)=>{
               event.preventDefault();
               document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
               }} ><li >About us</li></a>
            <a href="#contactus" className='Navlinks' onClick={(event)=>{
               event.preventDefault();
               document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' });
               }} ><li >Contact us</li></a>
            <a href="#material-section" className='Navlinks' onClick={(event)=>{
               event.preventDefault();
               document.getElementById('material-section').scrollIntoView({ behavior: 'smooth'});
               }} ><li >Material</li></a>
            {/* <a href="#contactus" className='Navlinks' onClick={(event)=>{
               event.preventDefault();
               const contactus = document.getElementById('contactus');
               if (contactus) {
                 contactus.scrollIntoView({ behavior: 'smooth' });
               }
            }}><li >contact us</li></a> */}
            {/* <NavLink to="/Contactus " className='Navlinks'><li>Contact Us</li></NavLink> */}
            <NavLink to="/FirstSem1" className='Navlinks'><li className='nav-sem'>sem-1</li></NavLink>
            <NavLink to="/Secsem2" className='Navlinks'><li className='nav-sem'>sem-2</li></NavLink>
          </div>
        </nav>

        <div className="nav-icons">
          <FaBars className={`responsive-icons ${showNav ? 'hidden' : 'visible'}`} onClick={toggleNav} />
          <IoMdClose className={`responsive-icons ${showNav ? 'visible' : 'hidden'}`} onClick={toggleNav} />
        </div>

      </div>
      )
}