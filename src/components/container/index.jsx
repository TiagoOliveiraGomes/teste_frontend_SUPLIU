import React, { useState } from 'react'
import { ModalQuestion } from '../../modalQuestion'
import { AddButton } from '../addButton'
import { ModalToPost } from '../modalToPost'
import ContainerContent from './containerContent'
import { HeaderContainer } from './containerHeader'
import './styles.css'

export function Container() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalQuestionOpen, setIsModalQuestionOpen] = useState(false)
  const [yesOptionInModal, setYesOptionInModal] = useState(false)

  
  return (
    <div className='Container'>
      <HeaderContainer />
      <ContainerContent setIsModalQuestionOpen={setIsModalQuestionOpen} setYesOptionInModal={setYesOptionInModal} />
      <AddButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ModalToPost />
      <ModalQuestion yesOptionInModal={yesOptionInModal} button1="não" button2="Sim" isModalQuestionOpen={isModalQuestionOpen} setIsModalQuestionOpen={setIsModalQuestionOpen}/>
    </div>
  )
}
