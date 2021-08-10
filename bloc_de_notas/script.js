import renderNotas from "./render_notas.js";

const botonCrearNota = document.getElementById("boton_crear_nota");
const overlay = document.getElementById("fondo_crear_nota");
const creadorNota = document.getElementById("creadorNota");
const containerNotas = document.getElementById("container");
const botonGuardarNota = document.getElementById("boton_guardar");
const notaTitulo = document.getElementById("nota_titulo_input");
const notaContenido = document.getElementById("nota_contenido_input");

botonCrearNota.addEventListener("click", mostrarCreadorNotas);
overlay.addEventListener("click", ocultarCreadorNotas);
botonGuardarNota.addEventListener("click", guardarNota); 

const arrayNotas = [];
let contador = 0;

function mostrarCreadorNotas(){
    console.log("mostrarCreadorNotas", botonCrearNota);
    overlay.classList.add("activo");
    creadorNota.classList.add("activo");
}

function ocultarCreadorNotas(){
    overlay.classList.remove("activo");
    creadorNota.classList.remove("activo");
    console.log("ocultarCreadorNotas", botonCrearNota);
    botonCrearNota.addEventListener("click", mostrarCreadorNotas);
}

function guardarNota(){
    const nota = {
        titulo: notaTitulo.value,
        contenido: notaContenido.value
    };

    arrayNotas.push(nota);
    console.log(arrayNotas);

    notaTitulo.value = "";
    notaContenido.value = "";

    containerNotas.innerHTML += renderNotas(arrayNotas[contador].titulo, arrayNotas[contador].contenido);

    contador++;

    console.log("guardarNota", botonCrearNota);
    ocultarCreadorNotas();
}

