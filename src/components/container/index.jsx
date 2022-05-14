import React from 'react'
import { AddButton } from '../addButton'
import { ModalToPost } from '../modalToPost'
import ContainerContent from './containerContent'
import { HeaderContainer } from './containerHeader'
import './styles.css'

export function Container() {
  return (
    <div className='Container'>
      <HeaderContainer />
      <ContainerContent />
      <AddButton />
      <ModalToPost type={"album"} />
    </div>
  )
}
