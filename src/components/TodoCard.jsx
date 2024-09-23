import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
 import TaskForm from './TaskForm';
import '../styles/todocard.css'


function TodoCard() {
    const[ShowForm,SetshowForm]=useState(false);
  return (
    <>
    <div className='d-flex flex-row task-layout'
        style={{zIndex:'3'}} >
        <Card style={{
            
            width: '259px',
            height:'245px',
            backgroundColor:'black'

        }}  >
            <Card.Body>
                <Card.Title style={{
                    color:'white',
                    marginBottom:'12px'
                }}>
                    card title
                </Card.Title>
                <Card.Text style={{
                    color:'white'
                }}>
                    text info
                    asfsffsfdfdsfdsdsfds
                    <div style={{
                        marginTop:'13px'
                    }} className='d-flex justify-content-end'>
                        <b>
                            todo date
                        </b>
                    </div>
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className='d-flex flex-row justify-content-between'>
                <div onClick={() => SetshowForm(true)}>
                <FontAwesomeIcon style={{
                    color:'white',
                    cursor:'pointer'
                }} icon={faPenToSquare} />
                </div>
                <div>
                <FontAwesomeIcon style={{
                    color:'white',
                    cursor:'pointer'
                }} icon={faTrash} />
                </div>
            </Card.Footer>
        </Card>
       
    </div>
    <TaskForm ShowForm={ShowForm} 
              SetshowForm={SetshowForm}
          />
    </>
  )
}

export default TodoCard