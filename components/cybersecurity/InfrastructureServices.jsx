import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Globe, Server, Network, Shield } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const InfrastructureServices = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.animate-section').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.2,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#013a63] via-[#01497c] to-[#013a63] animate-sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-section">
          <Globe className="h-16 w-16 text-[#d6d5d5] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            IT Infrastructure Services
          </h2>
          <p className="text-xl text-gray-300/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Complete IT infrastructure design, deployment, and management services
            with security built in from the ground up.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-section backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
              <Server className="h-12 w-12 text-[#012a4a] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Infrastructure Design</h3>
              <p className="text-gray-300">Secure network architecture and system design with scalability and security in mind.</p>
            </div>
            <div className="animate-section backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
              <Network className="h-12 w-12 text-[#012a4a] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Network Management</h3>
              <p className="text-gray-300">Comprehensive network management with monitoring, maintenance, and optimization.</p>
            </div>
            <div className="animate-section backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
              <Shield className="h-12 w-12 text-[#012a4a] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Security Integration</h3>
              <p className="text-gray-300">Security controls integrated throughout your IT infrastructure and operations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfrastructureServices
