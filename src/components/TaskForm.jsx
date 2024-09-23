import React from 'react'
import '../styles/taskform.css'
import DropdownSelect from './DropMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useForm , register } from 'react-hook-form'

function TaskForm({ShowForm , SetshowForm} ) {
    const{register,handleSubmit ,formState: {errors}}=useForm()
    const onSubmit=(data)=>{
        console.log(data)
    }
  return (
    ShowForm&&(
    <div className='main position-absolute d-flex justify-content-center align-items-center' 
         style={{zIndex:'100'}}  >
       <div className='popup-layout d-flex flex-column align-items-center'>
        <div className='big-b d-flex justify-content-end'>
            <div className='circle-can  d-flex  align-items-center justify-content-center ' onClick={()=> SetshowForm(false)}>
             <FontAwesomeIcon icon={faXmark} />
              </div>
        </div>
        <p className='create'>
            create your task
        </p>
        <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit(onSubmit)} >
            <p>
                task title
                </p>
            <input placeholder='title..'
             {...register('tasktitle' ,{
                required:'task title is required',
                maxLength:{value:10 , message: 'Task title cannot exceed 10 characters'},
                minLength:{value:5 , message:  'Task title cannot exceed 5 characters' }

             })} />
             {errors.tasktitle &&
                 <span className='text-danger'>
                    {errors.tasktitle.message}
                 </span>

                }
           <p>
                your task category
                </p>
           <DropdownSelect register={register}
                           errors={errors} />
           <p>
            Daed Line Date
           </p>
            <input type='date' {...register('deadline',
                {required:'dead line is required'

                })}  />
                {errors.deadline&&
                <span className='text-danger'>
                {errors.deadline.message}
                </span>
                }
            <div className='btns d-flex flex-row justify-content-center'>
            <button type='submit'>
                Add Task
            </button>
            <button onClick={()=>SetshowForm(false)}>
                Cancel
            </button>
            </div>
        </form>
       </div>
        </div>
  )
)}

export default TaskForm