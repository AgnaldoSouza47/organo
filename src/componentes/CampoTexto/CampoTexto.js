//CAMPO DE TEXTO .JS
import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`
   
   // let valor = ''
   
    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
        

    }
    return (
        <div className="campo-texto">
            <label>{props.label} </label>
            <input value = {props.valor}onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />


        </div>

    )

}
export default CampoTexto
