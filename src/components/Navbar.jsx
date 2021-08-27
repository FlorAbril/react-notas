import React, { useContext, useState } from "react"
import NotasContext from "../contexts/NotasContext"


export default function Navbar () {
    const [text,setText] = useState('')
    const { notas } = useContext(NotasContext)
    let notasBuscadas = []

    const handleSearch = (e,text) =>{
        e.preventDefault()
        notasBuscadas = notas.filter(nota => nota.detail.includes(text))

        console.log(notasBuscadas);
    }

    return (
        <nav>
            <label>ToDo</label>
            <form>
                <input 
                    value={text} onChange={(e)=>setText(e.target.value)}
                    type="search" placeholder='Buscar en mis notas' 
                />
                <button 
                    onClick={(e)=>handleSearch(e,text)}
                    type="submit">Buscar
                </button>
            </form>
        </nav>
    )
}