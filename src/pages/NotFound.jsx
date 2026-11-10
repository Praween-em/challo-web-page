import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="not-found-page" style={{ 
      minHeight: '75vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: 'var(--spacing-4xl) var(--spacing-xl)',
      textAlign: 'center'
    }}>
      <SEO title="Page Not Found (404)" />
      <div style={{ maxWidth: '520px' }}>
        <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>
          404
        </div>
        <h1 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-secondary)', margin: '1rem 0' }}>
          Route Not Found
        </h1>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
          The page or route you are looking for does not exist or may have been moved. Let's get you back on track!
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}

