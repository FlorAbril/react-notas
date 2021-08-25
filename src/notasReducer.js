let notas = JSON.parse(localStorage.getItem('notas'))
if(!notas) notas = []

const initialState = notas

const ACTIONS = {
    borrar: 'borrar',
    editar: 'editar',
    crear:  'crear'
}
  
const reducer = (state,action) =>{
    switch (action.type) {
      case ACTIONS.borrar: {
        const filteredNotas = state.filter(nota => nota.id !== action.payload)
        return  [...filteredNotas]
      }
      case ACTIONS.crear:
        return [action.payload,...state]
      case ACTIONS.editar:
        return [...action.payload]
      default:
        return state
    }
       
      
}

export {reducer, ACTIONS, initialState}