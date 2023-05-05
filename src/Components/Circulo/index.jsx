import { useState } from "react";
import "./Circulo.css";
import { motion } from "framer-motion";
const Circulo = (props) => {

  const clickear = () => {
    props.mostrar();

  };

  const variants = {
    up: {
      backgroundColor: "#333",
      scale: 0.9
    },
    down: {
      backgroundColor: "#999",
    },

  };
  const validar = ()=>{
    if (props.efecto=="2") {
      return variants.down;
    } else if (props.efecto=="1") return variants.up; else return variants.down;
  }
  return (
    <motion.div
      className="circulo "
      onClick={clickear}
      transition={{duration:0.5}}
      variants={variants}
      animate={validar}
    >
      <div className="profundidad"></div>
    </motion.div>
  );
};
export default Circulo;
