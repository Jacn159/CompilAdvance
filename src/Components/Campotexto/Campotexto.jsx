import "./Campotexto.css";

const CampoTexto = (props) => {
  const manejarEnvio = (e) => {
    return props.actualizarValor(e.target.value);
  };
  return (
    <div className="campotexto">
      <textarea disabled className="meow" />
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
