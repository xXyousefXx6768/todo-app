import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import'../index.css'
import  "bootstrap/dist/css/bootstrap.min.css";
import '../styles/signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGooglePlusG} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'bootstrap';
import useAuthContext from '../contexts/AuthContext';
import { useForm, register} from 'react-hook-form';


function Signup() {
  const {signup,error}=useAuthContext()
  const passwordref = useRef({});
  
     
    const{register,handleSubmit,formState:{errors},watch}=useForm()
    const onSubmit= async(data)=>{
      console.log(data)
     await signup(data)
  }
  passwordref.current = watch("password", "");
  return (
    <div className='d-flex flex-column first' >

    <maintitle>
        <h5>CompanyName</h5>
    </maintitle>
   <section className='d-flex flex-column '>
           <titlename className='d-flex flex-column align-items-center'>
                 <h1>
                   signup to Account
                    </h1>
                  </titlename>
                  <sec className='d-flex flex-column align-items-center'>
                     

                  <form className='formB d-flex flex-column' onSubmit={handleSubmit(onSubmit)} >
                    <div className='d-flex justify-content-center'>
                      <p>
                        or use your email account
                      </p>
                    </div>
                 
                       
                    <div class="container  one">

                      
                      <input
                     type="text" 
                     id="name" 
                     autocomplete="off"
                      placeholder=""
                     className="form-input"
                   {...register('username',{
                  required:'the username is requierd',
                  maxLength:{value:10,message:' username cannot exceed 10 characters'},
                  minLength:{value:6 , message:  'username cannot exceed 6 characters' }

                  



 
 })}

  />
   


     <label for="name">name </label>
       </div>
       
       {errors.username&&
       <div className='d-flex align-self-center' style={{
              marginBottom:'8px'
       }}  >
  <span className='text-danger'>
  {errors.username.message}
     </span>
       </div>
 }

                  <div class="container  two">

                      
                      <input
                       type="email" 
                       id="name" 
                       autocomplete="off"
                       placeholder=""
                       className="form-input"
                       {...register('email',{
                        required:'the email is requierd',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address"
                        }
                       })}
                    
                        />
                         


                           <label for="name">Email</label>
                             </div>
                             
                             {errors.email&&
                             <div className='d-flex align-self-center' style={{
                                    marginBottom:'8px'
                             }}  >
                        <span className='text-danger'>
                        {errors.email.message}
                           </span>
                             </div>
                       }
                                <div className="container two">
        <input
          type="password"
          id="password"
          autoComplete="off"
          placeholder=""
          className="form-input"
          {...register('password', {
            required: 'Password is required',
            maxLength: { value: 12, message: 'Password cannot exceed 12 characters' },
            minLength: { value: 5, message: 'Password must be at least 5 characters' }
          })}
        />
        <label htmlFor="password">Password</label>
      </div>
      {errors.password && (
        <div className='d-flex align-self-center' style={{ marginBottom: '8px' }}>
          <span className='text-danger'>{errors.password.message}</span>
        </div>
      )}

      <div className="container two">
        <input
          type="password"
          id="confirmPassword"
          autoComplete="off"
          placeholder=""
          className="form-input"
          {...register('confirmPassword', {
            required: 'You should confirm this password',
            validate: value => value === passwordref.current || 'The passwords do not match'
          })}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
      </div>
      {errors.confirmPassword && (
        <div className='d-flex align-self-center' style={{ marginBottom: '8px' }}>
          <span className='text-danger'>{errors.confirmPassword.message}</span>
        </div>
      )}





                                              
                                                              <div className='last d-flex justify-content-center'>
                                                                     <button type='submit' >
                                                                      submit
                                                                     </button>
                                                              </div>
                          </form>
                  </sec>
    </section>
             </div>
  
  )
}



export default Signup;
