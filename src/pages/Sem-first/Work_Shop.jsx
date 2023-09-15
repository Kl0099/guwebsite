import React from 'react'
import './Firstsem.css'
import { useState } from 'react'
import { cheapters } from '../../components/accordian/accodata'
import Myaccordian from '../../components/accordian/Myaccordian'
export default function Work_Shop() {
  const [data,Setdata] = useState(cheapters);
  const [show,setshow] = useState(false);
  return (
    
    <div>
        <div className='subject_section-title'>
               <div className="subject_section-title-sub">
              <h1>WorkShop</h1>
              <p>Workshop is a place where skills can be developed. The areas such as fitting, carpentry, welding machining, smithy can help me to check my theoretical knowledge learnt in
                </p>
              </div>
        </div>
  
        <div className="material_container">
            <div className="material_container-1">
            <li className="card">
            <div>
              <h3 className="card-title">Lab Manual</h3>
              <div className="card-content">
              <p>Here's the lab manual for Batch 2022-23. You'll get to do practical things and learn new stuff.</p>
              </div>
            </div>
            <div className="card-link-wrapper">
            <a href="https://drive.google.com/file/d/1H60JJx2cGCXjnNVUuxEtuudqpJ04m3BL/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
            {/* <a href="https://drive.google.com/file/d/1U7-LA9Y683wRSo9Uc-gwvIFv7F1zk-EV/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a> */}
            {/* <p>currently unavailable</p> */}
              {/* <a href="" class="card-link">Go now</a> */}
              {/* <a href="" className='material_download_link' target="_blank" rel="noopener noreferrer">Unavailable</a> */}
              {/* <div className='card-link' onClick={() => { handleNavigation('/First-sem/FME') }}>Go Now</div> */}
            </div>
          </li>
          </div>
        </div>
    </div>
  )
}

