export default function renderComentario(array_de_comentarios){
    return `<p>Nombre: ${array_de_comentarios.nombre}</p>
    <p>Comentario: ${array_de_comentarios.comentario}</p>
    <p>Fecha de publicacion: ${array_de_comentarios.fechaCreacion}</p><br>`;
} 