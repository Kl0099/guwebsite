import React from 'react'
import Secsem from './Sem-sec/Secsem'
import Thirdsem from './Sem-thrd/Thirdsem'
// import Intro from '../components/Intro/Intro'
import '../pages/homepage.css'
import Containers from '../components/containers/Containers'
import { useState } from 'react';
import { Routes, Route, } from 'react-router-dom';
import About from '../components/aboutus/About'
import Contactus from '../components/contactus/Contactus'
import FME from '../pages/Sem-first/FME'
import BEE from '../pages/Sem-first/BEE'
import FirstSem from './Sem-first/FirstSem'
import EP from './Sem-first/EP'
import EM_I from './Sem-first/EM_I'
import ETC_I from './Sem-first/ETC_I'
import Work_Shop from './Sem-first/Work_Shop'
import FCE from './Sem-sec/FCE'
import PPS from './Sem-sec/PPS'
import EDP from './Sem-sec/EDP'
import EM_II from './Sem-sec/EM_II'
import ETC_II from './Sem-sec/ETC_II'


export default function Homepage() {

  const scrollToAbout = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [showNav, setShownav] = useState(false);

  const toggleNav = () => {
    setShownav(!showNav);
  }

  return (
    <div className='home'>
{/* 
      <div className="navbar">

        <nav>
          <div className="nav-logo">
            <img src={LogoGU} alt="" />
          </div>

          <div className={`nav-tags ${showNav ? 'show' : ''}`}>
            <NavLink to="/" className='Navlinks'><li>Home</li></NavLink>
            <a href="#about-section" className='Navlinks' onClick={scrollToAbout}><li >About us</li></a>
            <NavLink to="/Contactus " className='Navlinks'><li>Contact Us</li></NavLink>
            <NavLink to="/FirstSem1" className='Navlinks'><li className='nav-sem'>sem-1</li></NavLink>
            <NavLink to="/Secsem2" className='Navlinks'><li className='nav-sem'>sem-2</li></NavLink>
          </div>
        </nav>

        <div className="nav-icons">
          <FaBars className={`responsive-icons ${showNav ? 'hidden' : 'visible'}`} onClick={toggleNav} />
          <IoMdClose className={`responsive-icons ${showNav ? 'visible' : 'hidden'}`} onClick={toggleNav} />
        </div>

      </div> */}



      <Routes>
        <Route path='/' element={<Containers />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contactus' element={<Contactus />} />
        {/* <Route path='/DirectLink' element={<DirectLink/>} /> */}
        <Route path='/First-sem' element={<FirstSem />}>
          <Route path='FME' element={<FME />} ></Route>
          <Route path='BEE' element={<BEE />} ></Route>
          <Route path='EP' element={<EP />} ></Route>
          <Route path='EM-I' element={<EM_I />} ></Route>
          <Route path='ETC-I' element={<ETC_I />} ></Route>
          <Route path='Work-shop' element={<Work_Shop />} ></Route>
        </Route>
        <Route path='/Second-sem' element={<Secsem />}>
          <Route path='FCE' element={<FCE />} ></Route>
          <Route path='PPS' element={<PPS />} ></Route>
          <Route path='EDP' element={<EDP />} ></Route>
          <Route path='EM-II' element={<EM_II />} ></Route>
          <Route path='ETC-II' element={<ETC_II />} ></Route>
        </Route>
        <Route path='/Third-sem' element={<Thirdsem />} />
      </Routes>
    </div>
  )
}

