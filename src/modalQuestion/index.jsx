import React, { useContext, useState } from 'react'
import { IsModalOpenContext } from '../contexts/modalOpen'
import { DeleteTrack } from '../utils/DeleteTrack'
import './styles.css'

export function ModalQuestion(props) {
    const { button1, button2, isModalQuestionOpen, setIsModalQuestionOpen, yesOptionInModal} = props
    const contextModal = useContext(IsModalOpenContext)
  const {track_id} = contextModal
  console.log("trackID: ", track_id)
  return (
    <>
        {isModalQuestionOpen&&
        <div className='modalQuestionContainer'>
            <h1 style={{marginTop:"5%"}}>{isModalQuestionOpen}</h1>
            <div className='containButtons'>
                <button onClick={()=>setIsModalQuestionOpen(null)} style={{backgroundColor: "rgb(217, 57, 57)", color:"#fff"}}>{button1}</button>
                <button onClick={()=>DeleteTrack(track_id)} style={{backgroundColor: "#0A95FF", color:"#fff"}}>{button2}</button>
            </div>
        </div>}
    </>
  )
}
