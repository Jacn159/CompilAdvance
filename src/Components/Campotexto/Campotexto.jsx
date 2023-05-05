import "./Campotexto.css";

const CampoTexto = (props) => {
  const meow = () => {
    if (props.prendido !== false) {
      props.cards(!props.valorCards);

    }
  };
  
  const manejarEnvio = (e) => {
    return props.actualizarValor(e.target.value);
  };

  return (
    <div className="campotexto">
      <span className="meow" onClick={meow} />
      <input
        type="text"
        value={props.valor}
        onChange={manejarEnvio}
        placeholder="Escribe..."
        className="meow"
      />
    </div>
  );
};

export default CampoTexto;
