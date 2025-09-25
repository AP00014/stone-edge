              import { useState, useEffect, useRef } from 'react';
              import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/IMG-20250623-WA0014.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen &&
          navMenuRef.current &&
          !navMenuRef.current.contains(event.target as Node) &&
          toggleButtonRef.current &&
          !toggleButtonRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="logo">
              <img src={logo} alt="STONE EDGE Construction Limited" />
            </Link>
          </div>

          <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} ref={navMenuRef}>
           
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => { closeMobileMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/#about" className="nav-link" onClick={() => { closeMobileMenu(); }}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/#services" className="nav-link" onClick={() => { closeMobileMenu(); }}>Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className={`nav-link ${location.pathname.includes('/projects') ? 'active' : ''}`} onClick={() => { closeMobileMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/#testimonials" className="nav-link" onClick={() => { closeMobileMenu(); }}>Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link to="/#contact" className="nav-link" onClick={() => { closeMobileMenu(); }}>Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="header-cta">
            <Link to="/#contact" className="btn btn-outline">Get a Quote</Link>
          </div>

          <div className="mobile-menu-toggle" onClick={toggleMobileMenu} ref={toggleButtonRef}>
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;