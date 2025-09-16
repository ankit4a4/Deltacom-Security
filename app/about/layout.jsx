import { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://deltacomsecurity.com";
const pageUrl = `${siteUrl}/about`;

export const metadata = {
  title: "About Us - Smart Security & IT Solutions | Deltacom Security",
  description:
    "Discover our mission to deliver comprehensive security and IT solutions. Learn about Deltacom Security's commitment to protecting people, property, and operations with cutting-edge technology and local expertise.",
  keywords:
    "about us, deltacom security, security solutions, IT solutions, comprehensive security, cutting-edge technology, local expertise, mission, vision, security technology provider",
  authors: [{ name: "Deltacom Security" }],

  // Open Graph
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "About Us - Smart Security & IT Solutions | Deltacom Security",
    description:
      "Discover our mission to deliver comprehensive security and IT solutions. Learn about Deltacom Security's commitment to protecting people, property, and operations with cutting-edge technology and local expertise.",
    siteName: "Deltacom Security",
    images: [
      {
        url: `${siteUrl}/images/about-us-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "About Deltacom Security - Mission and Vision for Security & IT Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us - Smart Security & IT Solutions | Deltacom Security",
    description:
      "Discover our mission to deliver comprehensive security and IT solutions. Learn about Deltacom Security's commitment to protecting people, property, and operations with cutting-edge technology and local expertise.",
    images: [`${siteUrl}/images/about-us-og-image.jpg`],
    creator: "@deltacomsecurity",
    site: "@deltacomsecurity",
  },

  alternates: {
    canonical: pageUrl,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Deltacom Security",
            description:
              "Discover our mission to deliver comprehensive security and IT solutions.",
            url: pageUrl,
            mainEntity: {
              "@type": "Organization",
              name: "Deltacom Security",
              description:
                "Smart, end-to-end security and IT solutions provider",
            },
          }),
        }}
      />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
