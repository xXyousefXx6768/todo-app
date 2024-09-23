import React from 'react'
import { useState } from 'react';
import '../styles/welcomeuser.css'

function WelcomeUser() {

  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();
  
  // Format the date as dd-mm-yyyy
  const formattedDate = `${day}-${month}-${year}`;
  
  // Get the current day name
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[today.getDay()];
  const[user,setuser]=useState('user');

  return (
    <div className='d-flex flex-column welcome justify-content-center align-items-center'>
        <h3>
            Welcome back , {user}
        </h3>
            <p>
                {currentDay} {formattedDate}
            </p>
    </div>
  )
}

export default WelcomeUser