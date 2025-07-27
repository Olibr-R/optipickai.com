"use client"

import  React from "react"
import { useState, useEffect } from "react"


export default function DecisionModal({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const [formData, setFormData] = useState({
    decisionType: "",
    context: "",
    options: "",
    criteria: [],
    urgency: "48-hours",
    name: "",
    company: "",
    email: "",
    phone: "",
  })

  const decisionTypes = [
    "Hiring decision",
    "Marketing strategy",
    "Product roadmap",
    "Financial planning",
    "Tech stack selection",
    "Operational bottleneck",
    "Custom / Other",
  ]

  const decisionCriteria = [
    "Time-to-market",
    "Revenue impact",
    "Cost",
    "User growth",
    "Technical feasibility",
    "Long-term scalability",
    "Team morale",
    "Risk avoidance",
  ]

   const handleCheckout = async (priceId, planName) => {
    // setLoading(planName)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          planName,
        }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      // setLoading(null)
    }
  }

  // Handle modal animations
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
      // Reset form state when modal opens
      setSubmitStatus("idle")
      setSubmitMessage("")
    } else {
      setIsVisible(false)
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleInputChange = (e) => {
    const { name, value, type } = e.target
    const checked = (e.target).checked

    if (type === "checkbox" && name === "criteria") {
      setFormData((prev) => ({
        ...prev,
        criteria: checked ? [...prev.criteria, value] : prev.criteria.filter((item) => item !== value),
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/submit-decision", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        handleCheckout("first_decision","First Decision Plan")
        // setSubmitStatus("success")
        // setSubmitMessage(
        //   `Success! Your decision has been submitted. You'll receive our analysis within ${result.estimatedResponse}.`,
        // )

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            decisionType: "",
            context: "",
            options: "",
            criteria: [],
            urgency: "48-hours",
            name: "",
            company: "",
            email: "",
            phone: "",
          })
          onClose()
        }, 3000)
      } else {
        setSubmitStatus("error")
        setSubmitMessage(result.message || "Failed to submit decision. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop with blur effect */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBackdropClick}
      >
        {/* Modal Container */}
        <div
          className={`bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-500 ease-out flex flex-col ${
            isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-8 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Success/Error Message Overlay */}
          {submitStatus !== "idle" && (
            <div
              className={`absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-10 ${
                submitStatus === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              <div className="text-center p-8">
                <div className="text-6xl mb-4">{submitStatus === "success" ? "🎉" : "❌"}</div>
                <h3 className="text-2xl font-bold mb-4">
                  {submitStatus === "success" ? "Submission Successful!" : "Submission Failed"}
                </h3>
                <p className="text-lg text-gray-700 max-w-md mx-auto">{submitMessage}</p>
                {submitStatus === "success" && (
                  <div className="mt-6">
                    <div className="animate-spin w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full mx-auto"></div>
                    <p className="text-sm text-gray-600 mt-2">Closing automatically...</p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Try Again
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Header with gradient */}
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">🚀 Submit Your Decision</h2>
                <p className="text-gray-300 text-lg">Get AI-powered insights in 24-48 hours</p>
              </div>
              <button
                onClick={onClose}
                disabled={isSubmitting}
                className="text-gray-300 hover:text-white transition-all duration-300 p-2 hover:bg-white/10 rounded-full group disabled:opacity-50"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          </div>

          {/* Form Content with custom scrollbar */}
          <div className="overflow-y-auto max-h-[calc(90vh-280px)] custom-scrollbar">
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Decision Details Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Decision Details</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Decision Type</label>
                    <select
                      name="decisionType"
                      value={formData.decisionType}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm transition-all duration-300 hover:border-gray-300 disabled:opacity-50"
                    >
                      <option value="">Select decision type...</option>
                      {decisionTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Urgency Level</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm transition-all duration-300 hover:border-gray-300 disabled:opacity-50"
                    >
                      <option value="24-hours">⚡ Within 24 hours</option>
                      <option value="48-hours">🚀 48 hours</option>
                      <option value="3-5-days">📅 3-5 business days</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">Context & Background</label>
                  <textarea
                    name="context"
                    value={formData.context}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                    placeholder="Describe your business challenge, current situation, and what's at stake..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm resize-none transition-all duration-300 hover:border-gray-300 disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">Decision Options</label>
                  <textarea
                    name="options"
                    value={formData.options}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={3}
                    placeholder="List the specific options you're deciding between (e.g., Option A: Expand to Europe, Option B: Focus on US market...)"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm resize-none transition-all duration-300 hover:border-gray-300 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Criteria Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Decision Criteria</h3>
                </div>

                <p className="text-gray-600 text-sm">Select the factors most important to your decision:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {decisionCriteria.map((criteria) => (
                    <label key={criteria} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="criteria"
                          value={criteria}
                          checked={formData.criteria.includes(criteria)}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className="w-5 h-5 text-gray-900 border-2 border-gray-300 rounded focus:ring-gray-900 focus:ring-2 transition-all duration-300 disabled:opacity-50"
                        />
                        <div className="absolute inset-0 w-5 h-5 bg-gray-900 rounded opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {criteria}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm transition-all duration-300 hover:border-gray-300 disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm transition-all duration-300 hover:border-gray-300 disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      placeholder="john@acmecorp.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm transition-all duration-300 hover:border-gray-300 disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm transition-all duration-300 hover:border-gray-300 disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Footer with gradient - Always visible */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 p-6 lg:p-8 mt-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <div className="text-lg font-bold text-gray-900 mb-1">
                  Starting at <span className="text-2xl text-gray-900">$97</span>
                </div>
                <p className="text-sm text-gray-600">for your first decision analysis</p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="px-6 py-3 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    "🚀 Submit & Pay $97"
                  )}
                </button>
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
          background: #f1f5f9;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </>
  )
}
