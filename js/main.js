// Cargar contenido inicial
window.addEventListener('load', () => {
  loadContent('html/inicio.html');
});

// Cargar el header
fetch('html/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
    setupMenuEvents();
  });

// Cargar el footer
fetch('html/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });

// Función para cargar contenido dinámico
function loadContent(url) {
  return fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('content-container').innerHTML = data;

      // Cargar estilos según página
      if (url.includes('faqs.html')) {
        loadFAQsStyles();
        loadFAQsScript();
      } else if (url.includes('nosotros.html')) {
        loadNosotrosStyles();
      } else if (url.includes('requisitos.html')) {
        loadRequisitosStyles();
      } else if (url.includes('inicio.html')) {
        loadInicioStyles();
        loadInicioScript();
      } else if (url.includes('tecnis.html')) {
        loadTecnicaturasStyles();
}


      // Esperar el div mapa, si existe
      const wait = setInterval(() => {
        if (document.getElementById('mapa')) {
          clearInterval(wait);
          initMapaSedes();
        }
      }, 100);
    });
}

// Estilos por sección
function loadNosotrosStyles() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/nosotros.css';
  document.head.appendChild(link);
}
function loadFAQsStyles() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/faqs.css';
  document.head.appendChild(link);
}
function loadRequisitosStyles() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/requisitos.css';
  document.head.appendChild(link);
}
function loadInicioStyles() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/inicio.css';
  document.head.appendChild(link);
}
function loadTecnicaturasStyles() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/tecnis.css';
  document.head.appendChild(link);
}


// Script 

function loadInicioScript() {
  const script = document.createElement('script');
  script.src = 'js/inicio.js';
  document.body.appendChild(script);
}

function loadFAQsScript() {
  const script = document.createElement('script');
  script.src = 'js/faqs.js';
  document.body.appendChild(script);
}


// Configurar menú
function setupMenuEvents() {
  document.querySelectorAll('.dropdown a[href="#nosotros"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      loadContent('html/nosotros.html');
      document.title = 'ITSC - Nosotros';
      window.location.hash = 'nosotros';
    });
  });

  document.querySelectorAll('.dropdown a[href="#requisitos"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      loadContent('html/requisitos.html');
      document.title = 'ITSC - Requisitos';
      window.location.hash = 'requisitos';
    });
  });

  document.querySelectorAll('.dropdown a[href="#faqs"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      loadContent('html/faqs.html');
      document.title = 'ITSC - Preguntas Frecuentes';
      window.location.hash = 'faqs';
    });
  });

  document.querySelectorAll('a[href="#inicio"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      loadContent('html/inicio.html');
      document.title = 'ITSC - Inicio';
      window.location.hash = 'inicio';
    });
  });
  document.querySelectorAll('.dropdown a[href="#tecnis"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    loadContent('html/tecnis.html');
    document.title = 'ITSC - Tecnicaturas';
    window.location.hash = 'tecnis';
  });
});

}

// MAPA DE SEDES
function initMapaSedes() {
  if (!window.L) {
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    leafletScript.onload = renderMapa;
    document.body.appendChild(leafletScript);
  } else {
    renderMapa();
  }
}

function renderMapa() {
  const mapa = L.map('mapa').setView([-31.4167, -64.1833], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapa);

  const sedes = [
    { nombre: "Córdoba Capital", lat: -31.4167, lng: -64.1833 },
    { nombre: "Río Cuarto", lat: -33.1307, lng: -64.3499 },
    { nombre: "Villa María", lat: -32.4075, lng: -63.2406 },
    { nombre: "San Francisco", lat: -31.4278, lng: -62.0827 }
  ];

  sedes.forEach(sede => {
    L.marker([sede.lat, sede.lng])
      .addTo(mapa)
      .bindPopup(sede.nombre);
  });

  // Carrusel rotativo simple
setInterval(() => {
  const imagenes = document.querySelectorAll('.carrusel-img');
  let actual = [...imagenes].findIndex(img => img.classList.contains('activo'));
  imagenes[actual].classList.remove('activo');
  const siguiente = (actual + 1) % imagenes.length;
  imagenes[siguiente].classList.add('activo');
}, 4000);

}
