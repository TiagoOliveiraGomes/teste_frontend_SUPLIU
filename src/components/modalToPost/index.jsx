import React, { useEffect, useState } from 'react'
import { PostAlbums } from '../../utils/PostAlbums'
import { CloseButton } from '../CloseButton'
import './styles.css'

export function ModalToPost(props) {
    const {type, isModalOpen, setIsModalOpen} = props
    const [albumName, setAlbumName] = useState('')
    const [AlbumYear, setAlbumYear] = useState(null)
    const [modalElements, setModalElement] = useState(null)
    

    useEffect(()=>{
        if(!isModalOpen){
            setModalElement(null)
        }
        verifyFormType()
    },[isModalOpen])
    
    function PostAlbum (event) {
        event.preventDefault()
        PostAlbums(albumName, AlbumYear)
    }

    function verifyFormType (){
        let element = null
        if(type==="album"){
                element = (<form className='Container-ModalToPost' action="">
                        {/* <CloseButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
                        <button type='button' className='btn_close' onClick={()=>setIsModalOpen(false)}>X</button>
                        <h1 className='title'>Cadastro um novo álbum</h1>
                    <fieldset>
                        <legend>Nome</legend>
                        <input type="text" placeholder='Nome do álbum' onChange={event => setAlbumName(event.target.value)}/>
                    </fieldset>
                    <fieldset>
                        <legend>Ano</legend>
                        <input type="number" placeholder='Ano do álbum' onChange={event => setAlbumYear(+event.target.value)}/>
                    </fieldset>
                    <button type='submit' onClick={(event)=>PostAlbum(event)}>Confirmar</button>
                </form>)
        }
        if(isModalOpen){
            setModalElement(element)
        }else {
            setModalElement(null)
        }
    }

  return (
    <div>
        {modalElements}
    </div>
  )
}

