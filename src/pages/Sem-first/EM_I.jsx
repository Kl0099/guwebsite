import React from 'react'
import './Firstsem.css'
import { useState } from 'react'
import { emchapters } from '../../components/accordian/accodata'
import Myaccordian from '../../components/accordian/Myaccordian'
export default function EM_I() {
  const [data,Setdata] = useState(emchapters);
  const [show,setshow] = useState(false);
  return (
    
    <div>
        <div className='subject_section-title'>
               <div className="subject_section-title-sub">
              <h1> Engineering Mathamatics-I.</h1>
              <p>The course consists of topics in differential calculus,integral calculus, linear algebra and differential equations with applications, Taylor's and Maclaurin's Theorems.
                </p>
              </div>
        </div>
        {/*
https://drive.google.com/file/d/1q-MlKKN3b6zEvEqy-xXnIzNIps7z5fBA/view?usp=drive_link
un
https://drive.google.com/drive/folders/1ajy5qw205PYWa3gLCJPywz1Lt1KNCrWQ?usp=drive_link
        */}
  
         <div className="material_container">
          <div className="material_container-1">
            <li className="card">
            <div>
              <h3 className="card-title">Question-Bank- of EM-1</h3>
              <div className="card-content">
              <p>here all cheapters are covered in this question bank.make sure that this question are only for practice. </p>
              </div>
            </div>
            <div className="card-link-wrapper">
            <a href="https://drive.google.com/file/d/1q-MlKKN3b6zEvEqy-xXnIzNIps7z5fBA/view?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
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
             
              <a href="https://drive.google.com/drive/folders/1ajy5qw205PYWa3gLCJPywz1Lt1KNCrWQ?usp=drive_link" className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
              
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
  )
}
