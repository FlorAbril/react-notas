import React from 'react'
import { useState } from 'react'

export default function EditNota({setEditandoNota,setNotas, notas,nota}){
  const [detail, setDetail] = useState(nota.detail)

  const handleChange = (e) =>{
    setDetail(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const notasCopy = JSON.parse(JSON.stringify(notas))
    const notaAModificar = notasCopy.find(({id}) => nota.id === id)
    notaAModificar.detail = detail
    setNotas(notasCopy)
    setDetail('')
    setEditandoNota(false)
  }

  return (
    <>
      <textarea value={detail} onChange={handleChange} rows="5"></textarea>
      <div className='div-btn'>
        <button onClick={handleSubmit}>Guardar</button>
        <button onClick={()=>setEditandoNota(ant => !ant)}>Cancelar</button>
      </div>
    </>
  )
}