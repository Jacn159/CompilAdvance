const Mostrar = (palabra) => {
  let valor3 = true; 
  let abecedario = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (
    palabra[0] == '"' &&
    palabra[palabra.length - 1] == '"' &&
    palabra.length > 1
  ) {
    const palabraSinComillas = palabra.slice(1, -1);
    for (const letra of palabraSinComillas.toLowerCase()) {
      if (!abecedario.includes(letra)) {
        valor3 = false;
        break;
      } 
    }
    return valor3
      ? "Si cumple con los requerimientos."
      : "No cumple, porque en medio solo deben ir letras o vacío.";
  } else return "No cumple con las comillas";
};

export default Mostrar;
