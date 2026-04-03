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

  // ACADEMIC LOGS: Walking Dots Animation
  const educationSection = document.getElementById('education');
  const dots = document.querySelectorAll('.timeline-dot');

  if (educationSection) {
    educationSection.addEventListener('click', (e) => {
      // Create a "pulse" effect at click position (optional, but looks better)
      const pulse = document.createElement('div');
      pulse.className = 'click-pulse';
      pulse.style.left = `${e.clientX}px`;
      pulse.style.top = `${e.clientY + window.scrollY}px`;
      document.body.appendChild(pulse);
      setTimeout(() => pulse.remove(), 600);

      const clickX = e.clientX;
      const clickY = e.clientY;

      dots.forEach((dot, index) => {
        const dotRect = dot.getBoundingClientRect();
        const dotX = dotRect.left + dotRect.width / 2;
        const dotY = dotRect.top + dotRect.height / 2;

        // Calculate distance to move (capped for better UX)
        const deltaX = (clickX - dotX) * 0.3;
        const deltaY = (clickY - dotY) * 0.3;

        // Apply "walk" animation with a sequence/delay for "walking" feel
        setTimeout(() => {
          dot.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.3)`;
          dot.style.backgroundColor = '#6da2fc';
          dot.style.boxShadow = '0 0 20px rgba(109, 162, 252, 0.8)';
          
          // Return to original position after a short delay
          setTimeout(() => {
            dot.style.transform = '';
            dot.style.backgroundColor = '';
            dot.style.boxShadow = '';
          }, 600);
        }, index * 50); // Staggered start for "walking" effect
      });
    });
  }
});
