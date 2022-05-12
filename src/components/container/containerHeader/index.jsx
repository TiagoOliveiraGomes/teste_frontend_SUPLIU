import React from 'react'
import './styles.css'
import Logo from '../../../assets/images/logo.png'

export function HeaderContainer() {
  return (
    <div className='HeaderContainer'>
        <img src={Logo} alt="Imagem da logo" />
        <h1 >Discografia</h1>
    </div>
  )
}
