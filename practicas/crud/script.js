const formulario = document.getElementById("formulario");

const usuario = document.getElementById("usuario");
const comentario_mensaje = document.getElementById("comentario");

let array_comentarios = [];

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
  e.preventDefault();
  let objeto = {
    nombre: usuario.value,
    comentario: comentario_mensaje.value,
  };
  array_comentarios.push(objeto);

  // ok, no puedo ponerte un 10, por el uso del nombre "objeto" como nombre del objeto
  // (chico literal! ponele un nombre!! nuevoComentario!!! algo!!!)

  console.log(array_comentarios);
}
