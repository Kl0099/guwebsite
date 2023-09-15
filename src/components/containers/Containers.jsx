
import './container.css'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import gufinalimg from '../../assests/gufinalimg.jpg'
import About from '../aboutus/About';
import Navbar from '../Navbar/navbar';
import Contactus from '../contactus/Contactus';
export default function Containers() {
  const arrayofhome = [
    {
    id:1,
    name:"home",
    link:'/'
  },
    {
    id:2,
    name:"Semester1",
    link:'/First-sem/FME'
  },
    {
    id:3,
    name:"Semester2",
    link:'/Second-sem/FCE'
  },
]

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.open(path, '_blank');
  }
  return (
    <div className='container'>


      <div className="material_section">

        {/* welcome to my website*/}

        <Navbar/>


        <div className="home_img">
          <img src={gufinalimg} alt="GU" />
        </div>

        <div className='materia_section-title'>
          <div className="materia_section-title-sub">
            <h1>Welcome to Our Comprehensive Learning Platform</h1>
            <p>Embark on a journey of academic excellence with our comprehensive subject materials for the 1st, 2nd, and 3rd semesters of the academic year 2023-2024. At our platform, you'll discover an array of invaluable resources meticulously curated to support your studies. Our offerings include a repository of previous year's question banks (2022-23) along with detailed solutions, enriching lab manuals, and an extensive collection of presentation slides (PPTs) and study materials provided by the college.</p>

            <p>Whether your aspiration is to excel in exams, delve into advanced studies, or cultivate profound understanding, our platform comprehensively equips you for achieving excellent outcomes.</p>
          </div>
        </div>


        {/*  home page cards firstsem secondsem thirdsem fourth sem*/}
        

        <div id="about-section" className='height-vh About-US'>
          <About />
        </div>

      


            <div id="material-section" className="conntainer">
        <h2>Study material for students</h2>
        <ul className="cards">
          <li className="card">
            <div>
              <h3 className="card-title">Semester 1</h3>
              <div class="card-content">
                <p>Study Material for 1st semester students.</p>
              </div>
            </div>
            <div className="card-link-wrapper">
              {/* <a href="" class="card-link">Go now</a> */}
              <div className='card-link' onClick={() => { handleNavigation('/First-sem/FME') }}>Go Now</div>
            </div>
          </li>
          <li className="card">
          <div>
              <h3 className="card-title">Semester 2</h3>
              <div class="card-content">
                <p>Study Material for 2nd semester students.</p>
              </div>
            </div>
            <div class="card-link-wrapper">
            <div className='card-link' onClick={() => { handleNavigation('/Second-sem/FCE') }}>Go Now</div>
            </div>
          </li>
          <li class="card">
          <div>
              <h3 className="card-title">Semester 3</h3>
              <div class="card-content">
                <p>Study Material for 3rd semester students.</p>
              </div>
            </div>
            <div class="card-link-wrapper">
            <p>currently unavailable</p>
            </div>
          </li>
          <li class="card">
          <div>
              <h3 className="card-title">Semester 4</h3>
              <div class="card-content">
                <p>Study Material for 4th semester students.</p>
              </div>
            </div>
            <div class="card-link-wrapper">
              {/* <a href="" class="card-link">Learn More</a> */}
              <p>currently unavailable</p>
            </div>
          </li>
          <li class="card">
          <div>
              <h3 className="card-title">Semester 5</h3>
              <div class="card-content">
                <p>Study Material for 5th semester students.</p>
              </div>
            </div>
            <div class="card-link-wrapper">
            <p>currently unavailable</p>
            </div>
          </li>
          {/* <li class="card">
          <div>
              <h3 className="card-title">Semester 6</h3>
              <div class="card-content">
                <p>Study Material for 6th semester students.</p>
              </div>
            </div>
            <div class="card-link-wrapper">
              <a href="" class="card-link">Learn More</a>
            </div>
          </li>
          <li class="card">
            <div>
              <h3 class="card-title">Service 7</h3>
              <div class="card-content">
                <p>Aliquam eget nisl auctor, sollicitudin ipsum at, dignissim ligula. Donec tincidunt in elit et pellentesque. Integer posuere metus ac massa mollis euismod.</p>
              </div>
            </div>
            <div class="card-link-wrapper">
              <a href="" class="card-link">Learn More</a>
            </div>
          </li>
          <li class="card">
            <div>
              <h3 class="card-title">Service 8</h3>
              <div class="card-content">
                <p> Vivamus eget eros id elit feugiat mollis. Nam sed sem quis libero finibus tempor.</p>
              </div>
            </div>
            <div class="card-link-wrapper">
              <a href="" class="card-link">Learn More</a>
            </div>
          </li> */}
          
        </ul>
            </div>
        {/* <div id="material-section" className='height-vh'>
           
        </div> */}
          <div id='contactus'>
          <Contactus/>
        </div> 
       <Footer arrayprop={arrayofhome}/>

        

      </div>




    </div>
  )
}
