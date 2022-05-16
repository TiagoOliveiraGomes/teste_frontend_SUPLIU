import React from 'react'
import './styles.css'

export function CloseButton(props) {
    const {setIsModalOpen} = props
  return (
    <button type='button' className='btn_close' onClick={()=>props.setIsModalOpen(false)}>X</button>
  )
}
