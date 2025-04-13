document.addEventListener('DOMContentLoaded', function() {
  // Визначаємо активну сторінку в навігації
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Логіка для сторінки "Мій стартап"
  if (document.getElementById('startup-form')) {
    const startupForm = document.getElementById('startup-form');
    const dashboard = document.querySelector('.startup-dashboard');

    startupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      startupForm.classList.add('hidden');
      dashboard.classList.remove('hidden');

      // Тут можна додати логіку ініціалізації стартапу
    });
  }

  // Інша логіка для різних сторінок...
});
