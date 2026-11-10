import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';
import SEO from '../components/SEO';
import '../styles/home.css';

export default function Home() {
  const services = [
    {
      title: 'Bike Taxi',
      icon: '🛵',
      image: '/images/service-bike.jpg',
      tagline: 'Beat Traffic & Save Time',
      description: 'Quickest and most cost-effective commute for solo travellers navigating crowded city roads with verified helmet-equipped captains.',
      features: ['Fast traffic bypass', 'Pocket-friendly fares', 'Live GPS tracking']
    },
    {
      title: 'Auto Taxi',
      icon: '🛺',
      image: '/images/service-auto.jpg',
      tagline: 'The Everyday Family Ride',
      description: 'Reliable, spacious three-wheeler rides right at your doorstep. Transparent digital meter pricing with zero surge surprises.',
      features: ['Spacious 3-seater comfort', 'Doorstep pickup', 'Meter-based honesty']
    },
    {
      title: 'Car Taxi',
      icon: '🚗',
      image: '/images/service-car.jpg',
      tagline: 'Comfort & Climate Control',
      description: 'AC hatchbacks, sedans, and SUVs for daily office commutes, family outings, and outstation trips with courteous drivers.',
      features: ['Air-conditioned comfort', 'Multiple vehicle tiers', 'Luggage capacity']
    },
    {
      title: 'Ambulance Service',
      icon: '🚑',
      image: '/images/service-ambulance.jpg',
      tagline: 'Emergency Medical Response',
      description: 'Dedicated emergency medical transport ready 24/7 to connect patients promptly to hospitals with prioritized support and transparent rates.',
      features: ['24/7 Rapid response', 'Zero commission driver model', 'Hospital coordination']
    }
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Instant Ride Booking',
      desc: 'Smart matching technology assigns you the closest available captain in seconds, cutting wait times to a minimum.'
    },
    {
      icon: '💰',
      title: 'Honest & Affordable Fares',
      desc: 'Transparent pricing with zero hidden surcharges or surprise cancellations. What you see is what you pay.'
    },
    {
      icon: '🛡️',
      title: 'Verified Captains & Safety',
      desc: 'Strict document verification, background checks, live ride tracking, and an integrated in-app SOS alert.'
    },
    {
      icon: '📱',
      title: 'Intuitive Mobile Experience',
      desc: 'Lightweight Android app designed with clean UI, seamless regional language support, and easy navigation.'
    },
    {
      icon: '💳',
      title: 'Flexible Payment Modes',
      desc: 'Pay your way: Cash, UPI (PhonePe, Google Pay, Paytm), Debit/Credit cards, or linked mobile wallets.'
    },
    {
      icon: '📞',
      title: '24/7 Dedicated Support',
      desc: 'Real human assistance ready around the clock to support passengers and driver partners whenever needed.'
    }
  ];

  return (
    <div className="home-page">
      <SEO 
        title="Your Ride. Your Way. Challo!" 
        description="Challo is Telangana's smart ride-booking platform offering reliable Bike Taxi, Auto, Car, and Ambulance rides. Download the Challo App today!"
      />

      {/* ── 1. HERO SECTION ─────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="dot"></span>
                <span>{SITE_CONFIG.tagline} • Telangana</span>
              </div>
              <h1 className="hero-title">
                Your Ride. Your Way.
                <span className="accent">Challo!</span>
              </h1>
              <p className="hero-subtitle">
                Your city, your journeys, your convenience. Experience a smarter, quicker, and more affordable way to travel with verified captains and transparent fares.
              </p>

              <div className="hero-actions">
                <a 
                  href={SITE_CONFIG.playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-lg"
                >
                  <span>Download on Google Play</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
                <Link to="/about" className="btn btn-outline-white btn-lg">
                  Explore More
                </Link>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="value">4-in-1</div>
                  <div className="label">BIKE, AUTO, CAB, AMBULANCE</div>
                </div>
                <div className="hero-stat">
                  <div className="value">0%</div>
                  <div className="label">COMMISSION MODEL*</div>
                </div>
                <div className="hero-stat">
                  <div className="value">24/7</div>
                  <div className="label">CUSTOMER SUPPORT</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img 
                  src="/images/promo-hero-1.jpg" 
                  alt="Challo Quick & Affordable Rides"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/promo-hero-2.jpg';
                  }}
                />
              </div>

              {/* Floating feature pill 1 */}
              <div className="hero-float-card card-1">
                <div className="float-icon orange">🛵</div>
                <div className="float-text">
                  <strong>1st Ride Free</strong>
                  <span>Special Launch Offer</span>
                </div>
              </div>

              {/* Floating feature pill 2 */}
              <div className="hero-float-card card-2">
                <div className="float-icon blue">⚡</div>
                <div className="float-text">
                  <strong>50% OFF</strong>
                  <span>On Next 3 Rides</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave"></div>
      </section>

      {/* ── 2. ABOUT CHALLO PREVIEW ─────────────────────────── */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-preview-inner">
            <div className="about-preview-image">
              <img 
                src="/images/promo-features.jpg" 
                alt="Challo Passenger and Driver Safety" 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/services-overview.jpg';
                }}
              />
              <div className="about-preview-badge-wrap">
                <div className="big-num">100%</div>
                <div className="big-label">Safety Focus</div>
              </div>
            </div>

            <div className="about-preview-content">
              <span className="section-label">Introducing Challo</span>
              <h2 className="section-title">
                Redefining Everyday Mobility in Your City
              </h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
                <strong>Challo</strong> is an indigenous ride-booking technology platform built to solve the everyday commuting challenges of citizens across Telangana. Whether you are navigating peak traffic hours on a bike taxi, taking an auto to the railway station, booking a family cab, or requiring emergency ambulance transport — Challo connects you to reliable drivers in real-time.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                With a driver-first philosophy offering an honest commission model and passenger-centric safety protocols, Challo bridges convenience, speed, and affordability.
              </p>

              <div className="about-tags">
                <span className="about-tag"><span className="dot">●</span> Live GPS Tracking</span>
                <span className="about-tag"><span className="dot">●</span> In-App SOS Support</span>
                <span className="about-tag"><span className="dot">●</span> Verified Captains</span>
                <span className="about-tag"><span className="dot">●</span> Transparent Fares</span>
              </div>

              <Link to="/about" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Learn More About Challo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR RIDE SERVICES ────────────────────────────── */}
      <section className="services section">
        <div className="container">
          <div className="services-header">
            <span className="section-label">Vehicle Fleet</span>
            <h2 className="section-title">Our Supported Ride Services</h2>
            <div className="divider divider-center"></div>
            <p className="section-subtitle">
              Choose the ride that fits your schedule, luggage, and budget. All backed by verified partners and upfront pricing.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <div className="service-card" key={idx}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-card-image"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/services-overview.jpg';
                  }}
                />
                <div className="service-card-body">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {service.tagline}
                  </div>
                  <p>{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feat, fIdx) => (
                      <span className="service-feature" key={fIdx}>{feat}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE CHALLO? ───────────────────────────── */}
      <section className="why-challo section">
        <div className="container">
          <div className="why-header">
            <span className="section-label">Core Advantages</span>
            <h2 className="section-title">Why Commuters Choose Challo</h2>
            <div className="divider divider-center"></div>
            <p className="section-subtitle">
              Engineered from the ground up to deliver hassle-free transit for commuters and sustainable livelihood for driver partners.
            </p>
          </div>

          <div className="why-grid">
            {benefits.map((benefit, idx) => (
              <div className="why-card" key={idx}>
                <div className="why-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ─────────────────────────────────── */}
      <section className="how-it-works section">
        <div className="container">
          <div className="how-header">
            <span className="section-label">Simple Process</span>
            <h2 className="section-title">How To Book Your Ride in 3 Steps</h2>
            <div className="divider divider-center"></div>
            <p className="section-subtitle">
              Booking your next trip takes less than 30 seconds on the Challo mobile app.
            </p>
          </div>

          <div className="how-steps">
            <div className="how-step">
              <div className="step-number">1</div>
              <div className="step-icon">📲</div>
              <h3>Download & Sign Up</h3>
              <p>Install the Challo application from Google Play Store and complete rapid one-step mobile verification.</p>
            </div>

            <div className="how-step">
              <div className="step-number">2</div>
              <div className="step-icon">📍</div>
              <h3>Set Your Route</h3>
              <p>Enter your pickup point and destination to view live fare estimates and nearby available vehicles.</p>
            </div>

            <div className="how-step">
              <div className="step-number">3</div>
              <div className="step-icon">🚀</div>
              <h3>Choose & Challo!</h3>
              <p>Select Bike, Auto, Cab, or Ambulance, confirm your booking, and meet your captain with live GPS tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. APP PROMOTION & DOWNLOAD ─────────────────────── */}
      <section className="app-download section">
        <div className="container">
          <div className="app-download-inner">
            <div className="app-download-content">
              <span className="section-label">Get Started</span>
              <h2 className="section-title">
                Ready to Experience Seamless Travel?
              </h2>
              <div className="divider"></div>
              <p>
                Download the official <strong>Challo App</strong> on your Android device today. Enjoy introductory launch discounts, verified captains, prompt pickups, and round-the-clock safety features right at your fingertips.
              </p>

              <div className="app-download-buttons">
                <a 
                  href={SITE_CONFIG.playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-store"
                >
                  <span className="store-icon">▶</span>
                  <span className="store-text">
                    <small>GET IT ON</small>
                    <strong>Google Play</strong>
                  </span>
                </a>
              </div>

              <div className="app-features-mini">
                <div className="mini-feature">
                  <span className="icon">✓</span>
                  <span>Lightweight & Fast</span>
                </div>
                <div className="mini-feature">
                  <span className="icon">✓</span>
                  <span>Telugu & English Support</span>
                </div>
                <div className="mini-feature">
                  <span className="icon">✓</span>
                  <span>Zero Surge Surprises</span>
                </div>
              </div>
            </div>

            <div className="app-download-visual">
              <div className="app-mockup-wrap">
                <img 
                  src="/images/app-mockup.jpg" 
                  alt="Challo Mobile App Interface" 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/promo-bike-ride.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CITIES WE SERVE ──────────────────────────────── */}
      <section className="cities-section section">
        <div className="container">
          <div className="cities-header">
            <span className="section-label">Expanding Footprint</span>
            <h2 className="section-title">Serving Communities Across {SITE_CONFIG.serviceRegion}</h2>
            <div className="divider divider-center"></div>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Challo is progressively expanding its network across key districts and urban centres.
            </p>
          </div>

          <div className="cities-wrap">
            {SITE_CONFIG.citiesServed.map((city, idx) => (
              <div className="city-pill" key={idx}>
                <span className="pin">📍</span>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

