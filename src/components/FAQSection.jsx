"use client"

import { useState, useEffect } from "react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0) // First FAQ open by default
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

    const section = document.getElementById("faq-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      question: "How is this different from using ChatGPT myself?",
      answer:
        "We use multiple models, compare them, interpret results, and give you a professional decision report—not just one answer. Our process includes analysis from Claude, GPT-4, Gemini, and other leading AI models to provide comprehensive insights.",
    },
    {
      question: "Is this secure?",
      answer:
        "Yes. Your data isn't stored beyond analysis and is never used for training. We follow enterprise-grade security protocols and maintain strict confidentiality agreements. All data is encrypted in transit and at rest.",
    },
    {
      question: "How fast is turnaround?",
      answer:
        "Most decisions are returned within 24–48 hours. Urgent calls get faster support. For Crisis Support plan subscribers, we offer same-day turnaround and emergency consultation calls within hours.",
    },
    {
      question: "What types of decisions can you help with?",
      answer:
        "We help with strategic business decisions including hiring, marketing strategy, product roadmap, financial planning, tech stack selection, operational bottlenecks, and crisis management. Our AI ensemble approach works for any complex business challenge.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 100% satisfaction guarantee. If you're not completely satisfied with your decision analysis, we'll refund your payment within 30 days. We're confident in the quality of our AI-powered insights.",
    },
    {
      question: "Can I get a custom decision template?",
      answer:
        "Custom decision templates are available for $4,997 one-time fee. These are tailored to your specific industry, company size, and decision-making framework. Perfect for recurring decision types in your organization.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq-section" className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center mb-6">
            {/* Animated Question Mark Icons */}
            <div className="relative">
              <div
                className="absolute -left-16 top-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center animate-bounce"
                style={{ animationDelay: "0s" }}
              >
                <span className="text-amber-600 text-lg font-bold">?</span>
              </div>
              <div
                className="absolute -right-16 top-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-amber-600 text-lg font-bold">?</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🟫</span>
              </div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">FAQ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Optipick and how we can help you make better business decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Animated Illustration */}
          <div className="lg:col-span-4">
            <div
              className={`sticky top-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              {/* Animated FAQ Illustration */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-gray-600 text-sm">
                    Find answers to common questions about our AI-powered decision analysis.
                  </p>
                </div>

                {/* Animated Elements */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 animate-pulse">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded flex-1"></div>
                  </div>
                  <div className="flex items-center space-x-3 animate-pulse" style={{ animationDelay: "0.2s" }}>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded flex-1"></div>
                  </div>
                  <div className="flex items-center space-x-3 animate-pulse" style={{ animationDelay: "0.4s" }}>
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded flex-1"></div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">24/7 Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 lg:p-8 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-inset group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 pr-4">
                        {faq.question}
                      </h3>
                      <div
                        className={`flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300 ${
                          openIndex === index ? "rotate-180 bg-gray-900 group-hover:bg-gray-800" : ""
                        }`}
                      >
                        <svg
                          className={`w-5 h-5 transition-colors duration-300 ${
                            openIndex === index ? "text-white" : "text-gray-600"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "1s" }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Our team is here to help you make the best decision for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:support@decisiongpt.com"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 inline-flex items-center text-white"
                style={{color:"white"}}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Support
              </a>
              <span className="text-gray-400 hidden sm:block">or</span>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                📞 Book a Free Consult
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
