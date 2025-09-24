/**
 * animations.js - Handles all animation functionality for STONE EDGE website
 */

// Scroll reveal animation handler
const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal, .reveal-on-scroll');
  
  const checkReveal = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        element.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', checkReveal);
  checkReveal(); // Check on initial load
};

// Staggered animation handler for lists and grids
const initStaggeredAnimations = () => {
  const staggerContainers = document.querySelectorAll('[data-stagger="true"]');

  staggerContainers.forEach(container => {
    const items = container.children;
    const baseDelay = 100; // milliseconds

    Array.from(items).forEach((item, index) => {
      (item as HTMLElement).style.animationDelay = `${baseDelay * index}ms`;
      item.classList.add('animate-fade-in-up');
    });
  });
};

// Gradient animation handler
const initGradientAnimations = () => {
  const gradientElements = document.querySelectorAll('.gradient-orange, .gradient-dark, .animate-gradient, .fluid-gradient');
  
  gradientElements.forEach(element => {
    // Ensure the element has the necessary CSS properties
    if (!element.classList.contains('animate-gradient')) {
      element.classList.add('animate-gradient');
    }
  });
};

// Parallax effect for hero and section backgrounds
const initParallaxEffects = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax="true"]');

  const handleParallax = () => {
    const scrollTop = window.pageYOffset;

    parallaxElements.forEach(element => {
      const speed = parseFloat((element as HTMLElement).dataset.speed || '0.5');
      const offset = (element as HTMLElement).offsetTop;
      const yPos = -(scrollTop - offset) * speed;

      (element as HTMLElement).style.backgroundPosition = `50% ${yPos}px`;
    });
  };

  window.addEventListener('scroll', handleParallax);
  handleParallax(); // Initialize on load
};

// Hover effects enhancement
const initHoverEffects = () => {
  // Add hover classes programmatically if needed
  document.querySelectorAll('.service-card, .team-card').forEach(card => {
    if (!card.classList.contains('hover-lift')) {
      card.classList.add('hover-lift');
    }
  });
};

// Initialize all animations
const initAllAnimations = () => {
  initScrollReveal();
  initStaggeredAnimations();
  initGradientAnimations();
  initParallaxEffects();
  initHoverEffects();

  // Add data-stagger attribute to grid containers
  document.querySelectorAll('.services-grid, .team-grid').forEach(grid => {
    grid.setAttribute('data-stagger', 'true');
  });

  // Add reveal class to section titles and content blocks
  document.querySelectorAll('.section-title, .team-subtitle, .services-subtitle').forEach(element => {
    element.classList.add('reveal');
  });
};

// Export the initialization function
export default initAllAnimations;