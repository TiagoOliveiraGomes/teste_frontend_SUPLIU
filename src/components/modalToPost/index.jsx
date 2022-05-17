import React, { useContext, useEffect, useState } from 'react'
import { IsModalOpenContext } from '../../contexts/modalOpen'
import { PostAlbums } from '../../utils/PostAlbums'
import { PostTrack } from '../../utils/PostTrack'
import './styles.css'

export function ModalToPost(props) {
    // const {modalParams, setModalParams} = props
    const contextModal = useContext(IsModalOpenContext)
    const {isModalOpen, setIsModalOpen, type, album_id, modalParams, setModalParams} = contextModal

    const [albumName, setAlbumName] = useState('')
    const [albumYear, setAlbumYear] = useState(null)

    const [number, setNumber] = useState(null)
    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState(null)

    const [modalElements, setModalElement] = useState(null)
    
useEffect(()=> {
    // console.log("valor do number: ", number)
    // console.log("valor do title: ", title)
    // console.log("valor do duration: ", duration)
    setModalParams({...modalParams, albumYear, albumName})
    console.log("ModalParams: ", modalParams)
}, [number, title, duration, albumName, albumYear])

    useEffect(()=>{
        if(!isModalOpen){
            setModalElement(null)
        }
        verifyFormType()

    },[isModalOpen])

    const [clicked, setClicked] = useState(false)

    useEffect(()=>{

        clicked==="postAlbum" && PostAlbum()
        clicked==="postTrack" && CallPostTrack()
        setClicked("")
    }, [clicked])
    
    function PostAlbum () {
        // event.preventDefault()
        console.log("na chamada da função name: ", albumName)
        console.log("na chamada da função name: ", albumYear)
        console.log("na chamada da função name: ", modalParams)
        PostAlbums(albumName, albumYear)
    }
    function CallPostTrack () {
        
        console.log("na chamada da função number: ", number)
        console.log("na chamada da função title: ", title)
        console.log("na chamada da função duration: ", duration)
        PostTrack(album_id, number, title, duration)
    }



    function verifyFormType (){
        console.log(album_id)
        let element = null
        if(type==="album"){
                element = (
                <form className='Container-ModalToPost' action="">
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
                    {/* //TODO:post buttons */}
                    <button className='btn-submit' type='button' onClick={()=> {
                        setClicked('postAlbum')
                        // console.log("albumname:", modalParams)
                        // PostAlbum()
                    }}>Confirmar</button>
                </form>)
        }
        else if(type==="track"){
            element=(<form className='Container-ModalToPost' action="">
            <button type='button' className='btn_close' onClick={()=>setIsModalOpen(false)}>X</button>
            <h1 className='title'>Cadastro um novo álbum</h1>
        <fieldset>
            <legend>Número</legend>
            <input type="number" placeholder='Nome do álbum' onChange={event => setNumber(+event.target.value)}/>
        </fieldset>
        <fieldset>
            <legend>Titulo</legend>
            <input type="text" placeholder='Ano do álbum' onChange={event => setTitle(event.target.value)}/>
        </fieldset>
        <fieldset>
            <legend>duration</legend>
            <input type="number" placeholder='Ano do álbum' onChange={event => setDuration(+event.target.value)}/>
        </fieldset>
        <button className='btn-submit' type='button' onClick={()=>{
            setClicked('postTrack')
            // PostTrack({album_id, number, title, duration})
        }}>Confirmar</button>
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

