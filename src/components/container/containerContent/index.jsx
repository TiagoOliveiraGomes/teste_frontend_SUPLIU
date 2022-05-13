import React, {useState} from 'react'
import './styles.css'
import SearchBar from '../../searchBar'
import { AlbumList } from '../../albumList'

export default function ContainerContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pressSearchButton, setPressSearchButton] = useState(false)
  return (
    <div className='ContainerContent'>
        <SearchBar pressSearchButton={pressSearchButton} setPressSearchButton={setPressSearchButton} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <AlbumList pressSearchButton={pressSearchButton} searchTerm={searchTerm} />
    </div>
  )
}
