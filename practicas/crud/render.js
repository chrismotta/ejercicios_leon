export default function renderComentario(elemento) {
  return `
  <div class="comentario-container">
    <ul class="menu-flotante" id="menu_${elemento._ID}">
      <li onClick="editar('${elemento._ID}')">Editar</li>
      <li>Borar</li>
    </ul>
    <div class="comentario-header">
      <div class="menu" onClick="mostrarMenu('${elemento._ID}')"><i class="fas fa-ellipsis-v" id="menu-icono"></i></div>
      <span class="nombre-usuario">${elemento.nombre}:</span>
      <span>${elemento.comentario}</span>
    </div>
    <div class="footer-comentario">
      <div class="horario">${elemento.fechaCreacion}</div>
    </div> 
    <div class="separador"></div>
  </div>
  `;
}
