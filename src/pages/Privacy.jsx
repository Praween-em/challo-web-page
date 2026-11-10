import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="privacy-page">
      <SEO 
        title="Privacy Policy" 
        description="Official Privacy Policy of the Challo mobile application explaining how personal data, GPS location, and ride history are collected and protected." 
      />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="badge badge-orange" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', marginBottom: '1rem' }}>
            Data Privacy & Security
          </span>
          <h1>Privacy Policy</h1>
          <p>Effective Date: {SITE_CONFIG.privacyEffectiveDate}</p>
        </div>
      </div>

      <div className="legal-content">
        <div style={{ padding: '1rem 1.25rem', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 'var(--radius-md)', marginBottom: '2rem', fontSize: '0.9rem', color: '#1E40AF' }}>
          <strong>Your Privacy Matters:</strong> This Privacy Policy describes how <strong>{SITE_CONFIG.companyName}</strong> collects, uses, protects, and discloses information gathered when you download, install, or use the Challo mobile application and website in accordance with the Information Technology Act, 2000 and Digital Personal Data Protection (DPDP) standards.
        </div>

        <h2>1. Introduction</h2>
        <p>
          At <strong>{SITE_CONFIG.companyName}</strong> ("we", "our", or "us"), we prioritize the privacy and security of our passengers and ride partners. This document outlines our data governance policies and the explicit rights you hold regarding your personal information.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We collect only such information as is strictly necessary to deliver efficient, safe, and transparent ride-hailing services:
        </p>
        <ul>
          <li><strong>Identity & Contact Details:</strong> Name, mobile phone number, and optional email address collected during account registration.</li>
          <li><strong>Location Information:</strong> Precise and approximate geographic location collected through your device’s GPS, Wi-Fi, and cellular signals when the app is active in the foreground or background (for ongoing ride navigation and safety tracking).</li>
          <li><strong>Ride & Transactional Data:</strong> Pickup and drop-off coordinates, route timestamps, vehicle category selected, total distance, fare calculations, and payment status.</li>
          <li><strong>Device & Technical Data:</strong> Device model, operating system version, unique device identifiers, IP address, network carrier, and crash reports.</li>
          <li><strong>Driver Partner Information:</strong> Driving license, vehicle registration certificate, fitness certificate, insurance papers, bank payout details, and identity documents required for verification.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>Your information is processed to:</p>
        <ul>
          <li>Facilitate instant driver matching and accurate route navigation.</li>
          <li>Calculate transparent fares based on real-time road distances.</li>
          <li>Ensure passenger and driver safety through continuous live trip monitoring and emergency SOS functionality.</li>
          <li>Send booking confirmations, OTP verification codes, digital trip receipts, and critical service notifications.</li>
          <li>Prevent fraudulent activities, duplicate accounts, and unauthorized platform access.</li>
          <li>Resolve customer support tickets, fare disputes, and grievances.</li>
        </ul>

        <h2>4. Precise Location Permissions</h2>
        <p>
          Location data is the core enabler of ride-hailing functionality:
        </p>
        <ul>
          <li><strong>Foreground Location:</strong> Used to identify your current pickup address and display nearby available Captains.</li>
          <li><strong>Background Location (During Active Trip):</strong> For driver partners and passengers who opt into active safety sharing, background location tracks the vehicle along the designated route to ensure adherence to safety protocols until trip completion.</li>
          <li>You may revoke location permissions through your Android device settings at any time; however, real-time ride booking and pickup tracking cannot function without location access.</li>
        </ul>

        <h2>5. Information Sharing & Disclosure</h2>
        <p>
          We do <strong>not</strong> sell, rent, or trade your personal data to third-party data brokers. Information is shared strictly under the following operational circumstances:
        </p>
        <ul>
          <li><strong>With Ride Partners (Captains):</strong> We share the passenger's first name, pickup location, and drop-off coordinates. Masked phone numbers or in-app call routing may be used to protect passenger privacy.</li>
          <li><strong>With Passengers:</strong> We share the Captain's registered name, vehicle model, vehicle registration number, photograph, and contact option for pickup coordination.</li>
          <li><strong>Emergency Medical Transport (Ambulance):</strong> For ambulance requests, patient location and contact numbers are provided directly to authorized medical response drivers to ensure zero delay.</li>
          <li><strong>Emergency Contacts & Law Enforcement:</strong> If an in-app SOS alert is triggered or where legally mandated by judicial orders, state police, or regulatory authorities under applicable Indian laws.</li>
          <li><strong>Payment Processors:</strong> Encrypted transaction identifiers are shared with certified payment gateways to securely authorize and verify UPI, card, and net-banking transactions.</li>
        </ul>

        <h2>6. Data Security Measures</h2>
        <p>
          We enforce robust administrative, technical, and physical security measures to safeguard your information:
        </p>
        <ul>
          <li>Industry-standard TLS/SSL encryption for data in transit across mobile devices and servers.</li>
          <li>Restricted access to user data on a need-to-know basis for authorized support personnel only.</li>
          <li>Continuous monitoring against security vulnerabilities and unauthorized intrusion attempts.</li>
        </ul>

        <h2>7. Data Retention Policy</h2>
        <p>
          We retain your personal data and ride history for as long as your Challo account remains active and as required to fulfill statutory tax, accounting, and motor vehicle regulation requirements under Indian law. When data is no longer necessary for operational or legal purposes, it is securely anonymized or permanently deleted.
        </p>

        <h2>8. User Rights & Account Deletion</h2>
        <p>As a Challo user, you possess the right to:</p>
        <ul>
          <li>Access and review your profile details and ride history inside the app.</li>
          <li>Update or correct inaccurate profile details.</li>
          <li><strong>Request Account & Data Deletion:</strong> You can request permanent deactivation of your account and deletion of associated personal data directly within the app settings or by writing to <strong>{SITE_CONFIG.contactEmail}</strong> with the subject "Data Deletion Request". Upon identity verification, your data will be purged within statutory timelines, subject to mandatory regulatory retentions.</li>
        </ul>

        <h2>9. Children’s Privacy</h2>
        <p>
          The Challo platform is not intended for unsupervised use by individuals under the age of 18. We do not knowingly collect personal information directly from minors. If we discover that a child under 18 has submitted personal information without verified parental consent, we will promptly delete such records.
        </p>

        <h2>10. Third-Party Links & Services</h2>
        <p>
          Our application and website may include links to external services such as Google Play Store, map tile providers, or payment gateways. We are not responsible for the privacy practices of external third parties, and we encourage you to inspect their respective privacy policies.
        </p>

        <h2>11. Updates to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to accommodate technological enhancements, new features, or legislative amendments. Any changes will be posted on this page with an updated "Effective Date".
        </p>

        <h2>12. Contact for Privacy Matters</h2>
        <p>
          For questions, feedback, or grievance redressal concerning this Privacy Policy or your personal information, please contact:
        </p>
        <p>
          <strong>Privacy & Data Protection Officer:</strong> <span className="legal-placeholder">[Data Protection Officer Name]</span><br />
          <strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.contactEmail}`}>{SITE_CONFIG.contactEmail}</a><br />
          <strong>Platform:</strong> {SITE_CONFIG.companyFullName}
        </p>
      </div>
    </div>
  );
}

