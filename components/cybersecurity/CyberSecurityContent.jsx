import React from "react";
import { Shield, Lock, Eye, Cloud, Users, CheckCircle } from "lucide-react";

const CyberSecurityContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#013a63] mb-4">
            Advanced Cyber Security Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Protect your business with enterprise-grade security technologies and expert consulting services.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-gray-50 rounded-lg p-6">
            <Shield className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-[#013a63] mb-3">Zero Trust Architecture</h3>
            <p className="text-slate-600 mb-4">
              Implement "never trust, always verify" security model with continuous authentication and authorization.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Identity verification
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Network segmentation
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Least privilege access
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <Eye className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-[#013a63] mb-3">Security Operations Center</h3>
            <p className="text-slate-600 mb-4">
              24/7 monitoring and incident response with advanced threat intelligence and analysis.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Real-time monitoring
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Threat hunting
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Incident response
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <Cloud className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-[#013a63] mb-3">Cloud Security</h3>
            <p className="text-slate-600 mb-4">
              Comprehensive cloud protection across AWS, Azure, and Google Cloud platforms.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                CSPM implementation
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Container security
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Cloud compliance
              </li>
            </ul>
          </div>

        </div>

        {/* Compliance Standards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#013a63] text-center mb-8">
            Compliance & Standards We Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-[#013a63] mb-2">ISO 27001</h4>
              <p className="text-sm text-slate-600">Information security management</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-[#013a63] mb-2">SOC 2</h4>
              <p className="text-sm text-slate-600">Security controls audit</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-[#013a63] mb-2">NIST Framework</h4>
              <p className="text-sm text-slate-600">Cybersecurity best practices</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-[#013a63] mb-2">PCI DSS</h4>
              <p className="text-sm text-slate-600">Payment card security</p>
            </div>
          </div>
        </div>

        {/* Security Assessment */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#013a63] mb-4">
            Free Security Assessment
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Get a comprehensive evaluation of your current security posture and receive 
            actionable recommendations to strengthen your defenses.
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-slate-700">Network vulnerability scan</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-slate-700">Security policy review</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-slate-700">Compliance gap analysis</span>
            </div>
          </div>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-[#013a63] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Schedule Assessment
          </a>
        </div>

      </div>
    </section>
  );
};

export default CyberSecurityContent;
