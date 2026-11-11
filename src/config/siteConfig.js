// ============================================================
// CHALLO WEBSITE - CENTRALIZED CONFIGURATION
// ============================================================
// Update this file with the actual values before deployment.
// All buttons, links, and contact info are sourced from here.
// ============================================================

export const getAssetUrl = (path) => {
  if (!path) return '';
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const SITE_CONFIG = {
  // Company Info
  companyName: "Challo",
  companyFullName: "Challo Taxi Service App",
  tagline: "మీ ప్రయాణం మా బాధ్యత",
  taglineEnglish: "Your Journey, Our Responsibility",
  description:
    "Challo is a modern ride-booking platform offering Bike Taxi, Auto Taxi, Car Taxi, and Ambulance services across Telangana.",

  // ⚠️ UPDATE: Add the actual Google Play Store link
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=YOUR_APP_PACKAGE_NAME",

  // ⚠️ UPDATE: Add App Store link if available, otherwise remove
  appStoreUrl: "", // Leave empty to hide App Store button

  // Contact details
  contactEmail: "ridechallo@gmail.com",
  contactPhone: "", // e.g. "+91-XXXXXXXXXX" — leave empty to hide
  contactAddress: "", // e.g. "123, ABC Road, Hyderabad, Telangana 500001" — leave empty to hide

  // Social Media
  instagramUrl: "https://www.instagram.com/challo_ride/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61594905800964",
  youtubeUrl: "",
  twitterUrl: "https://x.com/ChalloRide",

  // Legal dates
  // ⚠️ UPDATE: Set the actual effective dates
  termsEffectiveDate: "November 1, 2026",
  privacyEffectiveDate: "November 1, 2026",

  // Leadership (from verified marketing material)
  chairman: "Dr. B. Anil Kumar",
  chairmanTitle: "Chairman and Chief Editor",

  // Cities served (from verified marketing material)
  serviceRegion: "Telangana",
  citiesServed: [
    "Hyderabad",
    "Warangal",
    "Hanamkonda",
    "Kazipet",
    "Karimnagar",
    "Nizamabad",
    "Kamareddy",
    "Sirisilla",
    "Vemulawada",
  ],
};

export default SITE_CONFIG;

