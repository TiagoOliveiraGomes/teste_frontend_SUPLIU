import React from 'react'
import './styles.css'

export default function SearchBar() {
  return (
    <section className='Container-SearchBar'>
        <form>
            <fieldset>
                <legend>Digite uma palavra chave</legend>
                    <input type="search" name='search' id='search' placeholder='Nome da música' maxLength={100}/>
                <button type='submit' title='Se' >Procurar</button>
            </fieldset>
        </form>
    </section>
  )
}
