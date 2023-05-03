import { useState, useEffect } from "react";
import CampoTexto from "../Campotexto/Campotexto";

const Input = (props) => {
  const [palabra, setPalabra] = useState("");
  const manejarEnvio = (e) => {
    e.preventDefault();
  };
  useEffect(
    (e) => {
      props.resultado(palabra);
    },
    [palabra]
  );

  return (
    <form onSubmit={manejarEnvio}>
      <CampoTexto valor={palabra} actualizarValor={setPalabra}></CampoTexto>
    </form>
  );
};

export default Input;
