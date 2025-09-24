import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Building Construction',
      description: 'From residential homes to commercial complexes, we handle all aspects of building construction with precision and excellence.',
      icon: 'building-icon',
      features: [
        'Residential Buildings',
        'Commercial Complexes',
        'Industrial Structures',
        'Institutional Buildings'
      ]
    },
    {
      id: 2,
      title: 'Renovations',
      description: 'Transform your existing space with our comprehensive renovation services that blend functionality with aesthetic appeal.',
      icon: 'renovation-icon',
      features: [
        'Complete Home Renovations',
        'Office Remodeling',
        'Kitchen & Bathroom Upgrades',
        'Structural Modifications'
      ]
    },
    {
      id: 3,
      title: 'Architectural Design',
      description: 'Our architectural design services combine Japanese precision with Ghanaian creativity to create stunning, functional spaces.',
      icon: 'design-icon',
      features: [
        'Custom Home Designs',
        'Commercial Architecture',
        '3D Visualization',
        'Sustainable Design Solutions'
      ]
    },
    {
      id: 4,
      title: 'Project Management',
      description: 'We oversee every aspect of your construction project, ensuring timely completion within budget and to the highest standards.',
      icon: 'management-icon',
      features: [
        'Timeline Planning',
        'Budget Management',
        'Quality Control',
        'Resource Coordination'
      ]
    },
    {
      id: 5,
      title: 'Interior Design',
      description: 'Create beautiful, functional interior spaces that reflect your style and meet your specific needs.',
      icon: 'interior-icon',
      features: [
        'Space Planning',
        'Material Selection',
        'Custom Furniture Design',
        'Lighting Solutions'
      ]
    },
    {
      id: 6,
      title: 'Consultation',
      description: 'Get expert advice on your construction or renovation project from our team of experienced professionals.',
      icon: 'consultation-icon',
      features: [
        'Feasibility Studies',
        'Cost Estimation',
        'Material Recommendations',
        'Regulatory Compliance'
      ]
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="services-subtitle text-center">
          Comprehensive construction and design solutions with Japanese precision and Ghanaian excellence
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span className={service.icon}></span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature-item">{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="service-link">Learn More</a>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Contact us today for a free consultation and quote on your construction or renovation needs.</p>
          </div>
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Services;