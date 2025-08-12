import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deltacomsecurity.com';
const pageUrl = `${siteUrl}/commercial-security`;

export const metadata = {
  title: "Commercial Security Solutions - Advanced Protection | Deltacom Security",
  description: "Comprehensive commercial security solutions for businesses. Protect your property, assets, and employees with Deltacom Security's advanced surveillance systems, access control, and integrated security technology.",
  keywords: "commercial security solutions, business security systems, commercial surveillance, access control, security cameras, commercial CCTV, business protection, enterprise security, commercial alarm systems, deltacom security",
  authors: [{ name: "Deltacom Security" }],
  
  // Open Graph
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: "Commercial Security Solutions - Advanced Protection | Deltacom Security",
    description: "Comprehensive commercial security solutions for businesses. Protect your property, assets, and employees with Deltacom Security's advanced surveillance systems, access control, and integrated security technology.",
    siteName: 'Deltacom Security',
    images: [
      {
        url: `${siteUrl}/images/commercial-security-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Deltacom Security Commercial Security Solutions - Business Protection Systems',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "Commercial Security Solutions - Advanced Protection | Deltacom Security",
    description: "Comprehensive commercial security solutions for businesses. Protect your property, assets, and employees with Deltacom Security's advanced surveillance systems, access control, and integrated security technology.",
    images: [`${siteUrl}/images/commercial-security-og-image.jpg`],
    creator: '@deltacomsecurity',
    site: '@deltacomsecurity',
  },
  
  // Additional
  alternates: {
    canonical: pageUrl,
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  category: 'Security Services',
};

export default function CommercialSecurityLayout({ children }) {
  return (
    <>
      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Security Solutions",
            "description": "Comprehensive commercial security solutions for businesses including surveillance systems, access control, and integrated security technology.",
            "provider": {
              "@type": "Organization",
              "name": "Deltacom Security",
              "url": siteUrl
            },
            "serviceType": "Commercial Security Services",
            "areaServed": {
              "@type": "Place",
              "name": "Your Service Area" // Update with your actual service area
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Commercial Security Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CCTV Surveillance Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Access Control Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Alarm Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Integrated Security Solutions"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": `${siteUrl}/services`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Commercial Security Solutions",
                "item": pageUrl
              }
            ]
          })
        }}
      />

      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SecurityService",
            "name": "Deltacom Security - Commercial Security Solutions",
            "description": "Professional commercial security solutions provider specializing in CCTV surveillance, access control, and integrated security systems for businesses.",
            "url": pageUrl,
            "telephone": "+1-xxx-xxx-xxxx", // Update with actual phone
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Your City",
              "addressRegion": "Your State",
              "postalCode": "Your ZIP",
              "addressCountry": "Your Country"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "Your Latitude",
              "longitude": "Your Longitude"
            },
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "Place",
              "name": "Your Service Area"
            }
          })
        }}
      />

      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}
