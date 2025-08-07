import React, { useEffect, useRef } from "react";
import Image from "next/image";
import HeroImage from "../../public/images/contact/conatct.jpg";
import { Shield } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".hero-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative md:mt-[120px] mt-20 py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          height={100}
          width={100}
          src={HeroImage}
          alt="Security Consultation Background"
          className="w-full h-full object-cover"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 hero-item">
            Get Your <span className="text-white">Free</span> Security Consultation
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 hero-item">
            Ready to secure your business? Contact our security experts for a comprehensive assessment
            and customized solution designed specifically for your needs.
          </p>

          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 hero-item">
            <Shield className="h-5 w-5 text-white mr-2" />
            <span className="text-white font-medium">Trusted by 1000+ Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
