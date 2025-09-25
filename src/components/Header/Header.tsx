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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMobileMenu();
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
                 <button className="nav-link" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMobileMenu(); }}>Home</button>
               </li>
               <li className="nav-item">
                 <button className="nav-link" onClick={() => scrollToSection('about')}>About Us</button>
               </li>
               <li className="nav-item">
                 <button className="nav-link" onClick={() => scrollToSection('services')}>Services</button>
               </li>
               <li className="nav-item">
                 <Link to="/projects" className={`nav-link ${location.pathname.includes('/projects') ? 'active' : ''}`} onClick={() => { closeMobileMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Projects</Link>
               </li>
               <li className="nav-item">
                 <button className="nav-link" onClick={() => scrollToSection('testimonials')}>Testimonials</button>
               </li>
               <li className="nav-item">
                 <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
               </li>
             </ul>
          </nav>

          <div className="header-cta">
            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>Get a Quote</button>
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