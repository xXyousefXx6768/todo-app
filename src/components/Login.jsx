
import React from 'react'
import { useState } from 'react';
import'../index.css'
import  "bootstrap/dist/css/bootstrap.min.css";
import '../styles/login.css'
import useAuthContext from '../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGooglePlusG} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'bootstrap';
import { useForm, register} from 'react-hook-form';



function Login() {
  const {login,error}=useAuthContext()

  const{register,handleSubmit,formState:{errors},watch}=useForm()
  
  const onSubmit= async(data)=>{
    console.log(data)
   await login(data)
}

  return (
  
    <div className='d-flex flex-column first' >

        <maintitle>
            <h5>CompanyName</h5>
        </maintitle>
       <section className='d-flex flex-column '>
               <titlename className='d-flex flex-column align-items-center'>
                     <h1>
                       log in to Account
                        </h1>
                      </titlename>
                      <sec className='d-flex flex-column align-items-center'>
                          
                      <form  className='formB d-flex flex-column'    onSubmit={handleSubmit(onSubmit)}  >
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



                                   <div class="container two">
                                     <input type="password"
                                      id="name"
                                       autocomplete="off"
                                        placeholder=""
                                        className="form-input"
                                        {...register('password' ,{
                                          required:'passward is required',
                                          maxLength:{value:12 , message: 'passward cannot exceed 12 characters'},
                                          minLength:{value:5 , message:  'passward cannot exceed 8 characters' }
                          
                                       })} 
                                        
                                        
                                        />

                                        



                                         <label for="name">Password</label>

                                       

                                                </div>

                                                {errors.passward&&
                                          <div className='d-flex align-self-center' style={{
                                       marginBottom:'8px'
                                 }}  >
                                <span className='text-danger'>
                                           {errors.passward.message}
                                                </span>
                                                    </div>
                                              }



                                            
                                                                  <div className='last d-flex justify-content-center'>
                                                                         <button>
                                                                          submit
                                                                         </button>
                                                                  </div>
                              </form>
                      </sec>
        </section>
                 </div>
   
  )
}



export default Login;
