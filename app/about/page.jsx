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

  // ... rest of your component data

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
              {`For over a decade, we've been the Washington, DC Metro Area's most trusted security provider, delivering innovative solutions that protect what matters most.`}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Fixed apostrophes */}
      <section className="py-20 bg-white animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-section">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {`To deliver smart, end-to-end security and IT solutions that protect people, property, and operations. We combine cutting-edge technology with local expertise to provide comprehensive security solutions that give our clients peace of mind.`}
              </p>
              {/* ... rest of content */}
            </div>
            <div className="animate-section">
              <div className="backdrop-blur-sm bg-white/70 border border-white/20 rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-orange-50">
                <Shield className="h-16 w-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  {`To be the leading security technology provider in the region, known for innovation, reliability, and exceptional customer service. We envision a future where advanced security technology seamlessly integrates with daily operations to create safer environments for everyone.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History - Fixed timeline accessibility */}
      <section className="py-20 bg-white animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {`From our founding to today, we've consistently grown and evolved to meet the changing security needs of our clients.`}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-orange-500 transform lg:-translate-x-0.5"></div>

            <div className="space-y-12" role="list" aria-label="Company timeline">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  role="listitem"
                  aria-label={`${milestone.year}: ${milestone.event}`}
                  className={`relative flex items-center animate-section ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline content */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed apostrophe */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {`Let's discuss how our experience and expertise can help secure your business.`}
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
