import React, { useEffect, useRef } from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurValues = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading & description
      gsap.fromTo('.animate-section',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
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

  return (
    <section ref={containerRef} className="py-20 bg-slate-50 animate-sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-section">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            These values guide every decision we make and every solution we deliver.
          </p>
        </div>

        {/* Cards */}
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
  );
};

export default OurValues;
