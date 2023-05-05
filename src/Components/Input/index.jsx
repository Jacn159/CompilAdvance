import { useState, useEffect } from "react";
import CampoTexto from "../Campotexto/Campotexto";
const Input = (props) => {
  const [palabra, setPalabra] = useState("");

  useEffect(() => {
    if (!props.borrar) {
      setPalabra("");
    } else {
      props.resultado(palabra);
    }
  }, [palabra, props.borrar]);



  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <CampoTexto
        valor={palabra}
        actualizarValor={setPalabra}
        cards={props.cards}
        valorCards={props.valorCards}
        prendido={props.prendido}
        setBorrar={props.setBorrar}
      />
    </form>
  );
};

export default Input;
