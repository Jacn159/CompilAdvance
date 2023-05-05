import { useState, useEffect } from "react";

import "./App.css";
import Input from "./Components/Input";
import Output from "./Components/Output";
import { motion } from "framer-motion";
import Cruzeta from "./Components/Cruzeta";
import Circulo from "./Components/Circulo";
import Botonera from "./Components/Botonera";
import "./index.css";
import Card from "./Components/Card";
function App() {
  const [resultado, setResultado] = useState("");
  const [mostrar, setMostrar] = useState("");
  const [prendido, setPrendido] = useState(false);
  const [mostrarCards, setMostrarCards] = useState(false);
  const [loading, setLoading] = useState(false);
  const [borrar, setBorrar] = useState(true);
  const [cargando, setCargando] = useState(true);
  const [integrante, setIntegrante] = useState([]);
  useEffect(() => {
    if (prendido) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [prendido]);

  const variants = {
    prendido: {
      background: "#88dc65",
      scale: 1.2,
    },
    apagado: {
      background: "#444",
      boxShadow: "0px 0px 4px #000",
    },
    Onpantalla: {
      background: "#A7EFFB",
    },
    OffPantalla: {
      background: "#4446",
    },
  };
  const colors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#8b00ff",
  ];
  return (
    <>
      <motion.div
        className="fondo"
        animate={{ rotate: 360 }}
        transition={{ type: "spring", duration: 5 }}
      >
        <div className="left">
          <Cruzeta
            actualizarIntegrante={setIntegrante}
            setcargando={setCargando}
          ></Cruzeta>
          <Input
            resultado={setResultado}
            cards={setMostrarCards}
            valorCards={mostrarCards}
            prendido={prendido}
            borrar={borrar}
            setBorrar={setBorrar}
          ></Input>
        </div>

        <div id="trapecio">
          <motion.div
            id="pantalla"
            animate={prendido ? "Onpantalla" : "OffPantalla"}
            variants={variants}
            transition={{ duration: 1 }}
          >
            {prendido && (
              <>
                {loading ? (
                  <motion.div
                    className="cargando"
                    initial={{ opacity: 0.5, background: "#fff" }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    {" "}
                    <motion.p>
                      {"GAME BOY".split("").map((char, index) => (
                        <motion.span
                          key={index}
                          initial={{
                            color: colors[(index + 1) % colors.length],
                            fontSize: "4vh",
                          }}
                          animate={{
                            color: "#4b0082",
                            transition: { duration: 3 },
                            fontSize: "5vh",
                            marginLeft: 9,
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.p>
                  </motion.div>
                ) : mostrarCards ? (
                  <Card
                    integrante={integrante}
                    cargando={cargando}
                    setcargando={setCargando}
                  />
                ) : (
                  <Output mostrar={mostrar} />
                )}
              </>
            )}
          </motion.div>
          <h2 id="Name">GAME BOY Advance</h2>
        </div>

        <div className="rigth">
          <motion.span
            className="power"
            animate={prendido ? "prendido" : "apagado"}
            variants={variants}
            onClick={() => setPrendido(!prendido)}
            transition={{ duration: 0.5 }}
          ></motion.span>
          <Botonera
            resultado={resultado}
            mostrar={setMostrar}
            reinicio={prendido ? "2" : ""}
            borrar={setBorrar}
          ></Botonera>
        </div>
      </motion.div>
    </>
  );
}

export default App;
