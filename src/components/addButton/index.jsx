import React, { useContext } from 'react'
import { IsModalOpenContext } from '../../contexts/modalOpen'
import './styles.css'

export function AddButton(props) {
  const contextModal = useContext(IsModalOpenContext)
  const {setIsModalOpen, setType} = contextModal
  return (
    <button className='Container-AddButton' onClick={()=>{
      setType('album') 
      setIsModalOpen(true)
    }}>
        + Adicionar Album
    </button>
  )
}
