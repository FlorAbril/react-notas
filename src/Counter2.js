import React, {useState} from 'react';
import {Texto} from './Texto'

export function Counter({valorInicial}){
    const [cont, setCont] = useState(valorInicial)
    return (
        <>
        <Texto texto={cont}/>
        <button onClick = {()=>{setCont(cont + 1)}}>+</button>
        <button onClick = {()=>{setCont(cont - 1)}}>-</button>
        </>
    )
}