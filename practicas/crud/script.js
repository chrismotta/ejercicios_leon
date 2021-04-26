const formulario = document.getElementById("formulario");

const nombre = document.getElementById("usuario");
const comentario = document.getElementById("comentario");

formulario.addEventListener("submit", mostrarInfo);

function mostrarInfo(e){
    e.preventDefault();
    array_comentarios[0].creador = nombre.value;
    array_comentarios[0].comentario = comentario.value;
    console.log(`El nombre es: ${array_comentarios[0].creador}
El comentario es: ${array_comentarios[0].comentario}`); 
    console.log(array_comentarios[0]);
}

let array_comentarios = [
    {
    _ID: 123,
    creador: "",
    frechaCreacion: "2021-04-23",
    frechaModificacion: "2021-04-23",
    comentario: "",
    editado: false,
    },
]

