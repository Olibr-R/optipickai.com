"use client"

import { useEffect, useState } from "react"

export default function TestimonialsSection() {
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

    const section = document.getElementById("testimonials-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials-section" className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">🟪 TESTIMONIALS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Optipick has helped business leaders make better decisions and avoid costly mistakes.
          </p>
        </div>

        {/* Main Testimonials - 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Testimonial 1 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Quote Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-xl text-gray-900 mb-6 leading-relaxed font-medium">
              "We used Optipick  to evaluate a high-stakes merger—saved us from a $2M mistake."
            </blockquote>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 hover:bg-gray-700 transition-colors duration-300">
                <span className="text-white font-semibold text-lg">J</span>
              </div>
              <div>
                <cite className="text-gray-900 font-semibold not-italic">John Smith</cite>
                <p className="text-gray-600 text-sm">CEO, SaaS Company</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            {/* Quote Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-xl text-gray-900 mb-6 leading-relaxed font-medium">
              "This is the smartest $497 I've ever spent."
            </blockquote>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4 hover:bg-gray-600 transition-colors duration-300">
                <span className="text-white font-semibold text-lg">S</span>
              </div>
              <div>
                <cite className="text-gray-900 font-semibold not-italic">Sarah Johnson</cite>
                <p className="text-gray-600 text-sm">Marketing Director, DTC Brand</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Testimonial 3 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.6s" }}
          >
            {/* Quote Icon */}
            <div className="mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-lg text-gray-900 mb-4 leading-relaxed font-medium">
              "Optipick helped us choose the right tech stack. Saved months of development time."
            </blockquote>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3 hover:bg-gray-500 transition-colors duration-300">
                <span className="text-white font-semibold">M</span>
              </div>
              <div>
                <cite className="text-gray-900 font-semibold not-italic text-sm">Mike Chen</cite>
                <p className="text-gray-600 text-xs">CTO, Fintech Startup</p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.8s" }}
          >
            {/* Quote Icon */}
            <div className="mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-lg text-gray-900 mb-4 leading-relaxed font-medium">
              "The AI analysis was spot-on. We pivoted our strategy and saw 40% growth."
            </blockquote>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center mr-3 hover:bg-gray-400 transition-colors duration-300">
                <span className="text-white font-semibold">L</span>
              </div>
              <div>
                <cite className="text-gray-900 font-semibold not-italic text-sm">Lisa Rodriguez</cite>
                <p className="text-gray-600 text-xs">VP Strategy, E-commerce</p>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 sm:col-span-2 lg:col-span-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "1s" }}
          >
            {/* Quote Icon */}
            <div className="mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-lg text-gray-900 mb-4 leading-relaxed font-medium">
              "Crisis Support plan saved our company during a major PR crisis. Worth every penny."
            </blockquote>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center mr-3 hover:bg-gray-300 transition-colors duration-300">
                <span className="text-white font-semibold">D</span>
              </div>
              <div>
                <cite className="text-gray-900 font-semibold not-italic text-sm">David Park</cite>
                <p className="text-gray-600 text-xs">CEO, Media Company</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className={`text-center mt-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "1.2s" }}
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Trusted by 500+ Business Leaders</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  $2.5M
                </div>
                <p className="text-gray-600">Average Savings</p>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  24-48hr
                </div>
                <p className="text-gray-600">Turnaround Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
