import "./Card.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Card = (props) => {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.setcargando(true);
    setTimeout(() => {
      props.setcargando(false);
    }, 3000);
  }, []);
  const fondo = "/img/seleccionaIntegrante.gif";
  const kirby = "/img/fondoCard.gif";
  return (
    <>
      {props.cargando ? (
        <div className="carga">
          <motion.img
            src="/img/carga.gif"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              transition: { duration: 3 },
              scale: [1.1, 0.7, 1, 0.8],
              opacity: 1,
            }}
          />
        </div>
      ) : props.integrante.nombre != null ? (
        <motion.div
          className="kirby"
          initial={{ background: "#fff", opacity: 0 }}
          animate={{
            backgroundImage: `url(${kirby})`,
            transition: { duration: 1 },
            opacity: 1,
          }}
        >
          <motion.div
            className="card"
            initial={{ opacity: 0 }}
            animate={{
              background: "#0009",
              color: "white",
              transition: { duration: 1.8 },
              scale: 0.9,
              borderRadius: "15px",
              width: "70%",
              margin: "auto",
              opacity: 1,
            }}
          >
            <h3>{props.integrante.nombre}</h3>
            <img src={props.integrante.imagen} alt="" />
            <p>{props.integrante.especialidad}</p>
            <div class="redes">
              <ul style={{ fontSize: "1.8vh" }}>
                <li>
                  <AiFillGithub />
                  <a Target="_blank">{props.integrante.github}</a>
                </li>
                <li>
                  <AiFillLinkedin />
                  <a Target="_blank"> {props.integrante.linkedin}</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="selecciona"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.95,
            backgroundImage: `url(${fondo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            transition: { duration: 2 },
          }}
        >
          <div className="dialogo">
            <p>Selecciona un integrante...</p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Card;
