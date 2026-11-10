import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="terms-page">
      <SEO 
        title="Terms and Conditions" 
        description="Official Terms and Conditions for using the Challo ride-booking application, platform services, and user accounts." 
      />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="badge badge-orange" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', marginBottom: '1rem' }}>
            Legal Framework
          </span>
          <h1>Terms and Conditions</h1>
          <p>Effective Date: {SITE_CONFIG.termsEffectiveDate}</p>
        </div>
      </div>

      <div className="legal-content">
        <div style={{ padding: '1rem 1.25rem', background: '#FEF3C7', border: '1px solid #FCD34D', borderRadius: 'var(--radius-md)', marginBottom: '2rem', fontSize: '0.9rem', color: '#92400E' }}>
          <strong>Legal Disclaimer:</strong> These Terms and Conditions outline the operational policies and obligations governing the use of the <strong>Challo</strong> mobile application and website. Specific entity details marked with brackets are configuration placeholders subject to company registration and regulatory certifications.
        </div>

        <h2>1. Introduction & Acceptance of Terms</h2>
        <p>
          Welcome to <strong>{SITE_CONFIG.companyName}</strong> ("Platform", "we", "us", or "our"), operated by <span className="legal-placeholder">[Company Legal Entity Name / Challo Mobility Solutions]</span>. By accessing, downloading, or using the Challo mobile application or related digital services, you agree to be legally bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not access or use our platform.
        </p>

        <h2>2. Description of the Challo Platform</h2>
        <p>
          Challo operates an intermediary technology platform connecting independent passenger users looking for transportation ("Passengers") with registered, third-party independent vehicle operators and fleet owners ("Ride Partners" or "Captains"). The transportation categories enabled on the platform include:
        </p>
        <ul>
          <li><strong>Bike Taxi:</strong> Two-wheeler motorized point-to-point passenger transport.</li>
          <li><strong>Auto Taxi:</strong> Three-wheeler passenger transport operated as per applicable regional meter/guideline tariffs.</li>
          <li><strong>Car Taxi:</strong> Four-wheeler private cabs (Hatchback, Sedan, SUV).</li>
          <li><strong>Ambulance Service:</strong> On-demand non-emergency and emergency medical passenger transfer facilitation.</li>
        </ul>
        <p>
          Challo acts strictly as a digital technology aggregator and facilitator. Challo does not own or operate transportation vehicles (except where explicitly notified) and does not directly provide transportation services.
        </p>

        <h2>3. User Eligibility & Account Registration</h2>
        <p>
          To create an account and book rides on Challo:
        </p>
        <ul>
          <li>You must be at least 18 years of age or possess the legal capacity to enter into binding contracts under Indian law.</li>
          <li>You must provide accurate and verifiable registration details, including your primary mobile phone number, name, and valid identification where applicable.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials and One Time Passwords (OTPs). Any activity conducted through your authenticated account will be deemed your responsibility.</li>
        </ul>

        <h2>4. Ride Booking & Cancellations</h2>
        <p>
          When a passenger requests a ride through the Challo app, the request is matched with nearby available Captains based on proximity and vehicle type.
        </p>
        <ul>
          <li><strong>Booking Confirmation:</strong> A booking is confirmed only when an assigned Captain accepts the trip request and a verified OTP/vehicle registration is generated.</li>
          <li><strong>Passenger Cancellations:</strong> Passengers may cancel a ride request before or after assignment. If cancellation occurs after an unreasonable delay or after the Captain has arrived at the pickup location, a reasonable cancellation fee may apply to compensate the Captain's fuel and time.</li>
          <li><strong>Captain Cancellations:</strong> While we discourage partner cancellations, exceptional conditions (such as vehicle breakdown, medical emergencies, or passenger misconduct) may necessitate trip cancellations.</li>
        </ul>

        <h2>5. Fare Estimates & Payments</h2>
        <p>
          Challo provides upfront fare estimates based on calculated distance, route duration, vehicle type, and prevailing base tariffs.
        </p>
        <ul>
          <li><strong>Transparent Pricing:</strong> Challo strives to maintain fair, predictable fares without unfair surge exploitation. Fares may vary depending on local toll taxes, parking fees, or route diversions requested by the passenger.</li>
          <li><strong>Payment Methods:</strong> Users can pay through approved electronic channels (UPI, Debit/Credit Card, Mobile Wallets) or Cash directly to the Captain upon ride completion.</li>
          <li><strong>Disputes:</strong> Any fare dispute or billing discrepancy must be reported through the app helpdesk or to <strong>{SITE_CONFIG.contactEmail}</strong> within 72 hours of ride completion.</li>
        </ul>

        <h2>6. Responsibilities of Passengers</h2>
        <p>Passengers using Challo agree to:</p>
        <ul>
          <li>Treat driver partners with respect, dignity, and courtesy.</li>
          <li>Wear provided safety helmets on Bike Taxi rides in compliance with the Motor Vehicles Act.</li>
          <li>Wear seatbelts when riding inside four-wheeler cabs.</li>
          <li>Not consume alcohol, contraband, or smoke inside partner vehicles.</li>
          <li>Not overload vehicles beyond the permissible legal seat limit.</li>
          <li>Verify driver details and vehicle registration numbers prior to boarding.</li>
        </ul>

        <h2>7. Responsibilities of Ride Partners</h2>
        <p>Ride Partners (Captains) agree to:</p>
        <ul>
          <li>Possess valid commercial or transport driving licenses, active vehicle registration, pollution control certificates, and third-party insurance coverage.</li>
          <li>Maintain their vehicles in clean, roadworthy, and safe operational conditions.</li>
          <li>Comply with all state traffic regulations, speed limits, and passenger safety guidelines.</li>
          <li>Never solicit off-platform cash rides from Challo matched users.</li>
        </ul>

        <h2>8. Safety & Prohibited Activities</h2>
        <p>
          Safety is paramount. Challo reserves the immediate right to suspend or ban any user or partner engaging in:
        </p>
        <ul>
          <li>Harassment, abusive language, violence, or discrimination based on caste, religion, gender, or orientation.</li>
          <li>Using the platform for illegal cargo transport, hazardous material transfer, or any unlawful activity.</li>
          <li>Attempting to tamper with, decompile, reverse-engineer, or spam the Challo software application or GPS systems.</li>
        </ul>

        <h2>9. Platform Availability & Service Limitations</h2>
        <p>
          Challo endeavors to provide continuous and uninterrupted digital service. However, we do not warrant that the application will always function without temporary server downtimes, GPS satellite inaccuracies, or telecommunication network failures. Ride availability is dependent on third-party driver density in your specific geographic zone.
        </p>

        <h2>10. Third-Party Services & Payment Gateways</h2>
        <p>
          Payment transactions may be facilitated through RBI-authorized payment gateways, third-party UPI applications, and mapping providers (such as Google Maps/OpenStreetMap). Your use of such ancillary services is governed by their respective independent terms and conditions.
        </p>

        <h2>11. Intellectual Property</h2>
        <p>
          All logos, trademarks, brand graphics, visual designs, slogans (including "{SITE_CONFIG.tagline}"), software code, and promotional collateral displayed on this website and in the app are the exclusive intellectual property of <strong>{SITE_CONFIG.companyName}</strong>. Unauthorized copying, imitation, or redistribution is strictly prohibited.
        </p>

        <h2>12. Limitation of Liability</h2>
        <p>
          To the maximum extent permissible by Indian law, Challo shall not be held liable for indirect, incidental, punitive, or consequential damages arising out of the conduct of third-party driver partners, traffic accidents, lost personal baggage, or delays caused by road blockades, weather, or natural disasters. Passengers are encouraged to verify their belongings before exiting the vehicle.
        </p>

        <h2>13. Suspension & Account Termination</h2>
        <p>
          Challo reserves the unilateral right to deactivate or terminate any user or driver partner account without prior notice in cases of fraud, security breaches, low partner ratings due to safety complaints, or persistent violation of these Terms.
        </p>

        <h2>14. Modifications to Terms</h2>
        <p>
          We may update or revise these Terms periodically to reflect evolving regulatory frameworks or new platform features. Continued use of the platform following any modifications constitutes your acknowledgment and acceptance of the revised Terms.
        </p>

        <h2>15. Grievance Redressal & Contact Information</h2>
        <p>
          In accordance with the Information Technology Act 2000 and the Consumer Protection (E-Commerce) Rules:
        </p>
        <p>
          <strong>Grievance Officer:</strong> <span className="legal-placeholder">[Officer Name / Support Lead]</span><br />
          <strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.contactEmail}`}>{SITE_CONFIG.contactEmail}</a><br />
          <strong>Jurisdiction:</strong> Courts situated in <span className="legal-placeholder">[Hyderabad, Telangana]</span> shall possess exclusive jurisdiction regarding any dispute arising out of these Terms.
        </p>
      </div>
    </div>
  );
}

