export default function renderComentario(array_de_comentarios, g){
    return `<p>Nombre: ${array_de_comentarios[g].nombre}</p>
    <p>Comentario: ${array_de_comentarios[g].comentario}</p>
    <p>Fecha de publicacion: ${array_de_comentarios[g].fechaCreacion}</p><br>`;
} 