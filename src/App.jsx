import { useState } from "react";

import "./App.css";
import Input from "./Components/Input";
import Output from "./Components/Output";
import { motion } from "framer-motion";
import Cruzeta from "./Components/Cruzeta";
import Circulo from "./Components/Circulo";
import Botonera from "./Components/Botonera";
import "./index.css";
function App() {
  const [resultado, setResultado] = useState("");

  return (
    <>
      <div className="fondo">
        <div className="left">
          <Cruzeta></Cruzeta>
          <Input resultado={setResultado} ></Input>
        </div>

        <div id="trapecio">
          <div id="pantalla"><Output resultado={resultado}></Output></div>
          <h2 id="Name">GAME BOY Advance</h2>
        </div>


        <div className="rigth">
          <Botonera></Botonera>
        </div>
      </div>
    </>
  );
}

export default App;
