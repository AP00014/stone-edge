import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you could send to an API
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Ready to start your project? Contact us today.</p>
            <div className="contact-details">
              <a href="https://maps.google.com/?q=123+Construction+Avenue,+Accra,+Ghana" target="_blank" rel="noopener noreferrer" className="contact-item-link">
                <div className="contact-item">
                  <div className="contact-icon">
                    <span className="contact-icon-text">📍</span>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">123 Construction Avenue, Accra, Ghana</span>
                  </div>
                </div>
              </a>
              <a href="tel:+233123456789" className="contact-item-link">
                <div className="contact-item">
                  <div className="contact-icon">
                    <span className="contact-icon-text">📞</span>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+233 123 456 789</span>
                  </div>
                </div>
              </a>
              <a href="mailto:info@stoneedge.com" className="contact-item-link">
                <div className="contact-item">
                  <div className="contact-icon">
                    <span className="contact-icon-text">✉️</span>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">info@stoneedge.com</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="social-media">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://facebook.com/stoneedge" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Follow us on Facebook">
                  <span className="social-text">f</span>
                </a>
                <a href="https://twitter.com/stoneedge" target="_blank" rel="noopener noreferrer" className="social-icon twitter" aria-label="Follow us on Twitter">
                  <span className="social-text">t</span>
                </a>
                <a href="https://linkedin.com/company/stoneedge" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="Follow us on LinkedIn">
                  <span className="social-text">in</span>
                </a>
                <a href="https://instagram.com/stoneedge" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Follow us on Instagram">
                  <span className="social-text">ig</span>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;