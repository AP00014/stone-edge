import './About.css';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    projects: 0,
    team: 0
  });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { years: 8, projects: 100, team: 50 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedStats({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
        team: Math.floor(targets.team * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, increment);
  };
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container">
        <div className="about-content">
          <div className="about-text reveal">
            <h2 id="about-title" className="section-title reveal">Our Story</h2>
            <p className="about-subtitle">A Blend of Japanese Precision and Ghanaian Excellence</p>
            
            <div className="about-description">
              <p>
                STONE EDGE Construction Limited was founded with a vision to bring Japanese construction 
                excellence and precision to the Ghanaian market. Our journey began in Japan, where our 
                founders mastered the art of meticulous planning, innovative design, and flawless execution 
                that Japanese architecture is renowned for worldwide.
              </p>
              
              <p>
                In 2015, we established our headquarters in Accra, Ghana, bringing together a team of 
                skilled professionals from both Japan and Ghana. This unique cultural blend allows us to 
                combine Japanese technological innovation and attention to detail with Ghanaian creativity 
                and understanding of local building requirements.
              </p>
              
              <p>
                Today, STONE EDGE stands as a testament to cross-cultural excellence in the construction 
                industry. We've successfully completed numerous projects across Ghana, from residential 
                buildings to commercial complexes, each reflecting our commitment to quality, durability, 
                and aesthetic appeal.
              </p>
            </div>
            
            <div className="about-values">
              <h3>Our Core Values</h3>
              <ul className="values-list" data-stagger="true" role="list" aria-label="Core company values">
                <li role="listitem" title="Japanese precision in every detail">
                  <span className="value-icon precision-icon" aria-hidden="true"></span>
                  <div className="value-content">
                    <h4>Precision</h4>
                    <p>We bring Japanese precision to every project, ensuring exact measurements and perfect execution.</p>
                  </div>
                </li>
                <li role="listitem" title="Embracing cutting-edge construction technologies">
                  <span className="value-icon innovation-icon" aria-hidden="true"></span>
                  <div className="value-content">
                    <h4>Innovation</h4>
                    <p>We constantly explore new technologies and methods to improve our construction processes.</p>
                  </div>
                </li>
                <li role="listitem" title="Ethical standards in all operations">
                  <span className="value-icon integrity-icon" aria-hidden="true"></span>
                  <div className="value-content">
                    <h4>Integrity</h4>
                    <p>We maintain the highest ethical standards in all our business dealings and relationships.</p>
                  </div>
                </li>
                <li role="listitem" title="Uncompromising quality in every project">
                  <span className="value-icon excellence-icon" aria-hidden="true"></span>
                  <div className="value-content">
                    <h4>Excellence</h4>
                    <p>We strive for excellence in every aspect of our work, from planning to final delivery.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="about-cta reveal">
              <a href="#contact" className="btn btn-primary">Contact Us</a>
              <a href="#projects" className="btn btn-outline">View Our Projects</a>
            </div>
          </div>
          
          <div className="about-image-container reveal">
            <div className="about-image-grid" role="img" aria-label="Gallery of STONE EDGE company images">
              <div className="about-image about-image-1">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="STONE EDGE headquarters in Accra" loading="lazy" />
              </div>
              <div className="about-image about-image-2">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Our team at work" loading="lazy" />
              </div>
              <div className="about-image about-image-3">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Japanese-Ghanaian collaboration" loading="lazy" />
              </div>
              <div className="about-stats" ref={statsRef} role="region" aria-label="Company statistics">
                <div className="stat-item">
                  <span className="stat-number" aria-label={`${animatedStats.years} plus years in Ghana`}>{animatedStats.years}+</span>
                  <span className="stat-label">Years in Ghana</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" aria-label={`${animatedStats.projects} plus projects completed`}>{animatedStats.projects}+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" aria-label={`${animatedStats.team} plus team members`}>{animatedStats.team}+</span>
                  <span className="stat-label">Team Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;