'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Users, Award, MapPin, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
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

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every solution is designed with security as the primary consideration, ensuring maximum protection.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'We tailor our services to meet the unique needs of each client, from small businesses to government agencies.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality installations and ongoing support services.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: '24/7 monitoring and support ensures your security systems are always operational when you need them.'
    }
  ];

  const milestones = [
    { year: '2014', event: 'Deltacom Security Founded' },
    { year: '2016', event: 'First Government Contract Awarded' },
    { year: '2018', event: 'Expanded to Cybersecurity Services' },
    { year: '2020', event: '500+ Installations Completed' },
    { year: '2022', event: 'Added Fire Protection Systems' },
    { year: '2024', event: '1000+ Satisfied Clients' }
  ];

  return (
    <div ref={containerRef} className="page-content">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Deltacom Security</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              For over a decade, we've been the Washington, DC Metro Area's most trusted security provider, 
              delivering innovative solutions that protect what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-section">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                To deliver smart, end-to-end security and IT solutions that protect people, property, and operations. 
                We combine cutting-edge technology with local expertise to provide comprehensive security solutions 
                that give our clients peace of mind.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-slate-700">Comprehensive Security Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-slate-700">Local Expertise & Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-slate-700">Cutting-Edge Technology</span>
                </div>
              </div>
            </div>
            <div className="animate-section">
              <div className="glass rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-orange-50">
                <Shield className="h-16 w-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be the leading security technology provider in the region, known for innovation, 
                  reliability, and exceptional customer service. We envision a future where advanced 
                  security technology seamlessly integrates with daily operations to create safer environments for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These values guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="animate-section">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl inline-flex mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From our founding to today, we've consistently grown and evolved to meet 
              the changing security needs of our clients.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-orange-500 transform lg:-translate-x-0.5"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center animate-section ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transform lg:-translate-x-2 z-10"></div>
                  
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="ml-12 lg:ml-0 bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-2">{milestone.year}</div>
                      <div className="text-lg font-semibold text-slate-900">{milestone.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-slate-900 animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-section">
            <MapPin className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Serving the Washington, DC Metro Area
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Our local expertise and deep understanding of the region's unique security challenges 
              make us the preferred choice for businesses and government agencies throughout the metro area.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glass-dark rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Washington, DC</h3>
                <p className="text-gray-300">Federal agencies, commercial buildings, and urban businesses</p>
              </div>
              <div className="glass-dark rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Northern Virginia</h3>
                <p className="text-gray-300">Tech companies, defense contractors, and corporate headquarters</p>
              </div>
              <div className="glass-dark rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Maryland Suburbs</h3>
                <p className="text-gray-300">Government facilities, healthcare systems, and educational institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss how our experience and expertise can help secure your business.
          </p>
          <Link
            href="/contact"
            className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}