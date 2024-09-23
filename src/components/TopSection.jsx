import React, { useState } from 'react'
import '../styles/topSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import uimge from '../assets/user.png'

function TopSection() {
  
  const [img,setimg]=useState(uimge);
  const [user , setuser]=useState('username');
 
  return (
    <div className='d-flex flex-row box  '>
      <div className='d-flex flex-row align-items-center'>
       <h1 className='ve'>
        <span>
          Task
        </span>
        Flow
       </h1>
       </div>
          <div className='d-flex  justify-content-evenly k1'>
            <circleuser className='d-flex flex-row align-items-center flex-wrap'>
                      
                  <div className='d-flex flex-row'>
                 <img src={img}/>
                 </div>
                 <p className='username'>
                  {user}
                 </p>
                 </circleuser>
                 <logout className='d-flex align-items-center '>
                 <FontAwesomeIcon icon={faRightFromBracket} />
                 </logout>
           
          </div>
    </div>
  )
}

export default TopSection