import "./Circulo.css";
import { motion } from "framer-motion";
const Circulo = (props) => {
  return (
    <motion.div className="circulo " onClick={props.mostrar}>

      <div className="profundidad"></div>

    </motion.div>
    
  );
};
export default Circulo;
