import React, { useState } from 'react'
import FME from './FME'
import BEE from './BEE'
import EP from './EP'
import EM_I from './EM_I'
import ETC_I from './ETC_I'
import Work_Shop from './Work_Shop'
import './All.css'
import { allsubjects } from './Allsubject'


export default function All() {
  const [sub,setsub] = useState(allsubjects)
  return (
    <div className='All'>
      <div className="all_title">
        <h1>1st Semester (2023-24):</h1>
        <p><h3>This semester introduces you to a diverse range of subjects, <br/>each contributing to your foundational knowledge. The subjects include:</h3></p>
        
      </div>



      {/* {
      sub.map((ite) =>{
        return (
        <>
        </>
        )
      })
     } */}
   
    </div>
  )
}
