import React, { useState } from 'react'
import Signup from '../components/Login'
import Login from '../components/Signup'
import {useNavigate}from'react-router-dom'
import  "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'
import '../styles/layout.css'

function Layout() {
  const[chanege, setChange]=useState(true)
  const navigate= useNavigate()

  function route() {
    setChange(!chanege);
    
  }
  return (
  <main className=' d-flex parent flex-row'>


        {chanege?<Signup/>:<Login/>}

      <second className='d-flex flex-column justify-content-center align-items-center'>
        <welcome className='d-flex flex-column align-items-center ' >
        <h2>
            Hello, Friend!
        </h2>
        </welcome>
              <info className='d-flex flex-column align-items-center'>
                <p>
                  Fill up personal information and  
                </p>
                <span>start journey with us.</span>
              </info>
              <div className='router d-flex justify-content-center'>
              <button onClick={route}>
                {chanege?'login':'Sign up'}
              </button>
              </div>
      </second>
  </main>
  )
}

export default Layout