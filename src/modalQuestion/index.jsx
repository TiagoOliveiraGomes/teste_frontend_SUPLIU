import React, { useState } from 'react'
import './styles.css'

export function ModalQuestion(props) {
    const {title, button1, button2} = props
  return (
    <>
        
        {/* // isModalQuestionOpen&& */}
        <div className='modalQuestionContainer'>
            <h1>{title}</h1>
            <div>
                <button>{button1}</button>
                <button>{button2}</button>
            </div>
        </div>
    </>
  )
}
