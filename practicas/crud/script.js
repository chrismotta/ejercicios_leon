import renderComentario from "./render.js";

const formulario = document.getElementById("formulario");
const usuario = document.getElementById("usuario");
const comentarioMensaje = document.getElementById("comentario");
const esapcioComentarios = document.getElementById("container-de-comentarios");


const arrayComentarios = [];
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
    comentario: comentarioMensaje.value,
    _ID: acumulador++,
    fechaCreacion: fechaHorario,
    fechaModificacion: fechaHorario,
    editado: false,
  };
  arrayComentarios.push(comentarioNuevo);

  console.log(arrayComentarios);

  popularComentarios();
  comentarioMensaje.value = "";
}

function popularComentarios() {
  cajaComentarios = "";
  for (let i = 0; arrayComentarios.length > i; i++) {
    cajaComentarios += renderComentario(arrayComentarios[i]);
    esapcioComentarios.innerHTML = cajaComentarios;
    console.log(arrayComentarios[i]);
  }
}

window.editar = function (id) {
  alert(`Editando el elemento ${id}`);
}
