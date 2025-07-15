document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({ duration: 800, once: true });

  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Dark mode toggle
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  const isDarkMode = localStorage.getItem('theme') === 'dark';
  if (isDarkMode) {
    body.classList.add('dark-mode');
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  }
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = body.classList.contains('dark-mode') ? 'sun' : 'moon';
    toggleButton.innerHTML = `<i class="fas fa-${icon}"></i>`;
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Form validation
  const form = document.getElementById('contactForm');
  const submitButton = document.getElementById('submitButton');
  const loading = document.getElementById('loading');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    submitButton.disabled = true;
    loading.classList.remove('hidden');
    setTimeout(() => {
      alert('Thank you for your message!');
      form.reset();
      submitButton.disabled = false;
      loading.classList.add('hidden');
    }, 1000);
  });
});