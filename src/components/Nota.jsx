import React, { useState } from "react";
import { ACTIONS } from "../notasReducer";
import BotonIcon from "./BotonIcon";
import EditNota from "./EditNota";



export default function Nota({notas,nota,dispatch}){
  const [editandoNota, setEditandoNota] = useState(false)
  const {detail,id} = nota

  const handleBorrar = () =>{
    dispatch({ type:ACTIONS.borrar, payload:id })
    localStorage.removeItem(id)
  }

  return (
    <>
      {editandoNota ? 
        <li>
          <EditNota dispatch={dispatch} ACTIONS={ACTIONS} notas={notas}
            setEditandoNota={setEditandoNota} nota={nota}/> 
        </li> 
        : 
        <li key={id}>
          <p>{detail}</p>

          <div className='div-btn'>
            <div 
              onClick={()=>handleBorrar()}>
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