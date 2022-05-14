import React from 'react'
import './styles.css'

export function ModalToPost(props) {
    const {type} = props

    function verifyFormType (props){
        if(type==="album"){
            return(
                <form className='Container-ModalToPost' action="">
                    <button className='btn_close'>X</button>
                        <h1 className='title'>Cadastro um novo álbum</h1>
                    <fieldset>
                        <legend>Nome</legend>
                        <input type="text" />
                    </fieldset>
                    <fieldset>
                        <legend>Ano</legend>
                        <input type="text" />
                    </fieldset>
                    <button>Comfirmar</button>
                </form>
            )
        }
    }

  return (
    <div>
        {verifyFormType()}
    </div>
  )
}
