'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, CheckCircle, ArrowRight, Star, Clock, Users } from 'lucide-react';
import Link from 'next/link';

const ServiceModal = ({ service, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    // Enhanced animations
    const ctx = gsap.context(() => {
      // Modal backdrop
      gsap.fromTo(modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power3.out' }
      );

      // Modal content with more sophisticated entrance
      gsap.fromTo(contentRef.current,
        { opacity: 0, scale: 0.8, y: 100, rotationX: -15 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          rotationX: 0,
          duration: 0.6, 
          ease: 'back.out(1.2)',
          delay: 0.1
        }
      );

      // Animate floating elements
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(el,
            { opacity: 0, scale: 0 },
            { 
              opacity: 1, 
              scale: 1, 
              duration: 0.5, 
              ease: 'back.out(2)',
              delay: 0.3 + index * 0.1
            }
          );

          // Continuous floating animation
          gsap.to(el, {
            y: -15,
            duration: 3 + index * 0.5,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
            delay: index * 0.3
          });
        }
      });
    });

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      ctx.revert();
    };
  }, [onClose]);

  const IconComponent = service.icon;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          ref={(el) => (floatingElementsRef.current[0] = el)}
          className="absolute top-20 right-20 w-32 h-32 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-gray-200/10 backdrop-blur-sm"
        ></div>
        <div 
          ref={(el) => (floatingElementsRef.current[1] = el)}
          className="absolute bottom-40 left-20 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-200/20 to-purple-200/20 backdrop-blur-sm rotate-45"
        ></div>
        <div 
          ref={(el) => (floatingElementsRef.current[2] = el)}
          className="absolute top-1/3 left-10 w-16 h-16 rounded-xl bg-gradient-to-br from-gray-200/30 to-white/20 backdrop-blur-sm -rotate-12"
        ></div>
      </div>

      <div 
        ref={contentRef}
        className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Enhanced Header */}
        <div className="relative px-8 py-10 overflow-hidden">
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-90`}></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full border border-white/20 -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-2xl bg-white/10 -translate-x-16 translate-y-16 rotate-45"></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 group z-10"
          >
            <X className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <div className="relative z-10">
            {/* Icon and title */}
            <div className="flex items-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-3xl mr-6 group">
                <IconComponent className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">{service.title}</h2>
                <p className="text-white/80 text-lg font-medium">{service.subtitle}</p>
              </div>
            </div>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              {service.description}
            </p>

            {/* Quick stats */}
            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Star className="w-4 h-4 text-yellow-300" />
                <span className="text-white text-sm font-medium">Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Clock className="w-4 h-4 text-green-300" />
                <span className="text-white text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Users className="w-4 h-4 text-blue-300" />
                <span className="text-white text-sm font-medium">Trusted by 500+ Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content with custom scrollbar */}
        <div className="overflow-y-auto max-h-[60vh] px-8 pb-8 custom-scrollbar">
          {/* Service Overview */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900">Service Overview</h3>
            </div>
            <div className="bg-gray-50/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.details}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900">Key Features & Benefits</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-start p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 hover:scale-105 transition-all duration-300"
                >
                  <div className="p-1 bg-green-100 rounded-lg mr-4 group-hover:bg-green-200 transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200/50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-300/20 to-transparent rounded-2xl -translate-x-12 translate-y-12 rotate-45"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Enhance Your Security?
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Get a comprehensive security assessment tailored to your specific needs. 
                Our experts will design a custom solution that scales with your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className={`group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r ${service.accent} text-white font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  onClick={onClose}
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <button
                  onClick={onClose}
                  className="px-10 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-300/50 text-gray-700 font-semibold rounded-2xl hover:bg-white hover:border-gray-400 transition-all duration-300 hover:scale-105"
                >
                  Maybe Later
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>No Commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Expert Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(156, 163, 175, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }
      `}</style>
    </div>
  );
};

export default ServiceModal;
