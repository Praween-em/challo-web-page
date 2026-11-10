import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';
import '../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <img 
              src="/images/logo-orange-blue-plain.jpg" 
              alt={SITE_CONFIG.companyName} 
              className="footer-logo"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/logo-app-icon.jpg';
              }}
            />
            <p className="footer-desc">
              {SITE_CONFIG.companyName} is your trusted daily commute partner offering seamless, safe, and pocket-friendly rides across {SITE_CONFIG.serviceRegion}. Travel smarter with Bike Taxi, Auto, Cab, and Ambulance services in one app.
            </p>
            {/* Social Icons */}
            <div className="footer-social">
              {SITE_CONFIG.facebookUrl && (
                <a href={SITE_CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              )}
              {SITE_CONFIG.instagramUrl && (
                <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              {SITE_CONFIG.twitterUrl && (
                <a href={SITE_CONFIG.twitterUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (formerly Twitter)">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {SITE_CONFIG.youtubeUrl && (
                <a href={SITE_CONFIG.youtubeUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Supported Services */}
          <div className="footer-col">
            <h4>Ride Services</h4>
            <ul className="footer-links">
              <li><span className="footer-link">🛵 Bike Taxi</span></li>
              <li><span className="footer-link">🛺 Auto Taxi</span></li>
              <li><span className="footer-link">🚗 Car Taxi</span></li>
              <li><span className="footer-link">🚑 Ambulance Service</span></li>
            </ul>
          </div>

          {/* Contact and App Download */}
          <div className="footer-col">
            <h4>Get The App</h4>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
              Experience quick bookings, verified captains, and transparent pricing.
            </p>

            <div className="footer-stores">
              <a 
                href={SITE_CONFIG.playStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-store-btn"
              >
                <span className="store-icon">▶</span>
                <div>
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <div className="footer-contact-item">
                <span className="icon">✉</span>
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} style={{ color: 'inherit' }}>
                  {SITE_CONFIG.contactEmail}
                </a>
              </div>
              {SITE_CONFIG.contactPhone && (
                <div className="footer-contact-item">
                  <span className="icon">📞</span>
                  <span>{SITE_CONFIG.contactPhone}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} {SITE_CONFIG.companyName}. All rights reserved. {SITE_CONFIG.tagline}
          </div>
          <div className="footer-bottom-links">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

