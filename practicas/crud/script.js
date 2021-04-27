const formulario = document.getElementById("formulario");

const usuario = document.getElementById("usuario");
const comentario_mensaje = document.getElementById("comentario");

const array_comentarios = [];

let acumulador = 1;

formulario.addEventListener("submit", mostrarInfo);

function mostrarInfo(e) {
  e.preventDefault(); //esto va primero siempre

  const tiempo = new Date();

  const fecha = `${tiempo.getDate()}/${tiempo.getMonth()+1}/${tiempo.getFullYear()}`;
  const horario = `${tiempo.getHours()}:${tiempo.getMinutes()}`;
  const fecha_y_horario = `${fecha} - ${horario}`

  const comentarioNuevo = {
    nombre: usuario.value,
    comentario: comentario_mensaje.value,
    _ID: acumulador++,
    fechaCreacion: `${fecha_y_horario}`,
    fechaModificacion: `${fecha_y_horario}`,
    editado: false,
  };
  array_comentarios.push(comentarioNuevo);

  console.log(array_comentarios);
}
