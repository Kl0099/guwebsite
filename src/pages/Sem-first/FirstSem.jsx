import React from 'react'
import "./Firstsem.css"
import { NavLink,Link, Outlet } from 'react-router-dom'
import GU from '../../assests/LogoGU.png';

import {Helmet} from 'react-helmet';


export default function FirstSem() {
  const arrayofsemone = [
    {
      id:1,
      names:"FME",
      link:"/First-sem/FME"
    },
    {
      id:2,
      names:"BEE",
      link:"/First-sem/BEE"
    },
    {
      id:3,
      names:"EP",
      link:"/First-sem/EP"
    },
    {
      id:4,
      names:"EM-1",
      link:"/First-sem/EM-I"
    },
    {
      id:5,
      names:"ETC-1",
      link:"/First-sem/ETC-I"
    },
    {
      id:6,
      names:"WorkShop",
      link:"/First-sem/Work-shop"
    },
    ]

  return (
    <div id='sem-one'>
      <Helmet>
        <title>GU-1st Semester</title>
      </Helmet>
      {/* <div className="home_img">
        <img src={gufinalimg} alt="GU" />
      </div> */}
      <div className="sem__links">
        {/* <div className="sem__links-link"> */}
        <div className="sem__links-link">
         <ul className='cards'>
            <NavLink to='FME' ><li className='sem__links-name card'>FME</li></NavLink>
            <NavLink to='BEE' ><li className='sem__links-name card'>BEE</li></NavLink>
            <NavLink to='EP'><li className='sem__links-name card'>EP</li></NavLink>
            <NavLink to='EM-I'><li className='sem__links-name card'>EM-I</li></NavLink>
            <NavLink to='ETC-I'><li className='sem__links-name card'>ETC-I</li></NavLink>
            <NavLink to='Work-shop'><li className='sem__links-name card'>WorkShop</li></NavLink>
         </ul>
        </div>
        <Outlet/>
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
          {/* <ul>
            <li><Link to="/">{props.name1}</Link></li>
            <li onClick={scrollToAbout}><Link to='/'>About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul> */}
         <ul style={{display:'flex',flexDirection:"column"}}>
            {
              arrayofsemone.map((curr)=>{
                return(
                <li id={curr}><Link to={curr.link} onClick={()=>{window.scrollTo(0,0)}} >{curr.names}</Link></li>
              )
              })
            }
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
      </div>
    </div>
  )
}
