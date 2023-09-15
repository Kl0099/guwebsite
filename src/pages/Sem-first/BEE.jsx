import React from 'react'
import './Firstsem.css'
import { useState } from 'react'
import { beecheapters2 } from '../../components/accordian/accodata'
import Myaccordian from '../../components/accordian/Myaccordian'
export default function FME({name,topics}) {
  const [data,Setdata] = useState(beecheapters2);
  const [show,setshow] = useState(false);
  return (
    <div>

      
       <div className="fme" id='Fme'> 
        <div className='subject_section-title'>
               <div className="subject_section-title-sub">
              <h1>Basics of Electrical and Electronics Engineering</h1>
              <p>Electrical engineering is an engineering discipline concerned with the study, design, and application of equipment, devices, and systems which use electricity, electronics, and electromagnetism.Basic Electrical Engineering (BEE) is a important subject of engineering that deals with the study of electrical circuits, machines, and systems. It involves the study of the fundamental concepts and principles of electricity, electronics, electromagnetism, and electrical energy conversion. 
                </p>
              </div>
        </div>
        {/* qb<a href="https://drive.google.com/file/d/1zsEx9pFr_5QRxpANDaYD4xHTQfjol72G/view?usp=drive_link" className='material_download_link' target="_blank" rel="noopener noreferrer">Download</a>
        qbs<a href="https://drive.google.com/file/d/1eKTU8C9jcGo6sciF2AoCfQtkueHuWD_l/view?usp=drive_link" className='material_download_link' target="_blank" rel="noopener noreferrer">Download</a>
        ppt<a href="https://drive.google.com/drive/folders/1mmAuerwUikV0CmHplzwNjYdW4740pk8Q?usp=drive_link" className='material_download_link' target="_blank" rel="noopener noreferrer">Download</a>
        lab<a href="https://drive.google.com/file/d/1-FAdvf6fNGrSNRImi0j-gF1van2PHSij/view?usp=drive_link" className='material_download_link' target="_blank" rel="noopener noreferrer">Download</a>
        */}
  
          <div className="material_container">
          <div className="material_container-1">
            <li className="card">
            <div>
              <h3 className="card-title">Question-Bank- of BEE </h3>
              <div className="card-content">
              <p>here all cheapters are covered in this question bank.make sure that this question are only for practice. </p>
              </div>
            </div>
            <div className="card-link-wrapper">
            <a href="https://drive.google.com/file/d/1zsEx9pFr_5QRxpANDaYD4xHTQfjol72G/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
            </div>
             </li>
            <li className="card">
            <div>
              <h3 className="card-title">Question-Bank Solution</h3>
              <div className="card-content">
              <p>make sure that the answers of the all question is not exect answer based on study metirial and online contant. </p>
              </div>
            </div>
            <div className="card-link-wrapper">
              <a href="https://drive.google.com/file/d/1eKTU8C9jcGo6sciF2AoCfQtkueHuWD_l/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          </li>
            </div>
            <div className="material_container-1">
            
            <li className="card">
            <div>
              <h3 className="card-title">PPT</h3>
              <div className="card-content">
              <p>This is only for refrence make sure that this is not whole contant for exam preparation you must refer perticular book.</p>
              </div>
            </div>
            <div className="card-link-wrapper">
             
              <a href="https://drive.google.com/drive/folders/1mmAuerwUikV0CmHplzwNjYdW4740pk8Q?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
              
            </div>
          </li>
            
            <li className="card">
            <div>
              <h3 className="card-title">Lab Manual</h3>
              <div className="card-content">
              <p>Here's the lab manual for Batch 2022-23. You'll get to do practical things and learn new stuff.</p>
              </div>
            </div>
            <div className="card-link-wrapper">
            <a href="https://drive.google.com/file/d/1-FAdvf6fNGrSNRImi0j-gF1van2PHSij/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
            {/* <p>currently unavailable</p> */}
              {/* <a href="" class="card-link">Go now</a> */}
              {/* <a href="" className='material_download_link' target="_blank" rel="noopener noreferrer">Unavailable</a> */}
              {/* <div className='card-link' onClick={() => { handleNavigation('/First-sem/FME') }}>Go Now</div> */}
            </div>
          </li>
          </div>
          </div>


          


        <div className="Fme__cheapterwise">
          <div className="fme__subject">
          <h1>you can check cheapters and topics.</h1>
          <p>here the topic releted to this subject but this is not latest cheapter and topics you may consider as a refrel.</p>
          </div>

          <div className="accordian">
            {
              data.map((curr) => {
                const { id} = curr;
                return( <Myaccordian key={id} {...curr}/>)
              })
              }
          </div>
        </div>
      </div>
    </div>
  )
}
