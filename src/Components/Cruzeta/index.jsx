import "./Cruzeta.css";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";
const Cruzeta = (props) => {
  const informacionCard = {
    casma: {
      nombre: "Jose Aldahir Casma Nieto",
      especialidad: "Desarollador Front End",
      imagen: "https://github.com/Jacn159.png",
      github: "Jacn159",
      linkedin: "josecasma",
    },
    canales: {
      nombre: "Jose Luis Santiago Canales Cuellar",
      especialidad: "Desarollador Movile",
      imagen: "https://github.com/HerrSopMod.png",
      github: "Patcher",
      linkedin: "josecanales",
    },
    pachas: {
      nombre: "Fredy Johan Pachas Napa",
      especialidad: "Web GameDeveloper",
      imagen: "https://github.com/FredyPachas.png",
      github: "FredyPachas",
      linkedin: "fredypachas",
    },
    magallanes: {
      nombre: "Jesus Antonio Magallanes Tasayco",
      especialidad: "Desarollador Full Stack",
      imagen: "https://github.com/Jesus1905.png",
      github: "Jesus1905",
      linkedin: "jesusmagallanes",
    },
    cama: {
      nombre: "Piero Alexis Cama Valentin ",
      especialidad: "Desarollador Front End",
      imagen: "https://github.com/ProgramerPA.png",
      github: "ProgramerPA",
      linkedin: "pierocama",
    },
  };
  const [click, setClick] = useState(false);
  const [pachas, setPachas] = useState(false);
  const [cama, setCama] = useState(false);
  const [magallanes, setMagallanes] = useState(false);
  const [canales, setCanales] = useState(false);
  const variants = {
    click: {
      scale: 1.2,
      rotate: 180,
    },
    noclick: {
      scale: 1,
      rotate: 180,
    },
    normi:{
      scale: 1.2,
    },
    nonormi:{
      scale: 1,
    },
    cama:{
      scale: 1.2,
      rotate:270
    },
    nocama:{
      scale: 1,
      rotate:270
    },
    magallanes:{
      scale: 1.2,
      rotate:90
    },
    nomagallanes:{
      scale: 1,
      rotate:90
    }
  };
  const mandar = (atributo) => {
    props.setcargando(true);
    setTimeout(() => {
      props.setcargando(false);
    }, 3000);
    props.actualizarIntegrante(informacionCard[atributo]);
  };

  return (
    <div className="cruzeta">
      <div className="cross">
        <motion.div
          className="top"
          onClick={() => {
            mandar("canales");
            setCanales(!canales);
          }}

          animate={canales ? "click" : "noclick"}
          variants={variants}
        >
          <TbTriangleInvertedFilled size="2.5vh" />
        </motion.div>
        <motion.div
          className="down"
          onClick={() => {
            mandar("pachas");
            setPachas(!pachas);
          }}
          animate={pachas ? "normi" : "nonormi"}
          variants={variants}
        >
          <TbTriangleInvertedFilled size="2.5vh" />
        </motion.div>
        <div
          className="centro"
          onClick={() => {
            mandar("casma");
            setClick(!click);
          }}
        >
          <motion.div
            animate={click ? "click" : "noclick"}
            variants={variants}
          ></motion.div>
        </div>
        <motion.div
          className="izquierda"
          onClick={() => {
            mandar("magallanes");
            setMagallanes(!magallanes);
          }}
          variants={variants}
          animate={magallanes ? "magallanes" : "nomagallanes"}
        >
          <TbTriangleInvertedFilled size="2.5vh" />
        </motion.div>
        <motion.div
          className="derecha"
          onClick={() => {
            mandar("cama");
            setCama(!cama);
          }}
          variants={variants}
          animate={cama ? "cama" : "nocama"}
        >
          <TbTriangleInvertedFilled size="2.5vh" />
        </motion.div>
      </div>
    </div>
  );
};
export default Cruzeta;
