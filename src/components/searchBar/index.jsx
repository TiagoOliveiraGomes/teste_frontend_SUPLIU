import React from 'react'
import './styles.css'

export default function SearchBar(props) {
  const {setPressSearchButton, pressSearchButton, searchTerm, setSearchTerm} = props

  function searchButtonPressed (event) {
    event.preventDefault()
    setPressSearchButton(!pressSearchButton)

  }
  return (
    <section className='Container-SearchBar'>
        <form>
            <fieldset>
                <legend>Digite uma palavra chave</legend>
                    <input type="search" name='search' id='search' placeholder='Nome da música' maxLength={100} onChange={(e)=> setSearchTerm(e.target.value)}/>
                <button onClick={searchButtonPressed} type='submit' >Procurar</button>
            </fieldset>
        </form>
    </section>
  )
}
