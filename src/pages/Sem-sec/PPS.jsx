import React from 'react'
import { useState } from 'react'
import { pps } from '../../components/accordian/accodata'
import Myaccordian from '../../components/accordian/Myaccordian'
export default function FME({name,topics}) {
  const [data,Setdata] = useState(pps);
  return (
    <div>
       <div className="fme" id='Fme'>

        <div className='subject_section-title'>
               <div className="subject_section-title-sub">
              <h1>Programming for Problem Solving</h1>
              <p>C programming language is a machine-independent programming language that is mainly used to create many types of applications and operating systems such as Windows, and other complicated programs such as the Oracle database, Git, Python interpreter, and game.</p>
              </div>
            </div>
{/*
https://drive.google.com/drive/folders/16ixfL4AtOWURutCyakPipqOR8RCHc1fm?usp=drive_link
un
Yhttps://drive.google.com/drive/folders/169jZPjGC85_Y0dU6zIJQOVFpeOt6ki7c?usp=drive_linkK
https://drive.google.com/file/d/141safVXxoj7FC8eao9cyhJ0LWtAW_2tL/view?usp=drive_link
*/}

<div className="material_container">
          <div className="material_container-1">
            <li className="card">
            <div>
              <h3 className="card-title">Question-Bank- of PPS </h3>
              <div className="card-content">
              <p>here all cheapters are covered in this question bank.make sure that this question are only for practice. </p>
              </div>
            </div>
            <div className="card-link-wrapper">
            <a href="https://drive.google.com/drive/folders/16ixfL4AtOWURutCyakPipqOR8RCHc1fm?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
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
              <p>currently unavailable</p>
              {/* <a href="https://drive.google.com/file/d/1eKTU8C9jcGo6sciF2AoCfQtkueHuWD_l/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a> */}
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
             
              <a href="Yhttps://drive.google.com/drive/folders/169jZPjGC85_Y0dU6zIJQOVFpeOt6ki7c?usp=drive_linkK" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
              
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
            <a href="https://drive.google.com/file/d/141safVXxoj7FC8eao9cyhJ0LWtAW_2tL/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
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

