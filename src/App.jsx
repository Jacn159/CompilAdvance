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
  const [mostrar, setMostrar] = useState("");
  return (
    <>
      <motion.div
        className="fondo"
        // transition={{duration:5}}
        // animate={{
        //   scale: [0.2, 0.4, 0.6, 0.4, 1],
        //   rotate: [0, 0, 270, 270, 0],
        //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        // }}
        animate={{ rotate: 360 }}
        transition={{ type: "spring", duration: 5 }}
      >
        <div className="left">
          <Cruzeta></Cruzeta>
          <Input resultado={setResultado}></Input>
        </div>

        <div id="trapecio">
          <div id="pantalla">
            <Output mostrar={mostrar}></Output>
          </div>
          <h2 id="Name">GAME BOY Advance</h2>
        </div>

        <div className="rigth">
          <Botonera resultado={resultado} mostrar={setMostrar}></Botonera>
        </div>
      </motion.div>
    </>
  );
}

export default App;
