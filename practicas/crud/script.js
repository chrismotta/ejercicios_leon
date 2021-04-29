const formulario = document.getElementById("formulario");
const usuario = document.getElementById("usuario");
const comentario_mensaje = document.getElementById("comentario");
const esapcioComentarios = document.getElementById("container-de-comentarios");

const array_comentarios = [];
let acumulador = 1;
let cajaComentarios = "";

formulario.addEventListener("submit", mostrarInfo);

function mostrarInfo(e) {
  e.preventDefault(); //esto va primero siempre

  const tiempo = new Date();
  const fecha = `${tiempo.getDate()}/${
    tiempo.getMonth() + 1
  }/${tiempo.getFullYear()}`;
  const horario = `${tiempo.getHours()}:${tiempo.getMinutes()}`;
  const fechaHorario = `${fecha} - ${horario}`;

  const comentarioNuevo = {
    nombre: usuario.value,
    comentario: comentario_mensaje.value,
    _ID: acumulador++,
    fechaCreacion: fechaHorario,
    fechaModificacion: fechaHorario,
    editado: false,
  };
  array_comentarios.push(comentarioNuevo);

  console.log(array_comentarios);

  // armar funcion externa que:
  // limpia caja comentarios
  // tiene un for que recorre todo el array
  // carga los textos de toooodos los comentarios en una variable
  // manda el texto a esapcioComentarios

  // cajaComentarios += `<p>Nombre: ${comentarioNuevo.nombre}</p>
  // <p>Comentario: ${comentarioNuevo.comentario}</p>
  // <p>Fecha de publicacion: ${comentarioNuevo.fechaCreacion}</p><br>`;

  // esapcioComentarios.innerHTML = cajaComentarios;
}
