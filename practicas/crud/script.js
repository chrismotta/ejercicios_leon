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
    comentario: comentario_mensaje.value
  }
  array_comentarios.push(objeto);
  /* array_comentarios.push(
    new crearComentarios(usuario.value, comentario_mensaje.value)
  ); */

  // Bien por haberlo resuelto, absolutamente válido... pero...
  // al hacer una función constructora y usar 'this' y 'new' estás haciendo
  // programación orientada a objeto, no está mal pero no es el fuerte de JS

  // Te propongo otra forma más sencilla, usando el paradigma funcional
  // Por qué no crear un objeto con el comentario, acá mismo, dentro de la funcion?
  // const objeto = {
  //   clave: valor,
  //   clave: valor
  // }
  // Entonces podrías pushearlo al array directamente, sin necesidad de una función externa.
  // Probalo (y no borres tu solución, dejala comentada, así la comparamos) 😉

  console.log(array_comentarios);
}
