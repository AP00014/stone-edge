import { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechCorp Solutions',
      quote: 'STONE EDGE transformed our office space into a modern, functional environment that boosted our team\'s productivity. Their attention to detail and innovative design solutions exceeded our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Property Developer',
      company: 'Urban Developments Ltd',
      quote: 'Working with STONE EDGE was a game-changer for our residential project. Their expertise in sustainable construction and Japanese precision engineering delivered outstanding results on time and within budget.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Amara Nkrumah',
      position: 'Interior Designer',
      company: 'Creative Spaces Ghana',
      quote: 'The collaboration with STONE EDGE brought a unique blend of Japanese minimalism and Ghanaian warmth to our designs. Their craftsmanship and commitment to quality are unparalleled.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Restaurant Owner',
      company: 'Fusion Bistro',
      quote: 'From concept to completion, STONE EDGE created a stunning restaurant space that captures the essence of our culinary vision. The attention to acoustics and lighting was particularly impressive.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 5,
      name: 'Grace Mensah',
      position: 'Hotel Manager',
      company: 'Golden Coast Resort',
      quote: 'STONE EDGE\'s expertise in hospitality design created luxurious guest experiences that have significantly increased our occupancy rates. Their understanding of cultural nuances is remarkable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 6,
      name: 'Robert Kimani',
      position: 'Architect',
      company: 'Modern Builds Kenya',
      quote: 'Partnering with STONE EDGE on our mixed-use development project was exceptional. Their innovative structural solutions and commitment to safety standards set new benchmarks in our industry.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title text-center">What Our Clients Say</h2>
        <p className="testimonials-subtitle text-center">
          Discover how we've helped businesses and individuals bring their vision to life through exceptional construction and design
        </p>

        <div
          className="testimonials-carousel"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="testimonial-avatar">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-meta">
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-position">{testimonial.position}</p>
                        <p className="testimonial-company">{testimonial.company}</p>
                        <div className="testimonial-rating">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <blockquote className="testimonial-quote">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-btn prev-btn"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            className="carousel-btn next-btn"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            ›
          </button>

          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Join the satisfied clients who've transformed their spaces with STONE EDGE. Let's discuss your vision and bring it to life.</p>
          <a href="#contact" className="btn btn-primary">Get Started Today</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;