// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
  // Dark mode toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      // Toggle dark mode class on html element
      document.documentElement.classList.toggle('dark');
      
      // Save preference to localStorage
      const isDarkMode = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add intersection observer for reveal animations
  const revealSections = document.querySelectorAll('.reveal-section');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });
    
    revealSections.forEach(section => {
      section.classList.add('opacity-0');
      revealObserver.observe(section);
    });
  } else {
    // Fallback for browsers without IntersectionObserver support
    revealSections.forEach(section => {
      section.classList.add('is-visible');
    });
  }
});

// Additional CSS class for animation
document.documentElement.classList.add('js-enabled');