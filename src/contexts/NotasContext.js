import React , {createContext, useEffect, useReducer} from 'react'
import { initialState, reducer } from '../notasReducer'

const NotasContext = createContext()

const NotasProvider = ({children}) => {
    const [notas, dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        localStorage.setItem('notas',JSON.stringify(notas))
    },[notas])

    return (
        <NotasContext.Provider value={{ notas , dispatch }}>
            {children}
        </NotasContext.Provider>
    )
}

export {NotasProvider}
export default NotasContext