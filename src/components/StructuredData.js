export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.housefix.lk",
    name: "HOUSEFIX.LK (PVT) LTD",
    alternateName: "HOUSEFIX",
    description:
      "Professional construction, renovation, and home design company in Jaffna, Sri Lanka. Engineering-led teams delivering premium residential projects.",
    url: "https://www.housefix.lk",
    logo: "https://www.housefix.lk/logo.png",
    image: "https://www.housefix.lk/hero-bg.jpg",
    telephone: "+94765604711",
    email: "info@housefix.lk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaffna",
      addressRegion: "Northern Province",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.6615,
      longitude: 80.0255,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://web.facebook.com/HOUSEFIX.LK",
      "https://www.instagram.com/housefix.lk",
      "https://www.linkedin.com/company/housefix.lk",
      "https://youtube.com/@housefix-lk",
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Jaffna" },
      { "@type": "City", name: "Manipay" },
      { "@type": "City", name: "Suthumalai" },
      { "@type": "City", name: "Puththur" },
    ],
    founder: {
      "@type": "Person",
      name: "Eng. T. Sathurgasthan",
      jobTitle: "Managing Director",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Architectural Design",
            description: "Custom home design, 3D visualization, and council approvals",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Construction",
            description: "Full-scale residential construction from foundation to handover",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Renovation",
            description: "Modern renovations, structural upgrades, and interior remodeling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smart Home & Digital Solutions",
            description: "Smart home automation, CCTV, networking, and IT infrastructure",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
