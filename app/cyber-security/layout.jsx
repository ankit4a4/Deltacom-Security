import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deltacomsecurity.com';
const pageUrl = `${siteUrl}/cyber-security`;

export const metadata = {
  title: "Cybersecurity & Network Defense—Stay Ahead of Digital Threats",
  description: "Comprehensive cyber security solutions for businesses. Protect your digital assets with advanced threat detection, network security, data protection, and cybersecurity consulting from Deltacom Security.",
  keywords: "cyber security solutions, cybersecurity services, network security, data protection, threat detection, security consulting, IT security, endpoint protection, firewall solutions, cyber security assessment, deltacom security",
  authors: [{ name: "Deltacom Security" }],
  
  // Open Graph
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: "Cybersecurity & Network Defense—Stay Ahead of Digital Threats",
    description: "Comprehensive cyber security solutions for businesses. Protect your digital assets with advanced threat detection, network security, data protection, and cybersecurity consulting from Deltacom Security.",
    siteName: 'Deltacom Security',
    images: [
      {
        url: `${siteUrl}/images/cyber-security-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Deltacom Security Cyber Security Solutions - Digital Protection & IT Security Services',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "Cyber Security Solutions - Digital Protection & IT Security | Deltacom Security",
    description: "Comprehensive cyber security solutions for businesses. Protect your digital assets with advanced threat detection, network security, data protection, and cybersecurity consulting from Deltacom Security.",
    images: [`${siteUrl}/images/cyber-security-og-image.jpg`],
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
  
  category: 'Cybersecurity Services',
};

export default function CyberSecurityLayout({ children }) {
  return (
    <>
      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cyber Security Solutions",
            "description": "Comprehensive cyber security solutions including threat detection, network security, data protection, endpoint security, and cybersecurity consulting for businesses.",
            "provider": {
              "@type": "Organization",
              "name": "Deltacom Security",
              "url": siteUrl
            },
            "serviceType": "Cybersecurity Services",
            "areaServed": {
              "@type": "Place",
              "name": "Your Service Area" // Update with your actual service area
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Cyber Security Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Network Security Solutions",
                    "description": "Advanced firewall management, intrusion detection systems, and network monitoring"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Endpoint Protection",
                    "description": "Comprehensive endpoint security with antivirus, anti-malware, and device management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Data Protection & Backup",
                    "description": "Secure data encryption, backup solutions, and disaster recovery planning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Security Awareness Training",
                    "description": "Employee cybersecurity training and awareness programs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Vulnerability Assessment",
                    "description": "Comprehensive security audits and penetration testing services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Incident Response",
                    "description": "24/7 cybersecurity incident response and breach management"
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
                "name": "Cyber Security Solutions",
                "item": pageUrl
              }
            ]
          })
        }}
      />

      {/* Structured Data - Technology Company */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechnologyService",
            "name": "Deltacom Security - Cyber Security Solutions",
            "description": "Professional cybersecurity services provider specializing in digital threat protection, network security, data protection, and IT security consulting.",
            "url": pageUrl,
            "telephone": "+1-xxx-xxx-xxxx", // Update with actual phone
            "email": "cybersecurity@deltacomsecurity.com", // Update with actual email
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
            "openingHours": [
              "Mo-Fr 09:00-17:00"
            ],
            "priceRange": "$$$",
            "serviceArea": {
              "@type": "Place",
              "name": "Your Service Area"
            },
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Cybersecurity Certification"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "name": "ISO 27001 Compliance"
              }
            ]
          })
        }}
      />

      {/* Structured Data - Security Software Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Cyber Security Solutions Suite",
            "description": "Complete cybersecurity protection including threat detection, network security, endpoint protection, and incident response",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": "Windows, macOS, Linux",
            "provider": {
              "@type": "Organization",
              "name": "Deltacom Security"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "USD",
              "seller": {
                "@type": "Organization",
                "name": "Deltacom Security"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "75" // Update with actual ratings if available
            }
          })
        }}
      />

      {/* Structured Data - FAQ Schema for Cybersecurity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What cyber security services does Deltacom Security offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Deltacom Security offers comprehensive cybersecurity solutions including network security, endpoint protection, data protection and backup, vulnerability assessments, security awareness training, and 24/7 incident response services."
                }
              },
              {
                "@type": "Question",
                "name": "How does network security protect my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Network security protects your business through advanced firewall management, intrusion detection systems, network monitoring, and threat prevention that safeguards your digital infrastructure from cyber attacks and unauthorized access."
                }
              },
              {
                "@type": "Question",
                "name": "What is included in endpoint protection services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our endpoint protection services include comprehensive antivirus and anti-malware solutions, device management, real-time threat monitoring, and security updates to protect all devices connected to your network."
                }
              }
            ]
          })
        }}
      />

      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}
