import "./Botonera.css";
import Circulo from "../Circulo";
import Mostrar from "../Logic/Logic";
import { useState, useEffect } from "react";

const Botonera = (props) => {
  const [efecto, setEfecto] = useState("2");
  useEffect(() => {
    if (props.reinicio == "2") {
      setEfecto("2");
    }
  }, [props.reinicio]);
  const verificar = () => {
    props.borrar(true);

    if (efecto == "0" || efecto == "2") setEfecto("1");

    if (!props.resultado == "") {
      props.mostrar(Mostrar(props.resultado));
      console.log("hola estoy en botonera");
    }
  };

  const borrar = () => {
    props.borrar(false);
    setTimeout(() => {
      props.borrar(true);
    }, 1000);

    props.mostrar("");

    if (efecto == "1" || efecto == "2") setEfecto("0");
  };

  let bul = () => {
    if (efecto != "2") return efecto == "1" ? "0" : "1";
    else return "2";
  };

  return (
    <div className="botonera">
      <Circulo mostrar={verificar} efecto={efecto} />
      <Circulo mostrar={borrar} efecto={bul()} />
    </div>
  );
};

export default Botonera;
