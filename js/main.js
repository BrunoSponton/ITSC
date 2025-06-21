// Cargar el header ---------------------------------------------------------------------------------------
fetch('html/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
    // Después de cargar el header, configuramos los eventos de los menús
    setupMenuEvents();
  });

// Cargar el footer ---------------------------------------------------------------------------------------
fetch('html/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });

// Función para cargar contenido dinámico -----------------------------------------------------------------
function loadContent(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('content-container').innerHTML = data;
      
      // Cargar estilos específicos
      if(url.includes('faqs.html')) {
        loadFAQsStyles();
        loadFAQsScript();
      } else if(url.includes('nosotros.html')) {
        loadNosotrosStyles();
      } else if(url.includes('requisitos.html')) {
        loadRequisitosStyles();
      }
    });
}

// Función para cargar estilos específicos de la página Nosotros ------------------------------------------
function loadNosotrosStyles() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/nosotros.css';
  document.head.appendChild(link);
}

// Función para cargar estilos de FAQs --------------------------------------------------------------------
function loadFAQsStyles() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/faqs.css';
  document.head.appendChild(link);
}

// Función para cargar estilos de Requisitos --------------------------------------------------------------
function loadRequisitosStyles() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/requisitos.css';
  document.head.appendChild(link);
}

// Función para cargar el script de FAQs ------------------------------------------------------------------
function loadFAQsScript() {
  const script = document.createElement('script');
  script.src = 'js/faqs.js';
  document.body.appendChild(script);
}

// Función para configurar eventos del menú ---------------------------------------------------------------
function setupMenuEvents() {
  // Evento para el enlace "Nosotros" en el menú
  document.querySelectorAll('.dropdown a[href="#nosotros"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      loadContent('html/nosotros.html');
      document.title = 'ITSC - Nosotros | Instituto Técnico Superior Córdoba';
      window.location.hash = 'nosotros';
    });
  });

  // Evento para Requisitos de Matriculación
  document.querySelectorAll('.dropdown a[href="#requisitos"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      loadContent('html/requisitos.html');
      document.title = 'ITSC - Requisitos de Matriculación | Instituto Técnico Superior Córdoba';
      window.location.hash = 'requisitos';
    });
  });

  // Evento para Preguntas Frecuentes
  document.querySelectorAll('.dropdown a[href="#faqs"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      loadContent('html/faqs.html');
      document.title = 'ITSC - Preguntas Frecuentes | Instituto Técnico Superior Córdoba';
      window.location.hash = 'faqs';
    });
  });
}