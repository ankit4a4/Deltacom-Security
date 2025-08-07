import React, { useEffect, useRef } from 'react';
import { CheckCircle, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurMission = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-section',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white animate-sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Mission */}
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

          {/* Right Column: Vision */}
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
  );
};

export default OurMission;
