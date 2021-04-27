const formulario = document.getElementById("formulario");

const usuario = document.getElementById("usuario");
const comentario_mensaje = document.getElementById("comentario");

let array_comentarios = [];

function crearComentarios(nombre, comentario, _ID, fechaCreacion, fechaModificacion, editado){
    this.nombre = nombre;
    this.comentario = comentario;
    this._ID = _ID;
    this.fechaCreacion = fechaCreacion;
    this.fechaModificacion = fechaModificacion;
    this.editado = editado
}

formulario.addEventListener("submit", mostrarInfo);

function mostrarInfo(e){
    e.preventDefault();
    array_comentarios.push(new crearComentarios(usuario.value, comentario_mensaje.value));
    console.log(array_comentarios);
}
