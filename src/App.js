import React, { useEffect, useState } from "react";
import "./App.css";
import Nota from "./components/Nota";
import InputNota from "./components/InputNota";

function App() {
  const [notas, setNotas] = useState(JSON.parse(localStorage.getItem('notas')) )
  
  useEffect(()=>{
    localStorage.setItem('notas',JSON.stringify(notas))
   
  },[notas])

  
  return (
    <div className="App">
        <ul>
          <InputNota setNotas={setNotas}/>  
          { notas.length > 0 ?  notas.map(nota => <Nota notas={notas} detail={nota.detail} id={nota.id} setNotas={setNotas} key={nota.id}></Nota>)  
            : <label>No hay notas</label>
          }

        </ul>
    </div>
  );
}
export default App;
