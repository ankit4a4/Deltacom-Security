'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, CheckCircle, Star, Clock, Users, Phone, Mail,
  Play, Pause, ChevronLeft, ChevronRight
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ServiceDetailClient = ({ service , slug}) => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter()

  

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );

      // Content sections animation
      const sections = contentRef.current?.querySelectorAll('.animate-section');
      sections?.forEach((section, index) => {
        gsap.fromTo(section,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              delay: index * 0.1
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === service.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen md:mt-[120px] mt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20  overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-r from-black opacity-20`}></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

       

        {/* Hero Content */}
        <div className="hero-content  inset-0 flex items-center justify-center z-10">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              {service.description}
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-2 md:gap-8 mb-8">
              <div className="flex items-center  md:px-4 md:py-2 py-2 px-3 gap-1 bg-white/10 backdrop-blur-sm rounded-full">
                <Star className="w-5 h-5 text-white" />
                <span className="text-white font-medium text-sm">Enterprise Grade</span>
              </div>
              <div className="flex items-center md:gap-2 md:px-4 md:py-2 py-2 px-3 gap-1 bg-white/10 backdrop-blur-sm rounded-full">
                <Clock className="w-5 h-5 text-white" />
                <span className="text-white font-medium text-sm ">24/7 Support</span>
              </div>
              <div className="flex items-center md:gap-2 md:px-4 md:py-2 py-2 px-3 gap-1 bg-white/10 backdrop-blur-sm rounded-full">
                <Users className="w-5 h-5 text-white" />
                <span className="text-white font-medium text-sm">500+ Clients</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-10 py-4 bg-white text-gray-900 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <button
              onClick={() => router.push(`/services/${slug}/#case`)}
                className="px-10 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div ref={contentRef} className="relative z-10 -mt-10">
        {/* Features Section */}
        <section className="animate-section bg-white/90 backdrop-blur-xl rounded-t-[3rem] px-6 py-20 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Advanced Features & Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our {service.title.toLowerCase()} solutions incorporate the latest technology 
                to provide comprehensive security coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/80 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.accent} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <CheckCircle className="h-6 w-6 text-green-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="animate-section py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Equipment & Installation Gallery
            </h2>
            
            <div className="relative">
              <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src={service.gallery[currentImageIndex]}
                  alt={`${service.title} equipment`}
                  fill
                  className="object-cover"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {service.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? `bg-gradient-to-r ${service.accent}` 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="animate-section bg-white/70 backdrop-blur-xl py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Technical Specifications
                </h2>
                <div className="space-y-4">
                  {Object.entries(service.specifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between py-3 border-b border-gray-200/50">
                      <span className="font-medium text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-gray-900 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-gray-100">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="animate-section py-20 px-6 lg:px-8" id='case'>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Success Story
            </h2>
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.caseStudy.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.caseStudy.description}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {service.caseStudy.results.map((result, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="h-8 w-8 text-black mx-auto mb-3" />
                    <p className="font-medium text-gray-900">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="animate-section bg-slate-900 py-20 px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Enhance Your Security?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Get a comprehensive security assessment tailored to your specific needs. 
              Our experts will design a custom solution that scales with your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className={`px-10 py-4 bg-gradient-to-r ${service.accent} text-black font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                Get Free Consultation
              </Link>
          
            </div>

            {/* Contact Info */}
            <div className="flex items-center justify-center gap-8 mt-12 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(202) 555-1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@deltacomsecurity.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetailClient;
