'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Shield,
  User,
  Building,
  MessageSquare
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(202) 555-SECURITY',
      subtitle: 'Call for immediate assistance',
      gradient: 'from-green-500 to-green-700'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@deltacomsecurity.com',
      subtitle: 'Get a response within 24 hours',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Washington, DC Metro Area',
      subtitle: 'Northern VA, DC, Maryland',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 8AM - 6PM',
      subtitle: '24/7 Emergency Support Available',
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  const services = [
    'Video Surveillance (CCTV)',
    'Access Control Systems',
    'Cybersecurity & IT Services',
    'Fire Protection Systems',
    'Networking Solutions',
    'Mobile Surveillance Units',
    'Other / Multiple Services'
  ];

  return (
    <div ref={containerRef} className="page-content">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Free</span> Security Consultation
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to secure your business? Contact our security experts for a comprehensive assessment 
              and customized solution designed specifically for your needs.
            </p>
            <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3">
              <Shield className="h-5 w-5 text-orange-300 mr-2" />
              <span className="text-orange-200 font-medium">Trusted by 1000+ Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {`Multiple ways to reach us. Choose what's most convenient for you.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="animate-section">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                    <div className={`p-4 bg-gradient-to-r ${info.gradient} rounded-2xl inline-flex mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h3>
                    <p className="text-lg font-semibold text-slate-700 mb-2">{info.details}</p>
                    <p className="text-sm text-slate-500">{info.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-50 animate-sections">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Request Your Free Consultation
            </h2>
            <p className="text-lg text-slate-600">
              {`Fill out the form below and we'll contact you within 24 hours to discuss your security needs.`}
            </p>
          </div>

          <div className="animate-section">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                        Company / Organization
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message / Project Details
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your security needs, facility size, timeline, or any specific requirements..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send My Request
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                // Success Message
                <div className="text-center py-12">
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Thank You for Your Request!
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    {`We've received your consultation request and will contact you within 24 hours to discuss your security needs.`}
                  </p>
                  <p className="text-sm text-slate-500">
                    For immediate assistance, call us at <strong>(202) 555-SECURITY</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-slate-900 animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-section">
            <MapPin className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Serving the Washington, DC Metro Area
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              We provide comprehensive security solutions throughout the greater Washington area, 
              including the District, Northern Virginia, and Maryland suburbs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Washington, DC</h3>
                <p className="text-gray-300 mb-4">Federal agencies, commercial buildings, and urban businesses</p>
                <div className="text-sm text-orange-400">✓ Government facilities</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Northern Virginia</h3>
                <p className="text-gray-300 mb-4">Tech companies, defense contractors, and corporate headquarters</p>
                <div className="text-sm text-orange-400">✓ Corporate campuses</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Maryland Suburbs</h3>
                <p className="text-gray-300 mb-4">Government facilities, healthcare systems, and educational institutions</p>
                <div className="text-sm text-orange-400">✓ Healthcare & education</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Need Emergency Security Support?
          </h2>
          <p className="text-lg text-red-100 mb-6">
            Our emergency support team is available 24/7 for existing clients experiencing security system issues.
          </p>
          <a
            href="tel:+12025555555"
            className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Emergency Support
          </a>
        </div>
      </section>
    </div>
  );
}
