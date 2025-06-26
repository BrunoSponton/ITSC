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
        direccion: "Av. Corrientes 1234"
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
