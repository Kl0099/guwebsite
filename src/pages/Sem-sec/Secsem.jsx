import React from 'react'
// import "../Sem-first/FirstSem.css"
import '../Sem-sec/secsem.css'
import { NavLink,Outlet } from 'react-router-dom'
import GU from '../../assests/LogoGU.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Secsem() {
  const arrayofsemsec = [
    {
      id:1,
      names:"FCE",
      link:"/Second-sem/FCE"
    },
    {
      id:2,
      names:"EM-2",
      link:"/Second-sem/EM-II"
    },
    {
      id:3,
      names:"ETC-2",
      link:"/Second-sem/ETC-II"
    },
    {
      id:4,
      names:"PPS",
      link:"/Second-sem/PPS"
    },
    {
      id:5,
      names:"EDP",
      link:"/Second-sem/EDP"
    },
    ]

  return (
    <div id='sem-one'>
      <Helmet>
        <title>GU-2nd Semester</title>
      </Helmet>
      <div className="sem__links">
        <div className="sem__links-link">
         <ul className='cards'>
            <NavLink to='FCE'><li className='sem__links-name card'>FCE</li></NavLink>
            <NavLink to='EM-II'><li className='sem__links-name card'>EM-2</li></NavLink>
            <NavLink to='ETC-II'><li className='sem__links-name card'>ETC-2</li></NavLink>
            <NavLink to='PPS'><li className='sem__links-name card'>PPS</li></NavLink>
            <NavLink to='EDP'><li className='sem__links-name card'>EDP</li></NavLink>
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
              arrayofsemsec.map((curr)=>{
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
