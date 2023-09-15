import React from 'react'
import './Firstsem.css'
import { useState } from 'react'
import { cheapters } from '../../components/accordian/accodata'
import Myaccordian from '../../components/accordian/Myaccordian'
export default function FME({name,topics}) {
  const [data,Setdata] = useState(cheapters);
  const [show,setshow] = useState(false);
  return (
    <div>
       <div className="fme" id='Fme'>

        <div className='subject_section-title'>
               <div className="subject_section-title-sub">
              <h1>Fundamentals of Mechanical Engineering</h1>
              <p>This comprehensive course covers a wide range of core principles, theories, and practical applications within the field of mechanical engineering.FME covers a broad range of core subjects in mechanical engineering, such as mechanics, thermodynamics, fluid mechanics, materials, manufacturing processes, and control systems. This comprehensive coverage ensures that students gain a holistic understanding of the field. 
                </p>
              </div>
            </div>

        <div className="material_container">
          <div className="material_container-1">
            <li className="card">
            <div>
              <h3 className="card-title">Question-Bank- of FME </h3>
              <div className="card-content">
              <p>here all cheapters are covered in this question bank.make sure that this question are only for practice. </p>
              </div>
            </div>
            <div className="card-link-wrapper">
              <a href="https://drive.google.com/file/d/1cOwZ-LPMY5cIn0zA_ZwhR-jIR2cdKF5r/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
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
              <a href="https://drive.google.com/file/d/1FtOB-5SdYieguoIX98iACklUnTVcL-4U/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
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
             
              <a href="https://drive.google.com/drive/folders/1f9lr8jXzeLKOerNyhFZPQM35jzK1G0x1?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
              
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
          {/*
          <li className="card">
             <div>
               <h3 className="card-title"></h3>
               <div class="card-content">
               <p></p>
               </div>
             </div>
           </li>
          */}
          <div className="accordian">
            {
              data.map((curr) => {
                const { id} = curr;
                return( <Myaccordian key={id} {...curr}/>)
              })
              }
          </div>
          {/* {
            data.map((curr)=>{
              return (
               <div className='card'>
                <div className="cheap-name"><h3>{curr.name}</h3></div>
                <div className="cheap-topic">{curr.topics}</div>
               </div>
              )
            })
          } */}
        </div>


      </div>
    </div>
  )
}
