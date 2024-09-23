import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TaskForm from './TaskForm'
import '../styles/addtask.css'
import { useForm } from 'react-hook-form';

function AddTask({AddTask}) {
  const[ShowForm,SetshowForm]=useState(false);
  const onSubmit = (data) => {
    AddTask(data); // Call the addTask function passed from the Homepage
  };
  return (
    <>
    <div className='d-flex align-items-center justify-content-center po'  >
      <taskbtn className='d-flex align-items-center'>
          <div className='addbtn d-flex justify-content-center align-items-center'onClick={() => SetshowForm(true)} >
             <FontAwesomeIcon icon={faPlus}   />
          </div>
              <p>
                Add Task
              </p>
      </taskbtn>
        
    </div>
    <TaskForm ShowForm={ShowForm} 
              SetshowForm={SetshowForm}
          />
    </>
  )
}

export default AddTask