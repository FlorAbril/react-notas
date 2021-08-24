import React from 'react'
import { useState } from 'react'
import BotonIcon from './BotonIcon'



export default function InputNota({setNotas}){
  const [detail, setDetail] = useState('')
  const [editandoNota, setEditandoNota] = useState(false)
  const handleChange = (e) =>{
    setDetail(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const id = Math.floor(Math.random()*Number.MAX_SAFE_INTEGER) 
    setNotas(notas => [{detail, id},...notas])
    setEditandoNota(!editandoNota)
    setDetail('')
  }
  return (
    <>
      {editandoNota ? 
          <li>
            <textarea value={detail} onChange={handleChange} rows="5" placeholder='Escribe una nota...' required></textarea>
            <div className='div-btn'>
              <button onClick={handleSubmit}>Guardar</button>
              <button onClick={()=>setEditandoNota(!editandoNota)}>Cancelar</button>
            </div>
          </li>
        :
          <div className='nueva-nota' onClick={()=>setEditandoNota(!editandoNota)}>
            <BotonIcon tipo='añadir' width='1.5em' height='auto'/>
            <label style={{'vertical-align': 'top'}}> Añadir nota</label>
          </div>
        
      
      }
    
    </>
  )
}