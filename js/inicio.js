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
// document.addEventListener("DOMContentLoaded", function () {
//   const centroCordoba = [-31.4201, -64.1888];

//   const mapa = L.map('mapaCba').setView(centroCordoba, 7);

//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 18,
//     attribution: '© OpenStreetMap'
//   }).addTo(mapa);

//   const sedes = [
//     { nombre: 'Córdoba Capital', coords: [-31.4201, -64.1888] },
//     { nombre: 'Villa María', coords: [-32.4196, -63.2389] },
//     { nombre: 'Río Cuarto', coords: [-33.1305, -64.3496] },
//     { nombre: 'San Francisco', coords: [-30.7265, -62.0833] },
//     { nombre: 'Jesús María', coords: [-30.9007, -64.1837] },
//     { nombre: 'Villa Dolores', coords: [-31.9467, -65.1258] }
//   ];

//   sedes.forEach(sede => {
//     L.marker(sede.coords)
//       .addTo(mapa)
//       .bindPopup(`<b>${sede.nombre}</b>`);
//   });
// });




