const formulario = document.getElementById("formulario");

const usuario = document.getElementById("usuario");
const comentario_mensaje = document.getElementById("comentario");

const array_comentarios = [];

let acumulador = 1;

formulario.addEventListener("submit", mostrarInfo);

function mostrarInfo(e) {
  e.preventDefault(); //esto va primero siempre

  let tiempo = new Date();
  let comentarioNuevo = {
    nombre: usuario.value,
    comentario: comentario_mensaje.value,
    _ID: acumulador++,
    fechaCreacion: `${tiempo.getHours()}:${tiempo.getMinutes()}`,
    fechaModificacion: `${tiempo.getHours()}:${tiempo.getMinutes()}`,
    editado: false,
  };
  array_comentarios.push(comentarioNuevo);

  console.log(array_comentarios);
}
