import React, { useState } from 'react'
import { ModalQuestion } from '../../modalQuestion'
import { AddButton } from '../addButton'
import { ModalToPost } from '../modalToPost'
import ContainerContent from './containerContent'
import { HeaderContainer } from './containerHeader'
import './styles.css'

export function Container() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <div className='Container'>
      <HeaderContainer />
      <ContainerContent />
      <AddButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ModalToPost />
      <ModalQuestion title="ola" button1="não" button2="Sim" />
    </div>
  )
}
