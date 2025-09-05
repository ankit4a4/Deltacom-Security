import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Your icon imports (replace these with actual icons)
import {
  Network,
  Monitor,
  Eye,
  FileSearch,
  Server,
  Smartphone,
  CheckCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CybersecurityServices = () => {
  const sectionRef = useRef(null);

  const services = [
    {
      icon: Network,
      title: "Network Security",
      description:
        "Comprehensive network protection including firewalls, intrusion detection, and secure network architecture design.",
      features: [
        "Next-generation firewalls",
        "Intrusion detection/prevention",
        "Network segmentation",
        "VPN solutions",
        "Network monitoring",
        "Secure Wi-Fi implementation",
      ],
    },
    {
      icon: Monitor,
      title: "Endpoint Protection",
      description:
        "Advanced security for all devices including computers, mobile devices, and IoT endpoints across your organization.",
      features: [
        "Anti-malware protection",
        "Endpoint detection & response",
        "Device management",
        "Mobile device security",
        "IoT device protection",
        "Patch management",
      ],
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description:
        "24/7 security monitoring and incident response to detect and respond to threats in real-time.",
      features: [
        "24/7 SOC monitoring",
        "Threat intelligence",
        "Incident response",
        "Security analytics",
        "Compliance reporting",
        "Forensic analysis",
      ],
    },
    {
      icon: FileSearch,
      title: "Vulnerability Management",
      description:
        "Regular security assessments and vulnerability testing to identify and remediate security weaknesses.",
      features: [
        "Vulnerability scanning",
        "Penetration testing",
        "Security assessments",
        "Risk analysis",
        "Remediation planning",
        "Compliance auditing",
      ],
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description:
        "Secure IT infrastructure design and implementation with robust security controls and monitoring.",
      features: [
        "Secure architecture design",
        "Server hardening",
        "Database security",
        "Cloud security",
        "Backup & recovery",
        "Identity management",
      ],
    },
    {
      icon: Smartphone,
      title: "Security Awareness",
      description:
        "Employee training and awareness programs to build a human firewall against cyber threats.",
      features: [
        "Security awareness training",
        "Phishing simulation",
        "Policy development",
        "Incident reporting",
        "Security culture building",
        "Compliance training",
      ],
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".animate-section").forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-10 bg-slate-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-section">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Comprehensive Cybersecurity Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Multi-layered security approach covering all aspects of your digital
            infrastructure and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="animate-section">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl inline-flex mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013a63] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CybersecurityServices;
