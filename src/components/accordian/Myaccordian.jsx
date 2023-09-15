import React, { useState } from 'react'
import './accordian.css'

const Myaccordian = (props) => {
  const [show,setshow] = useState(false);
  return (
    <div className='myaccordian'>
      <div className="myaccordian-container">
      <div className='acco__top'>
        <h3 className='acco__top-name'>{props.name}</h3>
        <h1 className='acco__top-button' onClick={() => {setshow(!show)}}>{show?"-":"+"}</h1>
      </div>
      <div className="acco__bottom">
        {show && <p className='acco__bottom-p card-contant'>{props.topics}</p>} 
      </div>
      </div>
    </div>
  )
}

export default Myaccordian;
