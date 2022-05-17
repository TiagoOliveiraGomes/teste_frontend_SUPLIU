import React, { createContext, useState} from 'react'

export const IsModalOpenContext = createContext()

export function ModalContextProvider(props) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [type, setType] = useState('album')
    const [album_id, setAlbum_id] = useState('album')
    const [modalParams, setModalParams] = useState({albumName: "", albumYear:""}) 
  return (
    <IsModalOpenContext.Provider value={{isModalOpen, setIsModalOpen, type, setType, album_id, setAlbum_id, modalParams, setModalParams}}>
        {props.children}
    </IsModalOpenContext.Provider>
  )
}
