import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';
import '../styles/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img 
              src="/images/logo-orange-blue-plain.jpg" 
              alt={`${SITE_CONFIG.companyName} Logo`}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/logo-app-icon.jpg';
              }} 
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="navbar-links" aria-label="Main Navigation">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact Us
            </NavLink>
            <NavLink to="/terms" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Terms & Conditions
            </NavLink>
            <NavLink to="/privacy" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Privacy Policy
            </NavLink>
          </nav>

          {/* CTA & Actions */}
          <div className="navbar-cta">
            <a 
              href={SITE_CONFIG.playStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <span>Download App</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} 
          onClick={closeMobileMenu} 
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} 
          onClick={closeMobileMenu}
        >
          About Us
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} 
          onClick={closeMobileMenu}
        >
          Contact Us
        </NavLink>
        <NavLink 
          to="/terms" 
          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} 
          onClick={closeMobileMenu}
        >
          Terms & Conditions
        </NavLink>
        <NavLink 
          to="/privacy" 
          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} 
          onClick={closeMobileMenu}
        >
          Privacy Policy
        </NavLink>
        <a 
          href={SITE_CONFIG.playStoreUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
          onClick={closeMobileMenu}
        >
          Download on Google Play
        </a>
      </div>
    </header>
  );
}

