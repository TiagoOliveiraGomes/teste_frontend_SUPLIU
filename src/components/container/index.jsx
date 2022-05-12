import React from 'react'
import ContainerContent from './containerContent'
import { HeaderContainer } from './containerHeader'
import './styles.css'

export function Container() {
  return (
    <div className='Container'>
      <HeaderContainer />
      <ContainerContent />
    </div>
  )
}
