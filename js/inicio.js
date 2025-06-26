// 1. Carrusel principal
const imagenes = document.querySelectorAll('.carrusel-img');
if (imagenes.length > 0) {
  let currentIndex = 0;
  function cambiarImagen() {
    imagenes.forEach(img => img.classList.remove('activo'));
    imagenes[currentIndex].classList.add('activo');
    currentIndex = (currentIndex + 1) % imagenes.length;
  }
  setInterval(cambiarImagen, 5000);
}

// VER TECNICATURAS  
document.addEventListener('click', e => {
  if (e.target && e.target.classList.contains('toggle-info')) {
    const tarjeta = e.target.closest('.tarjeta');
    tarjeta.classList.toggle('expandida');

    e.target.textContent = tarjeta.classList.contains('expandida')
      ? 'Ver menos'
      : 'Ver más';
  }
});

// ABRIR MODAL PLAN DE ESTUDIOS
document.addEventListener('click', function(e) {
  if (e.target.matches('.btn-plan')) {
    e.preventDefault();
    const modal = document.getElementById('modal-plan');
    const img = modal.querySelector('img');
    const src = e.target.dataset.plan || 'img/planSoft.jpg';
    img.src = src;
    modal.style.display = 'flex';
  }

  if (e.target.matches('.cerrar-modal') || e.target.closest('.cerrar-modal')) {
    document.getElementById('modal-plan').style.display = 'none';
  }
});

window.addEventListener('click', function(e) {
  const modal = document.getElementById('modal-plan');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});




// 2. Carrusel de novedades
function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const scrollAmount = 300;
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}


// 3. Mapa de sedes
try {
  if (typeof L !== 'undefined' && document.getElementById('mapa')) {
    const mapa = L.map('mapa').setView([-34.6037, -58.3816], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa);

    const sedes = [
      {
        nombre: "Sede Central",
        coordenadas: [-34.6037, -58.3816],
        direccion: "Rio Negro  71"
      },
      {
        nombre: "Sede Norte",
        coordenadas: [-34.5517, -58.4563],
        direccion: "Av. Cabildo 2100"
      },
      {
        nombre: "Sede Oeste",
        coordenadas: [-34.6354, -58.5327],
        direccion: "Av. Rivadavia 10500"
      }
    ];

    sedes.forEach(sede => {
      const marker = L.marker(sede.coordenadas).addTo(mapa);
      marker.bindPopup(`<b>${sede.nombre}</b><br>${sede.direccion}`);
    });
  }
} catch (e) {
  console.error("Error en el mapa:", e);
}




