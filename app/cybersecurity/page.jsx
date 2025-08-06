'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Network,
  Monitor,
  Server,
  Smartphone,
  Globe,
  FileSearch
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HeroImage from "../../public/images/cyber/banner.jpg"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Cybersecurity() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page entrance animation
      gsap.fromTo('.page-content',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Stagger animations for sections
      gsap.fromTo('.animate-section',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.animate-sections',
            start: 'top 70%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const threats = [
    { name: 'Ransomware', percentage: '41%', description: 'of attacks target small businesses' },
    { name: 'Phishing', percentage: '83%', description: 'of organizations experienced attacks' },
    { name: 'Data Breach', percentage: '$4.35M', description: 'average cost per breach' },
    { name: 'Downtime', percentage: '23 days', description: 'average recovery time' }
  ];

  const services = [
    {
      icon: Network,
      title: 'Network Security',
      description: 'Comprehensive network protection including firewalls, intrusion detection, and secure network architecture design.',
      features: [
        'Next-generation firewalls',
        'Intrusion detection/prevention',
        'Network segmentation',
        'VPN solutions',
        'Network monitoring',
        'Secure Wi-Fi implementation'
      ]
    },
    {
      icon: Monitor,
      title: 'Endpoint Protection',
      description: 'Advanced security for all devices including computers, mobile devices, and IoT endpoints across your organization.',
      features: [
        'Anti-malware protection',
        'Endpoint detection & response',
        'Device management',
        'Mobile device security',
        'IoT device protection',
        'Patch management'
      ]
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response to detect and respond to threats in real-time.',
      features: [
        '24/7 SOC monitoring',
        'Threat intelligence',
        'Incident response',
        'Security analytics',
        'Compliance reporting',
        'Forensic analysis'
      ]
    },
    {
      icon: FileSearch,
      title: 'Vulnerability Management',
      description: 'Regular security assessments and vulnerability testing to identify and remediate security weaknesses.',
      features: [
        'Vulnerability scanning',
        'Penetration testing',
        'Security assessments',
        'Risk analysis',
        'Remediation planning',
        'Compliance auditing'
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure IT infrastructure design and implementation with robust security controls and monitoring.',
      features: [
        'Secure architecture design',
        'Server hardening',
        'Database security',
        'Cloud security',
        'Backup & recovery',
        'Identity management'
      ]
    },
    {
      icon: Smartphone,
      title: 'Security Awareness',
      description: 'Employee training and awareness programs to build a human firewall against cyber threats.',
      features: [
        'Security awareness training',
        'Phishing simulation',
        'Policy development',
        'Incident reporting',
        'Security culture building',
        'Compliance training'
      ]
    }
  ];

  const industries = [
    {
      name: 'Government Agencies',
      description: 'Meeting strict security requirements and compliance standards for federal, state, and local government.',
      requirements: ['FISMA compliance', 'NIST framework', 'FedRAMP standards']
    },
    {
      name: 'Healthcare Organizations',
      description: 'HIPAA-compliant cybersecurity solutions protecting sensitive patient data and medical systems.',
      requirements: ['HIPAA compliance', 'Medical device security', 'Patient data protection']
    },
    {
      name: 'Financial Services',
      description: 'Robust security measures for banks, credit unions, and financial institutions handling sensitive data.',
      requirements: ['PCI DSS compliance', 'Financial regulations', 'Fraud prevention']
    },
    {
      name: 'Legal Firms',
      description: 'Attorney-client privilege protection with secure communication and document management systems.',
      requirements: ['Client confidentiality', 'Secure communications', 'Data retention policies']
    }
  ];

  return (
    <div ref={containerRef} className="page-content">
      {/* Hero Section */}
      <section className="relative md:mt-[120px] mt-20 py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            height={100}
            width={100}
            src={HeroImage}
            alt="Cybersecurity Background"
            className="w-full h-full object-cover"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-6">
              <AlertTriangle className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">Cyber Threats Are Increasing</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-white">Cybersecurity</span> & IT Services
            </h1>

            {/* Paragraph */}
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive cybersecurity solutions including network security, endpoint protection,
              and IT infrastructure services designed to protect your digital assets and operations.
            </p>

            {/* Button */}
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              <span className='bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent'>
                Get Security Assessment
              </span>

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>


      {/* Threat Landscape */}
      <section className="py-20 bg-white animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <Shield className="h-16 w-16 text-[#427DF6] mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              The Cyber Threat Landscape
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              Cyber threats are constantly evolving and becoming more sophisticated.
              Understanding the risks is the first step in building effective defenses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threats.map((threat, index) => (
                <div key={index} className="animate-section">
                  <div className=" border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-black mb-2">
                      {threat.percentage}
                    </div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">{threat.name}</div>
                    <div className="text-sm text-gray-500">{threat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-section bg-[#0F172A] rounded-3xl p-8 lg:p-12 text-center text-white">
            <Lock className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Proactive Cybersecurity Defense
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              {`Don't wait for an attack to happen. Our comprehensive cybersecurity solutions provide proactive protection against evolving threats.`}
            </p>
          </div>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section className="py-10 bg-slate-50 animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Cybersecurity Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Multi-layered security approach covering all aspects of your digital infrastructure
              and business operations.
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
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600">
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

      {/* Industry-Specific Solutions */}
      <section className="py-20 bg-white animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Industry-Specific Cybersecurity
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tailored cybersecurity solutions that meet the unique compliance requirements
              and security challenges of different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="animate-section">
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{industry.name}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Infrastructure Services */}
      <section className="py-20 bg-slate-900 animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <Globe className="h-16 w-16 text-[#427DF6] mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              IT Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Complete IT infrastructure design, deployment, and management services
              with security built in from the ground up.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
                <Server className="h-12 w-12 text-[#427DF6] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Infrastructure Design</h3>
                <p className="text-gray-300">Secure network architecture and system design with scalability and security in mind.</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
                <Network className="h-12 w-12 text-[#427DF6] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Network Management</h3>
                <p className="text-gray-300">Comprehensive network management with monitoring, maintenance, and optimization.</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
                <Shield className="h-12 w-12 text-[#427DF6] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security Integration</h3>
                <p className="text-gray-300">Security controls integrated throughout your IT infrastructure and operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[white]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Secure Your Digital Assets Today
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            {`Don't leave your business vulnerable to cyber attacks. Get a comprehensive security assessment and build robust defenses.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className=" px-8 border border-gary-100 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <span className='bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent'>
                Schedule Security Assessment
              </span>

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/"
              className="border border-gary-100  hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-whi transition-all duration-300"
            >
              <span className='bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent'>
                View All Services
              </span>

            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
