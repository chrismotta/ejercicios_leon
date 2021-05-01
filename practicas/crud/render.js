export default function renderComentario(elemento){
    return `<div class="comentario-container">
    <div class="comentario-header">
                <span class="nombre-usuario">${elemento.nombre}:</span>
                <span>${elemento.comentario}</span>
            </div>
            <div class="footer-comentario">
                <div class="horario">${elemento.fechaCreacion}</div>
                <div class="menu"><i class="fas fa-ellipsis-v" id="menu-icono"></i></div>
                </div> 
            </div>`
} 