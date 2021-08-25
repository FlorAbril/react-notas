import React from 'react'
import { useState } from 'react'

export default function EditNota({setEditandoNota,notas,nota,dispatch,ACTIONS}){
  const [detail, setDetail] = useState(nota.detail)
  const notasCopy = JSON.parse(JSON.stringify(notas))
  const notaAModificar = notasCopy.find(({id}) => nota.id === id)

  const handleSubmit = () =>{
    notaAModificar.detail = detail
    dispatch({ type:ACTIONS.editar, payload:notasCopy })
    setEditandoNota(false)
  }

  return (
    <>
      <textarea value={detail} 
        onChange={(e) =>{setDetail(e.target.value)}} rows="5"/>

      <div className='div-btn'>
        <button onClick={handleSubmit}>Guardar</button>
        <button onClick={()=>setEditandoNota(false)}>Cancelar</button>
      </div>
    </>
  )
}