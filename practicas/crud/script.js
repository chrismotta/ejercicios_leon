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
  for (i = 0; arrayComentarios.length > i; i++) {
    cajaComentarios += `<p>Nombre: ${arrayComentarios[i].nombre}</p>
    <p>Comentario: ${arrayComentarios[i].comentario}</p>
    <p>Fecha de publicacion: ${arrayComentarios[i].fechaCreacion}</p><br>`;
    esapcioComentarios.innerHTML = cajaComentarios;
    console.log(arrayComentarios[i]);
  }
}
