/* ==========================================================================
   MINIMAL DARK PORTFOLIO SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Toggle mobile menu
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });

  // Close mobile menu on clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });

  // Basic scroll reveal for sections (optional enhancement, kept simple)
  const sections = document.querySelectorAll('.section');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // ACADEMIC LOGS: Stays static as per user request
});
