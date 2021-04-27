const formulario = document.getElementById("formulario");

const usuario = document.getElementById("usuario");
const comentario_mensaje = document.getElementById("comentario");



const array_comentarios = [];

let acumulador = 1;
/* function crearComentarios(
  nombre,
  comentario,
  _ID,
  fechaCreacion,
  fechaModificacion,
  editado
) {
  this.nombre = nombre;
  this.comentario = comentario;
  this._ID = _ID;
  this.fechaCreacion = fechaCreacion;
  this.fechaModificacion = fechaModificacion;
  this.editado = editado;
}
 */
formulario.addEventListener("submit", mostrarInfo);



function mostrarInfo(e) {
  let tiempo = new Date();
  e.preventDefault();
  let comentarioNuevo = {
    nombre: usuario.value,
    comentario: comentario_mensaje.value,
    _ID: acumulador++,
    fechaCreacion: `${tiempo.getHours()}:${tiempo.getMinutes()}`,
    fechaModificacion: `${tiempo.getHours()}:${tiempo.getMinutes()}`,
    editado: false,
  };
  array_comentarios.push(comentarioNuevo);

  // ok, no puedo ponerte un 10, por el uso del nombre "objeto" como nombre del objeto
  // (chico literal! ponele un nombre!! nuevoComentario!!! algo!!!)

  console.log(array_comentarios);
}




