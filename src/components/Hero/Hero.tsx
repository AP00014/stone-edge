import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [useAltBackground, setUseAltBackground] = useState(false);

  // Toggle between background images every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setUseAltBackground(prev => !prev);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToContent = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`hero ${useAltBackground ? 'alt-bg' : ''}`}>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title animate-slide-in-bottom">
            <span className="text-orange">Crafting</span> <span className="text-white">Excellence in</span> <span className="text-orange">Construction</span>
          </h1>
          <p className="hero-subtitle animate-slide-in-bottom stagger-1">
            Transforming visions into reality with innovative design, quality craftsmanship, and sustainable building practices
          </p>
          <div className="hero-cta animate-slide-in-bottom stagger-2">
            <a href="#projects" className="btn btn-primary">Explore Our Work</a>
            <a href="#contact" className="btn btn-secondary">Start Your Project</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <a href="#about" className="scroll-down" onClick={scrollToContent}>
          <span className="scroll-text">Discover More</span>
          <span className="scroll-icon"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;