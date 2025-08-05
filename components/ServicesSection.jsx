"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, ArrowRight } from "lucide-react";
import { Cctv, Key, BellElectric, Network, Truck } from "lucide-react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Memoized services data outside component
const SERVICES_DATA = [
  {
    id: "video-surveillance",
    slug: "video-surveillance",
    title: "Video Surveillance",
    subtitle: "CCTV Systems",
    description:
      "Advanced cloud and on-premise solutions with smart analytics and triple redundancy.",
    icon: Cctv,
    backgroundImage: "/images/services/camera.png", // Use WebP format
  },
  {
    id: "access-control",
    slug: "access-control",
    title: "Access Control",
    subtitle: "Security Systems",
    description:
      "Scalable access systems including Brivo enterprise solutions and advanced card access control.",
    icon: Key,
    backgroundImage: "/images/services/access-control.png",
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity",
    subtitle: "IT Services",
    description:
      "Comprehensive network security and infrastructure design with endpoint protection.",
    icon: Shield,
    backgroundImage: "/images/services/cybersecurity-background.png",
  },
  {
    id: "fire-protection",
    slug: "fire-protection",
    title: "Fire Protection",
    subtitle: "Safety Systems",
    description:
      "Critical fire protection with rapid response - fire doubles in size every minute.",
    icon: BellElectric,
    backgroundImage: "/images/services/fire-protection-background.png",
  },
  {
    id: "networking",
    slug: "networking",
    title: "Networking",
    subtitle: "Infrastructure",
    description:
      "Complete network design and deployment for wired and wireless networks across all sites.",
    icon: Network,
    backgroundImage: "/images/services/networking-background.png",
  },
  {
    id: "mobile-surveillance",
    slug: "mobile-surveillance",
    title: "Mobile Surveillance",
    subtitle: "Rapid Deployment",
    description:
      "Rapid deployment systems for temporary installations and high-risk environments.",
    icon: Truck,
    backgroundImage: "/images/services/mobile-surveillance-background.jpg",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef(null);

  // Memoize services to prevent recreation
  const services = useMemo(() => SERVICES_DATA, []);

  useEffect(() => {
    let ctx;

    const initAnimations = () => {
      ctx = gsap.context(() => {
        // Simplified title animation
        if (titleRef.current) {
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: titleRef.current,
                start: "top 85%",
                once: true, // Run only once
              },
            }
          );
        }

        // Simplified services animation
        if (servicesRef.current?.children) {
          gsap.fromTo(
            servicesRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
                once: true, // Run only once
              },
            }
          );
        }
      }, sectionRef);
    };

    // Use requestAnimationFrame for better performance
    requestAnimationFrame(initAnimations);

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-60 h-60 rounded-full border border-gray-200/30 bg-white/10"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full border border-gray-300/20 bg-gray-100/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optimized Header */}
        <header ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50 text-sm text-gray-600 mb-6">
            <Shield className="w-4 h-4" />
            <span>Security Solutions</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Security Services
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Protecting your people, property, and operations with cutting-edge
            technology across the DC Metro Area.
          </p>
        </header>

        {/* Optimized Services Grid */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Simplified CTA */}
        <div className="text-center mt-16">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Custom solutions for enterprise clients</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              Get Free Security Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
