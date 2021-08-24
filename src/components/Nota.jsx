import React, { useState } from "react";
import BotonIcon from "./BotonIcon";
import EditNota from "./EditNota";


export default function Nota({notas,detail,id,setNotas}){
  const [editandoNota, setEditandoNota] = useState(false)
  const handleBorrar = () =>{
    const filteredNotas = notas.filter(nota => nota.id !== id)
    setNotas(()=>[...filteredNotas])
    localStorage.removeItem(id)
  }
  return (
    <>
      {editandoNota ? 
        <li>
          <EditNota notas={notas} setNotas={setNotas} setEditandoNota={setEditandoNota} nota={{detail,id}}/> 
        </li> 
        : 
        <li key={id}>
          <p>{detail}</p>
          <div className='div-btn'>
            <div onClick={handleBorrar}>
              <BotonIcon tipo='borrar' width='1.5em' height='auto'/>
            </div>
            <div onClick={()=>setEditandoNota(!editandoNota)}>
              <BotonIcon tipo='editar' width='1.5em' height='auto'/>
            </div>
          </div>
        </li>
      }
    </>       
  )
}