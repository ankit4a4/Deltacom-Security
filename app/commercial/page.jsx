'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import HeroImage from "../../public/images/commercial/HeroSectionIMage.jpg"
import {
  Building2,
  ShieldCheck,
  Camera,
  Key,
  Network,
  Flame,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award
} from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Commercial() {
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

  const solutions = [
    {
      icon: Camera,
      title: 'Video Surveillance Systems',
      description: 'Advanced CCTV with AI analytics, cloud storage, and real-time monitoring for comprehensive visual security.',
      features: ['4K Ultra HD cameras', 'AI behavior detection', 'Cloud & on-premise storage', 'Mobile monitoring']
    },
    {
      icon: Key,
      title: 'Access Control',
      description: 'Sophisticated entry systems with card readers, biometrics, and time-based access permissions.',
      features: ['Multi-factor authentication', 'Visitor management', 'Integration with HR systems', 'Audit trails']
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      description: 'Comprehensive IT security including network protection, endpoint security, and threat monitoring.',
      features: ['Network security', 'Endpoint protection', 'Threat intelligence', 'Security training']
    },
    {
      icon: Flame,
      title: 'Fire Protection',
      description: 'Complete fire safety systems with detection, suppression, and emergency notification capabilities.',
      features: ['Smoke & heat detection', 'Sprinkler systems', 'Emergency alerts', 'Code compliance']
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Robust networking solutions supporting all security systems and business operations.',
      features: ['Structured cabling', 'Wireless networks', 'Network monitoring', 'Redundancy planning']
    }
  ];

  const industries = [
    {
      name: 'Government Facilities',
      description: 'Federal, state, and local government buildings requiring the highest security standards.',
      icon: Building2
    },
    {
      name: 'Corporate Offices',
      description: 'Business headquarters and office buildings needing comprehensive security solutions.',
      icon: Users
    },
    {
      name: 'Healthcare Systems',
      description: 'Hospitals and medical facilities requiring HIPAA-compliant security measures.',
      icon: ShieldCheck
    },
    {
      name: 'Educational Institutions',
      description: 'Schools and universities focusing on safety and emergency response capabilities.',
      icon: Award
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Minimal Downtime',
      description: 'Our efficient installation process ensures your business operations continue with minimal interruption.'
    },
    {
      icon: Award,
      title: 'Compliance Assured',
      description: 'All installations meet industry standards and regulatory requirements for your sector.'
    },
    {
      icon: Users,
      title: 'Scalable Solutions',
      description: 'Systems designed to grow with your business, from single locations to enterprise-wide deployments.'
    },
    {
      icon: ShieldCheck,
      title: 'Integrated Security',
      description: 'All security systems work together seamlessly for comprehensive protection and monitoring.'
    }
  ];

  return (
    <div ref={containerRef} className="page-content">
      {/* Hero Section */}
      <section className="relative mt-[115px] h-[400px] flex flex-col items-center justify-center ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            width={100}
            height={100}
            src={HeroImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="">
                Commercial
              </span>{" "}
              Security Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive security systems designed for businesses, government facilities, and commercial properties
              throughout the Washington, DC Metro Area.
            </p>
            <Link
              href="/contact"
              className=" text-black bg-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              <span className='bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent'>
                Get Free Assessment
              </span>
              <ArrowRight className="ml-2 h-5 w-5" />


            </Link>
          </div>
        </div>
      </section>



      {/* Solutions Overview */}
      <section className="py-20 bg-white animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Complete Security Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From video surveillance to cybersecurity, we provide integrated solutions
              that protect your business comprehensively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="animate-section">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-slate-100">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl inline-flex mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
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

      {/* Industries Served */}
      <section className="py-20 bg-slate-50 animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized security solutions tailored to the unique requirements of different commercial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="animate-section">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start">
                      <div className="p-3 bg-[#396AE9] rounded-2xl mr-6 flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{industry.name}</h3>
                        <p className="text-slate-600 leading-relaxed">{industry.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Commercial */}
      <section className="py-20 bg-white animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Why Businesses Choose Deltacom
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our commercial clients rely on us for professional installations, ongoing support, and security expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="animate-section text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl inline-flex mb-6">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-slate-900 animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Our commercial installations have helped organizations improve security, reduce incidents,
              and ensure compliance across the Washington, DC Metro Area.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-dark rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  500+
                </div>
                <div className="text-gray-400 font-medium">Commercial Installations</div>
              </div>
              <div className="glass-dark rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  99.9%
                </div>
                <div className="text-gray-400 font-medium">System Uptime</div>
              </div>
              <div className="glass-dark rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-gray-400 font-medium">Monitoring & Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-[120px] bg-white ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Secure Your Commercial Property Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our experts design a comprehensive security solution tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white border shadow-sm text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <span className='bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent'>
                Schedule Free Assessment
              </span>

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
}