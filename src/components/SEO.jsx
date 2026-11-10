import React, { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Challo Ride-Booking Platform` : 'Challo | Your Ride. Your Way. Challo!';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Challo is a modern ride-booking platform providing quick, safe, and affordable Bike, Auto, Car, and Ambulance rides.');
    }
    
    window.scrollTo(0, 0);
  }, [title, description]);

  return null;
}

