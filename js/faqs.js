function setupFAQs() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Cerrar otros FAQs abiertos
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Alternar el FAQ actual
      item.classList.toggle('active');
    });
  });
}

// Llamamos a la función inmediatamente después de cargar
setupFAQs();