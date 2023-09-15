import React from 'react'
import { useState } from 'react'
import { edp } from '../../components/accordian/accodata'
import Myaccordian from '../../components/accordian/Myaccordian'
export default function FME({name,topics}) {
  const [data,Setdata] = useState(edp);
  return (
    <div>
       <div className="fme" id='Fme'>

        <div className='subject_section-title'>
               <div className="subject_section-title-sub">
              <h1>Engineering Drawing and Practice</h1>
              <p>Engineering graphics is an important subject of engineering which provides students an opportunity to enhance their capability of imagination and lateral thinking. The following are the objectives of this course: To understand the drawing importance in engineering.</p>
              </div>
            </div>
{/*
https://drive.google.com/file/d/1K5tRDTWxpaIYGi-oZSmKkDzOQAitZDTl/view?usp=drive_link
un
https://drive.google.com/drive/folders/1f6iHhsvkhC24ICOax_dMBwINKJ5GNLI7?usp=drive_link
un
*/}

<div className="material_container">
          <div className="material_container-1">
            <li className="card">
            <div>
              <h3 className="card-title">Question-Bank- of EDP</h3>
              <div className="card-content">
              <p>here all cheapters are covered in this question bank.make sure that this question are only for practice. </p>
              </div>
            </div>
            <div className="card-link-wrapper">
            <a href="https://drive.google.com/file/d/1K5tRDTWxpaIYGi-oZSmKkDzOQAitZDTl/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
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
              {/* <a href="https://drive.google.com/file/d/1eKTU8C9jcGo6sciF2AoCfQtkueHuWD_l/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a> */}
              <p>currently unavailable</p>
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
             
              <a href="https://drive.google.com/drive/folders/1f6iHhsvkhC24ICOax_dMBwINKJ5GNLI7?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
              
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
            {/* <a href="https://drive.google.com/file/d/13RZsa3yca0Zdb2dtz44eaH8kmcJjoBx8/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a> */}
            <p>currently unavailable</p>
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

