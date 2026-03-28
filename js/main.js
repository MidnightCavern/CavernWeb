document.addEventListener('DOMContentLoaded', () => {
  // Sticky navbar background on scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Mobile hamburger toggle
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navList.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('open');
      });
    });
  }

  // Fade-in on scroll (intersection observer)
  const faders = document.querySelectorAll('.fade-in');
  if (faders.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    faders.forEach(el => observer.observe(el));
  }
});