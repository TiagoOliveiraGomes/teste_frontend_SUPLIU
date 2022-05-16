import React from 'react'
import './styles.css'

export function AddButton(props) {
  const {isModalOpen, setIsModalOpen} = props
  return (
    <button className='Container-AddButton' onClick={()=>setIsModalOpen(!isModalOpen)}>
        + Adicionar Album
    </button>
  )
}
