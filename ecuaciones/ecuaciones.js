const resultado = document.getElementById("resultado");
resultado.innerHTML = "Esperando resultado";

function getRespuestasCorrectas(
  preguntasRespondidas,
  puntosObtenidos,
  valorCorrecta,
  valorIncorrecta
) {
  let numeroCorrecto = "";

  for (let i = 0; i <= preguntasRespondidas; i++) {
    const _respCorrectas = preguntasRespondidas - i;
    const _respIncorrectas = i;
    const _total =
      _respCorrectas * valorCorrecta + _respIncorrectas * valorIncorrecta;
    console.log(_respCorrectas, _respIncorrectas, _total);

    if (_total === puntosObtenidos) {
      numeroCorrecto = `El participante respondio ${_respCorrectas} respuestas correctas y ${_respIncorrectas} respuestas incorrectas.`;
      return numeroCorrecto;
    }
  }

  return "Los valores ingresados no corresponden";
}

resultado.innerHTML = getRespuestasCorrectas(40, 55, 3, -2);
