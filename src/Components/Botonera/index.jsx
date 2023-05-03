import "./Botonera.css";
import Circulo from "../Circulo";
import Mostrar from "../Logic/Logic";
const Botonera = (props) => {
  const verificar = () => {
    if (!props.resultado == "") {
      props.mostrar(Mostrar(props.resultado));
      console.log("hola estoy en botonera");
    }
  };
  const borrar = () => {
    props.mostrar("")
  };

  return (
    <div className="botonera">
      <Circulo mostrar={verificar}></Circulo>
      <Circulo mostrar={borrar}></Circulo>
    </div>
  );
};

export default Botonera;
