import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since this is a static website, we provide a functional mailto fallback
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.fullName}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${SITE_CONFIG.contactEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us" 
        description="Get in touch with the Challo team. We are here to answer questions, resolve support inquiries, and listen to your feedback." 
      />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="badge badge-orange" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', marginBottom: '1rem' }}>
            Get in Touch
          </span>
          <h1>Contact Challo</h1>
          <p>We are here to assist passengers, driver partners, and community members.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--spacing-3xl)' }}>
            
            {/* Left Column: Contact Details */}
            <div>
              <span className="section-label">Reach Out</span>
              <h2 className="section-title">Let’s Start a Conversation</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Have questions about ride bookings, becoming a driver partner, franchise opportunities, or app technical support? Reach out directly using our official channels.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {/* Official Email */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: 'var(--radius-md)', 
                    background: 'rgba(232,93,0,0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    ✉
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--color-secondary)', fontSize: '1rem', marginBottom: '4px' }}>
                      Official Email
                    </h4>
                    <a 
                      href={`mailto:${SITE_CONFIG.contactEmail}`}
                      style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem' }}
                    >
                      {SITE_CONFIG.contactEmail}
                    </a>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                      General inquiries, support, and partner applications
                    </div>
                  </div>
                </div>

                {/* Operational Region */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: 'var(--radius-md)', 
                    background: 'rgba(255,184,0,0.15)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    🏢
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--color-secondary)', fontSize: '1rem', marginBottom: '4px' }}>
                      Operational Region
                    </h4>
                    <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>
                      Operational Hubs across <strong>Hyderabad, Warangal, Karimnagar, Nizamabad</strong> & Telangana Districts.
                    </p>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                      Dedicated in-app emergency SOS active 24/7 on every ride
                    </div>
                  </div>
                </div>

                {/* Official Social Channels */}
                <div style={{ marginTop: '0.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                  <h4 style={{ color: 'var(--color-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                    Official Social Channels
                  </h4>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {SITE_CONFIG.facebookUrl && (
                      <a 
                        href={SITE_CONFIG.facebookUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn" 
                        style={{ 
                          padding: '0.5rem 1rem', 
                          fontSize: '0.85rem', 
                          background: 'rgba(27,46,107,0.08)', 
                          color: 'var(--color-secondary)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '6px' }}>
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                        Facebook
                      </a>
                    )}
                    {SITE_CONFIG.instagramUrl && (
                      <a 
                        href={SITE_CONFIG.instagramUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn" 
                        style={{ 
                          padding: '0.5rem 1rem', 
                          fontSize: '0.85rem', 
                          background: 'rgba(232,93,0,0.08)', 
                          color: 'var(--color-primary)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '6px' }}>
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Instagram
                      </a>
                    )}
                    {SITE_CONFIG.twitterUrl && (
                      <a 
                        href={SITE_CONFIG.twitterUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn" 
                        style={{ 
                          padding: '0.5rem 1rem', 
                          fontSize: '0.85rem', 
                          background: 'rgba(0,0,0,0.06)', 
                          color: 'var(--color-text)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '6px' }}>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        X (Twitter)
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Note regarding static contact processing */}
              <div style={{ 
                padding: '1rem 1.25rem', 
                background: 'var(--color-bg-alt)', 
                borderRadius: 'var(--radius-md)', 
                borderLeft: '4px solid var(--color-primary)',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)'
              }}>
                <strong>Static Website Notice:</strong> Submitting the contact form will trigger your default email client with your message pre-formatted directly to <strong>{SITE_CONFIG.contactEmail}</strong>.
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <div className="card" style={{ padding: 'var(--spacing-2xl)', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                  Send Us a Direct Message
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Fill in your details and message below.
                </p>

                {formSubmitted && (
                  <div style={{ 
                    background: 'rgba(34,197,94,0.1)', 
                    color: '#15803d', 
                    padding: '0.75rem 1rem', 
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.5rem',
                    fontSize: '0.9rem'
                  }}>
                    ✓ Prepared email client with your inquiry. You can also send directly to {SITE_CONFIG.contactEmail}.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      className="form-control" 
                      required 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-control" 
                      required 
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="form-control" 
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="form-control" 
                      required 
                      placeholder="How can we assist you?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-control" 
                      required 
                      rows="4" 
                      placeholder="Provide details regarding your question or feedback..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.875rem' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

