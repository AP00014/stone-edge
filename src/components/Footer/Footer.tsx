import './Footer.css';
import logo from '../../assets/IMG-20250623-WA0014.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <img src={logo} alt="STONE EDGE Construction Limited" />
              </div>
              <p className="footer-tagline">We Construct Dream</p>
              <p className="footer-desc">
                STONE EDGE Construction Limited is a premier construction company specializing in building, 
                renovations, and architectural design services. Based in Ghana with Japanese origins, 
                we bring international expertise to every project.
              </p>
            </div>

            <div className="footer-links">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-services">
              <h4 className="footer-title">Our Services</h4>
              <ul className="footer-menu">
                <li><a href="#services">Building Construction</a></li>
                <li><a href="#services">Renovations</a></li>
                <li><a href="#services">Architectural Design</a></li>
                <li><a href="#services">Project Management</a></li>
                <li><a href="#services">Interior Design</a></li>
                <li><a href="#services">Consultation</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="footer-title">Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <i className="icon-location"></i>
                  <span>123 Construction Avenue, Accra, Ghana</span>
                </li>
                <li>
                  <i className="icon-phone"></i>
                  <span>+233 123 456 789</span>
                </li>
                <li>
                  <i className="icon-email"></i>
                  <span>info@stoneedge.com</span>
                </li>
              </ul>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="icon-facebook"></i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="icon-twitter"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="icon-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="icon-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>&copy; {currentYear} STONE EDGE Construction Limited. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;