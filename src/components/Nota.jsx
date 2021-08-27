import React, { useContext, useState } from "react";
import NotasContext from "../contexts/NotasContext";
import { ACTIONS } from "../notasReducer";
import BotonIcon from "./BotonIcon";
import EditNota from "./EditNota";



export default function Nota({nota}){
  const [editandoNota, setEditandoNota] = useState(false)
  const {detail,id} = nota
  const [notas, dispatch] = useContext(NotasContext)


  const handleBorrar = () =>{
    dispatch({ type:ACTIONS.borrar, payload:id })
    localStorage.removeItem(id)
  }

  const filteredDetail = detail.split('\n')

  return (
    <>
      {editandoNota ? 
        <li>
          <EditNota dispatch={dispatch} ACTIONS={ACTIONS} notas={notas}
            setEditandoNota={setEditandoNota} nota={nota}/> 
        </li> 
        : 
        <li key={id}>
          <p>{ filteredDetail.map((l) => <>{l} <br></br> </>) }</p>

          <div className='div-icons'>
            <div 
              onClick={()=>handleBorrar()}>
              <BotonIcon tipo='borrar' width='1.5em' />
            </div>

            <div onClick={()=>setEditandoNota(!editandoNota)}>
              <BotonIcon tipo='editar' width='1.5em' />
            </div>
          </div>

        </li>
      }
    </>       
  )
}