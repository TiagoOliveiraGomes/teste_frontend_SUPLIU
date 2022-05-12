import React from 'react'
import './styles.css'
import SearchBar from '../../searchBar'
import { AlbumList } from '../../albumList'

export default function ContainerContent() {
  return (
    <div className='ContainerContent'>
        <SearchBar />
        <AlbumList />
    </div>
  )
}
