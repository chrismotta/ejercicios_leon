var formulario = document.getElementById("formulario");

var nombre = document.getElementById("usuario");
var comentario = document.getElementById("comentario");

formulario.addEventListener("submit", mostrarInfo);

function mostrarInfo(e){
    e.preventDefault();
    console.log(`El nombre es: ${nombre.value}
El comentario es: ${comentario.value}`);
}


/* var comentario = [
    {
    _ID: 123,
    creador: "Leon Rodriguez",
    frechaCreacion: "2021-04-23",
    frechaModificacion: "2021-04-23",
    comentario: "Este es un comentario de prueba",
    editado: false,
    },
]; */