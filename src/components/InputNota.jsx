import React, { useContext } from 'react'
import { useState } from 'react'
import BotonIcon from './BotonIcon'
import { ACTIONS } from '../notasReducer'
import NotasContext from '../contexts/NotasContext'


export default function InputNota(){
  const [detail, setDetail] = useState('')
  const [escribiendo, setEscribiendo] = useState(false)

  const [,dispatch]= useContext(NotasContext)
 
 
  const crearNota = (detail) => {
    const id = Math.floor(Math.random()*Number.MAX_SAFE_INTEGER) 
    const nuevaNota = {id,detail}
    dispatch({ type:ACTIONS.crear, payload:nuevaNota })
  }

  const handleSubmit = () =>{
    crearNota(detail)
    setEscribiendo(false)
    setDetail('')
  }

  return (
    <>
      {escribiendo ? 
          <li>
            <textarea value={detail} 
              onChange={(e) => {setDetail(e.target.value)}} 
              rows="5" placeholder='Escribe una nota...' required
            />

            <div className='div-btn'>
              <button onClick={handleSubmit}>Guardar</button>
              <button 
                onClick={()=>{
                  setDetail('')
                  setEscribiendo(false)}}>
                Cancelar
              </button>
            </div>
          </li>
        :
          <div className='nueva-nota'
            onClick={()=>setEscribiendo(true)}>

            <BotonIcon tipo='añadir' width='1.5em' />
            <label style={{'verticalAlign': 'top'}}> Añadir nota</label>

          </div>
        
      
      }
    
    </>
  )
}