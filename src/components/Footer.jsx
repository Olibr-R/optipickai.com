"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Footer({ onOpenModal }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("footer-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer id="footer-section" className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-700 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Company Info */}
          <div>
            <div className="mb-8">
              {/* Logo */}
              <div className="mb-6">
                <Image
                  src="/optipick-logo-white.png"
                  alt="OptipickAI Logo"
                  width={200}
                  height={60}
                  className="h-10 w-auto"
                  priority
                />
              </div>
              <p className="text-white text-lg leading-relaxed mb-6 max-w-md font-light">
                Your next big decision, powered by AI. We compare outputs from multiple AI models to give you the best
                strategic advice for your business challenges.
              </p>

              {/* CTA Button */}
              <button
                onClick={onOpenModal}
                className="group relative bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-4 text-base font-semibold hover:from-slate-800 hover:to-slate-600 transition-all duration-700 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-slate-600"
              >
                <span className="relative z-10">TRY YOUR FIRST DECISION FOR ONLY $97</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div
                className={`transition-all duration-800 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#features"
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sample-reports"
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                    >
                      Sample Reports
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq-section"
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div
                className={`transition-all duration-800 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="mailto:support@optipickai.com"
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                    >
                      Contact Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={onOpenModal}
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium text-left"
                    >
                      Book Consultation
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 pt-8 border-t border-slate-700 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Trust Stats */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-medium">48-Hour Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="font-medium">30-Day Guarantee</span>
              </div>
            </div>

            {/* Status */}
            <div className="lg:text-right">
              <div className="flex items-center justify-start lg:justify-end space-x-2 text-sm text-white">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">All systems operational</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-slate-700 mt-12 pt-8 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-300 text-sm">© 2024 OptipickAI. All rights reserved.</p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>for better decisions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
