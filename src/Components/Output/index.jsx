import Mostrar from "../Logic/Logic"

const Output  = (props)=>{
    const verificar = ()=>{
        if (!props.resultado=="")
        return Mostrar(props.resultado);
    }
    

    return <div><h1>{verificar()}</h1></div>
} 
export default Output;