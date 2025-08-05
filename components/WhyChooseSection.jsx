"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building,
  Zap,
  Award,
  Headphones,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const imageRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reasons = [
    {
      icon: Building,
      title: "Custom-Designed Solutions",
      description: "Tailored security systems designed specifically for your unique business requirements.",
      highlight: "No one-size-fits-all",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      image: "/images/whyChooseUs/1.png",
    },
    {
      icon: Zap,
      title: "Fast Install, Minimal Disruption",
      description: "Efficient installation processes that minimize downtime and keep operations running.",
      highlight: "Average 2-day setup",
      gradient: "from-emerald-500 via-teal-600 to-cyan-600",
      image: "/images/whyChooseUs/2.png",
    },
    {
      icon: Award,
      title: "Local Expertise, Enterprise Tools",
      description: "Washington DC Metro expertise with enterprise-grade security technology.",
      highlight: "DC specialists since 2013",
      gradient: "from-purple-500 via-violet-600 to-purple-600",
      image: "/images/whyChooseUs/3.png",
    },
    {
      icon: Headphones,
      title: "24/7 Responsive Support",
      description: "Round-the-clock technical support and monitoring for optimal performance.",
      highlight: "15-min response time",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      image: "/images/whyChooseUs/4.png",
    },
    {
      icon: Users,
      title: "Government & Enterprise Trusted",
      description: "Proven track record with government agencies and large enterprises.",
      highlight: "Security clearance ready",
      gradient: "from-rose-500 via-pink-600 to-rose-600",
      image: "/images/whyChooseUs/5.png",
    },
    {
      icon: Shield,
      title: "Cutting-Edge Technology",
      description: "Latest security innovations with AI analytics and smart automation.",
      highlight: "AI-powered detection",
      gradient: "from-cyan-500 via-blue-600 to-indigo-600",
      image: "/images/whyChooseUs/6.png",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            once: true
          }
        }
      );

      // Cards animation
      gsap.fromTo(cardsRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 80%",
            once: true
          }
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-slate-100 via-gray-200 to-black/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-md rounded-full border border-white/10 text-black/80 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Why Choose Deltacom</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-black/80 mb-6 leading-tight">
           {`Why We're The`} 
            <br />
            <span className="bg-gradient-to-r from-black  to-black/70 bg-clip-text text-transparent">
              Right Choice
            </span>
          </h2>
          
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Six compelling reasons why businesses across the DC Metro Area trust us with their security
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left - Reasons List */}
          <div className="lg:col-span-2 space-y-4">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isActive ? 'transform scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? 'bg-black/10 border-black/20 shadow-2xl'
                      : 'bg-black/5 border-black/10 hover:bg-black/8 hover:border-white/15'
                  }`}>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <div className={`absolute -left-1 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${reason.gradient}`}></div>
                    )}

                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? `bg-gradient-to-r shadow-lg scale-110` 
                          : 'bg-white/10'
                      }`}>
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className={`text-lg font-bold transition-colors duration-300 ${
                            isActive ? 'text-black' : 'text-gray-600'
                          }`}>
                            {reason.title}
                          </h3>
                          {isActive && <CheckCircle className="w-5 h-5 text-green-400" />}
                        </div>
                        
                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                          isActive ? 'text-gray-800' : 'text-gray-400'
                        }`}>
                          {reason.description}
                        </p>
                        
                        {/* Highlight Badge */}
                        <div className={`inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          isActive 
                            ? 'bg-black/10 text-black' 
                            : 'bg-black/5 text-gray-400'
                        }`}>
                          {reason.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Image Showcase */}
          <div className="lg:col-span-3">
            <div ref={imageRef} className="relative">
              
              {/* Background Card */}
              <div className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${
                'shadow-2xl border border-white/20'
              }`}>
                
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reasons[activeIndex].gradient} opacity-20 transition-all duration-1000`}></div>
                
                {/* Image Container */}
                <div className="relative p-8 lg:p-12">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                    
                    {/* Image */}
                    <div className="relative h-64 lg:h-80 mb-6">
                      <Image
                        src={reasons[activeIndex].image}
                        alt={reasons[activeIndex].title}
                        fill
                        className="object-contain transition-opacity duration-700"
                        priority
                      />
                    </div>
                    
                    {/* Image Caption */}
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {reasons[activeIndex].title}
                      </h4>
                      <p className="text-gray-800 leading-relaxed">
                        {reasons[activeIndex].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-r ${reasons[activeIndex].gradient} opacity-20 rounded-2xl blur-xl transition-all duration-1000`}></div>
                <div className={`absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-r ${reasons[activeIndex].gradient} opacity-30 rounded-xl blur-lg transition-all duration-1000`}></div>
              </div>
            </div>
                    <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 text-gray-800 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Ready to experience the difference?</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span>Get Free Security Assessment</span>
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-4 border-2 border-black/20 text-white rounded-2xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              About us 
            </button>
          </div>
        </div>
          </div>
        </div>

        {/* Call to Action */}

      </div>
    </section>
  );
};

export default WhyChooseSection;
