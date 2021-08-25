import React, { useEffect, useReducer } from "react";
import "./App.css";
import Nota from "./components/Nota";
import InputNota from "./components/InputNota";
import {reducer, initialState} from './notasReducer'


function App() {
  const[notas,dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
    localStorage.setItem('notas',JSON.stringify(notas))
  },[notas])

  
  return (
    <div className="App">
        <ul>
          <InputNota dispatch={dispatch}/>  
          { notas.length > 0 ?  
              notas.map(({id,detail}) => 
                <Nota 
                  dispatch ={dispatch}
                  notas={notas} nota={{detail,id}}  key={id}>
                </Nota>
              )  
            : <label>No hay notas</label>
          }

        </ul>
    </div>
  );
}
export default App;
