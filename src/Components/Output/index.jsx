import { motion } from "framer-motion";
import "./Output.css";

const Output = (props) => {
  const fondo = "/img/fondo.gif";
  const variants = {
    animo: {
      transition: { duration: 2 },
      scale: 0.8,
      color: "#000",
      y: 135,
      opacity: 1,
      fontFamily: "Common Pixel",
    },
    statico: {
      opacity: 1,
    },
    si: {
      color: "#fff",
    },
    no: {
      color: "#000",
      fontFamily: "Common Pixel",
    },
  };

  const mostrarTexto = props.mostrar !== "";

  return (
    <motion.div
      className="pantalla"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="titulo"
        animate={!props.mostrar ? "si" : "no"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        {!props.mostrar ? "BIENVENIDO A NUESTRO AUTOMATA" : "RESULTADO"}
      </motion.h1>

      <motion.h1
        className="resultado"
        animate={mostrarTexto ? "animo" : "statico"}
        variants={variants}
      >
        {mostrarTexto ? props.mostrar : <img className="diagrama" src="/img/diagrama.png"></img>}
      </motion.h1>
    </motion.div>
  );
};

export default Output;
