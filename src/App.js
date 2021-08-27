import React, { useContext } from "react";
import "./App.css";
import Nota from "./components/Nota";
import InputNota from "./components/InputNota";
import NotasContext from "./contexts/NotasContext";


function App() {
  const {notas} = useContext(NotasContext)
  
  // useEffect(()=>{
  //   localStorage.setItem('notas',JSON.stringify(notas))
  // },[notas])

  return (
    <div className="App">
      <ul>
        <InputNota />  
        { notas.length > 0 
          ? notas.map(({id,detail}) => 
              <Nota 
               nota={{detail,id}}  key={id}>
              </Nota>
            )  
          : <label>No hay notas</label>
        }
      </ul>
    </div>
  );
}
export default App;
