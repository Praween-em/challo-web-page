import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, getAssetUrl } from '../config/siteConfig';
import SEO from '../components/SEO';

export default function About() {
  const pillars = [
    {
      icon: '🎯',
      title: 'Our Mission',
      desc: 'To provide accessible, affordable, and safe mobility solutions that empower passengers with prompt transit and driver partners with dignity, equitable earnings, and sustainable growth.'
    },
    {
      icon: '🌍',
      title: 'Our Vision',
      desc: 'To become the most dependable and commuter-loved transportation network across Tier-1, Tier-2, and regional urban centres, bridging the gap between riders and drivers.'
    },
    {
      icon: '🤝',
      title: 'Our Values',
      desc: 'Integrity, total fare transparency, zero exploitation of drivers, and unwavering commitment to passenger safety on every kilometer traveled.'
    }
  ];

  return (
    <div className="about-page">
      <SEO 
        title="About Us" 
        description="Learn more about Challo, our mission, vision, leadership, and our commitment to safe and accessible urban transportation." 
      />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="badge badge-orange" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', marginBottom: '1rem' }}>
            Our Story & Values
          </span>
          <h1>About Challo</h1>
          <p>Building a smarter, safer, and more compassionate transit network for everyone.</p>
        </div>
      </div>

      {/* Main Story Section */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">A Ride Platform Built for the People</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
                <strong>Challo</strong> was conceived with a clear vision: everyday urban transportation should not be a daily headache of price surges, sudden cancellations, or unviable margins for hard-working drivers.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
                We believe mobility is an essential lifeline that powers local economies, facilitates education, enables healthcare access, and connects communities. By combining lightweight mobile technology with local operational expertise, Challo delivers a seamless ride-hailing experience tailored specifically to the regional dynamics of Indian cities.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                From daily two-wheeler commuters to families traveling across town or patients requiring immediate hospital transport, our platform ensures reliable vehicles are accessible with just a few taps.
              </p>
            </div>

            <div>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <img 
                  src={getAssetUrl('/images/promo-challo-brand.jpg')} 
                  alt="Challo Platform Brand" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = getAssetUrl('/images/services-overview.jpg');
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
            <span className="section-label">Purpose & Direction</span>
            <h2 className="section-title">What Drives Challo Forward</h2>
            <div className="divider divider-center"></div>
          </div>

          <div className="grid-3">
            {pillars.map((item, idx) => (
              <div 
                key={idx} 
                className="card" 
                style={{ padding: 'var(--spacing-2xl)', border: '1px solid var(--color-border)' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-secondary)', marginBottom: 'var(--spacing-sm)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: 'var(--text-sm)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Integrity */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <span className="section-label">Leadership</span>
              <h2 className="section-title">Guided by Community Commitment</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
                Under the strategic stewardship of <strong>{SITE_CONFIG.chairman}</strong> ({SITE_CONFIG.chairmanTitle}), Challo is positioned not merely as a tech application, but as a community mobility initiative.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our leadership advocates strongly for driver partner welfare, providing accident coverage assurances, community help desks, transparent fee frameworks, and emergency medical vehicle integration for citywide relief.
              </p>
              <div style={{ padding: '1rem 1.5rem', background: 'rgba(27,46,107,0.05)', borderLeft: '4px solid var(--color-secondary)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--color-secondary)', fontWeight: 600, margin: 0 }}>
                  "{SITE_CONFIG.tagline} — Safe journeys, respected drivers, and trusted mobility for every citizen."
                </p>
              </div>
            </div>

            <div style={{ order: 1 }}>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img 
                  src={getAssetUrl('/images/promo-franchise.jpg')} 
                  alt="Challo Leadership and Operations" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = getAssetUrl('/images/services-overview.jpg');
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Trust Focus */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%)', color: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ color: 'var(--color-primary-light)' }}>
              Passenger & Partner Safety
            </span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Safety is Not an Afterthought. It is Our Foundation.
            </h2>
            <div className="divider divider-center" style={{ background: 'var(--color-primary-light)' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Every trip on Challo is monitored in real time with end-to-end GPS technology, verified captain profiles, one-tap emergency SOS alarms, and dedicated safety response protocols to provide complete peace of mind to riders and their families.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href={SITE_CONFIG.playStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg"
              >
                Download Challo App
              </a>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

