import { useState } from "react";
import CampoTexto from "../Campotexto/Campotexto"

const Input = (props)=>{
    const manejarEnvio = (e) =>{
        e.preventDefault();
        let datosAEnviar = palabra;
        props.resultado(datosAEnviar)
    }
    const [palabra, setPalabra]= useState("")

    return <form onSubmit={manejarEnvio}>
        <CampoTexto valor={palabra} actualizarValor={setPalabra}></CampoTexto>
        {/* <button> Hola</button> */}
    </form>
}
export default Input