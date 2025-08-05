'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Flame, 
  Clock, 
  ShieldAlert, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Siren,
  Zap,
  Eye,
  Settings
} from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FireProtection() {
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

  const fireStats = [
    { number: '60', unit: 'seconds', description: 'Fire doubles in size every minute' },
    { number: '3-5', unit: 'minutes', description: 'Average time for fire to become deadly' },
    { number: '30', unit: 'seconds', description: 'Time to evacuate once alarm sounds' }
  ];

  const systems = [
    {
      icon: Eye,
      title: 'Fire Detection Systems',
      description: 'Advanced smoke, heat, and flame detection with intelligent monitoring and rapid response capabilities.',
      features: [
        'Multi-sensor smoke detection',
        'Heat and flame sensors',
        'Carbon monoxide detection',
        'Intelligent fire algorithms',
        'False alarm reduction',
        'Wireless & hardwired options'
      ]
    },
    {
      icon: Siren,
      title: 'Alarm & Notification',
      description: 'Comprehensive alerting systems ensuring everyone is notified immediately when fire is detected.',
      features: [
        'Audible and visual alarms',
        'Voice evacuation systems',
        'Mass notification integration',
        'Mobile alert systems',
        'Emergency lighting',
        'ADA compliant notifications'
      ]
    },
    {
      icon: Zap,
      title: 'Suppression Systems',
      description: 'Automatic fire suppression including sprinklers, clean agents, and specialized suppression systems.',
      features: [
        'Wet & dry sprinkler systems',
        'Pre-action suppression',
        'Clean agent systems',
        'Kitchen hood suppression',
        'Server room protection',
        'Industrial suppression'
      ]
    },
    {
      icon: Settings,
      title: 'Monitoring & Maintenance',
      description: '24/7 monitoring services with regular inspections and maintenance to ensure optimal performance.',
      features: [
        '24/7 central station monitoring',
        'Regular system inspections',
        'Preventive maintenance',
        'Code compliance testing',
        'Emergency repair service',
        'Detailed reporting'
      ]
    }
  ];

  const applications = [
    {
      title: 'Commercial Buildings',
      description: 'Comprehensive fire protection for office buildings, retail spaces, and commercial facilities.',
      icon: '🏢'
    },
    {
      title: 'Industrial Facilities',
      description: 'Specialized fire suppression for manufacturing, warehousing, and industrial operations.',
      icon: '🏭' 
    },
    {
      title: 'Healthcare Facilities',
      description: 'Advanced fire safety systems designed for hospitals, clinics, and medical facilities.',
      icon: '🏥'
    },
    {
      title: 'Educational Institutions',
      description: 'School and university fire protection systems with emergency evacuation capabilities.',
      icon: '🏫'
    },
    {
      title: 'Residential Properties',
      description: 'Multi-family housing and residential complex fire protection solutions.',
      icon: '🏠'
    },
    {
      title: 'Data Centers',
      description: 'Clean agent suppression systems specifically designed to protect critical IT infrastructure.',
      icon: '💻'
    }
  ];

  return (
    <div ref={containerRef} className="page-content">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-red-900 via-orange-900 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-3 mb-6">
              <AlertTriangle className="h-5 w-5 text-orange-300 mr-2" />
              <span className="text-orange-200 font-medium">Critical Life Safety Systems</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">Fire Protection</span> Systems
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Because fire doubles in size every minute, rapid detection and response can mean the difference 
              between a minor incident and a catastrophic loss. Our fire protection systems provide critical timing advantages.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Get Fire Safety Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Critical Timing Section */}
      <section className="py-20 bg-white animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <Clock className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Every Second Counts
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              Fire emergencies develop rapidly. Understanding the timeline is critical to effective fire protection planning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fireStats.map((stat, index) => (
                <div key={index} className="animate-section">
                  <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-red-700 mb-3">{stat.unit}</div>
                    <div className="text-slate-600">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-section bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 lg:p-12 text-center text-white">
            <ShieldAlert className="h-16 w-16 mx-auto mb-6 text-orange-200" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Rapid Response Fire Protection
            </h3>
            <p className="text-xl text-red-100 leading-relaxed">
              Our fire protection systems are designed for the fastest possible detection and response, 
              giving you precious extra seconds to save lives and protect property.
            </p>
          </div>
        </div>
      </section>

      {/* Fire Protection Systems */}
      <section className="py-20 bg-slate-50 animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Fire Protection Systems
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From detection to suppression, our integrated fire protection solutions provide complete coverage 
              and peace of mind for your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systems.map((system, index) => {
              const IconComponent = system.icon;
              return (
                <div key={index} className="animate-section">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl inline-flex mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{system.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{system.description}</p>
                    <ul className="space-y-2">
                      {system.features.map((feature, featureIndex) => (
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

      {/* Applications */}
      <section className="py-20 bg-white animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Fire Protection Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized fire protection solutions tailored to different facility types and risk profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="animate-section">
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300 text-center h-full">
                  <div className="text-4xl mb-4">{app.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{app.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Compliance */}
      <section className="py-20 bg-slate-900 animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-section">
            <Flame className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Code Compliance & Certification
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              All our fire protection installations meet or exceed local fire codes and NFPA standards, 
              ensuring your facility is fully compliant and properly protected.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="glass-dark rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">NFPA</div>
                <div className="text-gray-300 text-sm">Standards Compliant</div>
              </div>
              <div className="glass-dark rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">Local</div>
                <div className="text-gray-300 text-sm">Fire Code Compliance</div>
              </div>
              <div className="glass-dark rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">UL</div>
                <div className="text-gray-300 text-sm">Listed Equipment</div>
              </div>
              <div className="glass-dark rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">ADA</div>
                <div className="text-gray-300 text-sm">Accessibility Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Don't Wait - Fire Won't Wait
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Every facility needs proper fire protection. Get a professional assessment 
            and ensure your people and property are protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              Schedule Fire Safety Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}