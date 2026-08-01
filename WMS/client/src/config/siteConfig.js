export const siteConfig = {
  // ==========================
  // Basic Business Information
  // ==========================
  companyName: "SK 1 Welding Workshop",

  shortTagline: "Design Your Vision. Our Strength.",

  tagline:
    "Strong, Reliable & Custom Steel and Welding Solutions for Residential and Commercial Projects.",

  description:
    "We provide professional Steel & welding and services including gates, railings, grills, sheds, staircases, structural welding and custom metal fabrication.",

  logo: "/logo.png",

  favicon: "/favicon.svg",

  // ==========================
  // Contact Information
  // ==========================
  contact: {
    phone: "+91 8002691444",

    alternatePhone: "+91 9199089893",

    email: "sk1weldingworkshop@gmail.com",

    whatsapp: "+918002691444",

    address: {
      line1: "Workshop Address",

      line2: "Motihari (Nimoia East || Purvi Champaran)",

      city: "Shekhauna nagarva, Bagaha",

      state: "Bihar",

      country: "India",

      postalCode: "845315",
    },
  },

  // ==========================
  // Business Hours
  // ==========================
  businessHours: {
    monday: "09:00 AM - 07:00 PM",

    tuesday: "09:00 AM - 07:00 PM",

    wednesday: "09:00 AM - 07:00 PM",

    thursday: "09:00 AM - 07:00 PM",

    friday: "09:00 AM - 07:00 PM",

    saturday: "09:00 AM - 07:00 PM",

    sunday: "Closed",
  },

  // ==========================
  // Website URLs
  // ==========================
  urls: {
    website: "https://yourwebsite.com",

    requestQuote: "/request-quote",

    services: "/services",

    portfolio: "/portfolio",

    contact: "/contact",
  },

  // ==========================
  // Social Media
  // ==========================
  socialLinks: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    twitter: "https://x.com/",
    youtube: "https://youtube.com",
  },
  // ==========================
  // SEO
  // ==========================
  seo: {
    title:
      "Professional Steel & Welding  Workshop Services",

    description:
      "Professional Steel, welding, fabrication, railing, gate, grill, shed, staircase and structural welding services.",

    keywords: [
      "Steel",

      "Welding",

      "Fabrication",

      "Metal Fabrication",

      "Gate Fabrication",

      "Railing",

      "Grill",

      "Structural Welding",

      "Custom Metal Work",
    ],

    ogImage: "/images/og-image.jpg",

    twitterCard: "summary_large_image",
  },

  // ==========================
  // Homepage Hero
  // ==========================
  hero: {
    badge: "SK1 Welding Workshop",

    title:
      "Design Your Vision. Our Strength.",

    subtitle:
      "Custom gates, railings, grills, sheds and metal fabrication for residential and commercial projects.",

    primaryButton: {
      text: "Request a Quote",

      link: "/request-quote",
    },

    secondaryButton: {
      text: "View Our Work",

      link: "/portfolio",
    },
  },

  // ==========================
  // CTA
  // ==========================
  cta: {
    title:
      "Need Professional Steel & Welding Services?",

    description:
      "Share your project details and receive a customized quotation.",

    buttonText: "Request a Quote",
  },

  // ==========================
  // Features
  // ==========================
  features: [
    "Experienced Fabrication",

    "Custom Designs",

    "Strong & Durable",

    "Professional Installation",

    "On-Time Delivery",
  ],

  // ==========================
  // Business Statistics
  // ==========================
  /**
   * IMPORTANT
   *
   * Use ONLY real numbers.
   *
   * Leave empty until verified.
   */
  stats: [],

  /*
  Example

  stats: [
    {
      label: "Projects Completed",
      value: "250+",
    },
  ]
  */

  // ==========================
  // Google Maps
  // ==========================
  googleMaps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.6371785298131!2d85.0684436757275!3d26.75877369228475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecb7d69b8cff0f%3A0x81e522c4a82dec08!2sSK1%20WELDING%20SHOP!5e0!3m2!1sen!2sin!4v1785570504476!5m2!1sen!2sin',

    mapLink: "https://maps.app.goo.gl/HWu1EireaxxgLbAR8",
  },

  // ==========================
  // Contact Form
  // ==========================
  forms: {
    maxImageUpload: 5,

    acceptedFormats: [
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".pdf",
    ],
  },

  // ==========================
  // Future APIs
  // ==========================
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || "",
  },
};