"use client"
import { useState } from "react"
import { CheckCircle, Star, Phone, Mail, Clock, FileText, Users, Zap, Crown } from "lucide-react"

export default function PricingSection({ onOpenModal }) {
  const [loading, setLoading] = useState(null)

  const handleCheckout = async (priceId, planName) => {
    setLoading(planName)
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
      setLoading(null)
    }
  }

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 lg:py-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Star className="w-4 h-4 mr-2" />
            Choose Your Plan
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Plans and Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Get AI-powered decision analysis when you need it most, and save on your plan.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-slate-900">Decision Clarity</h3>
              </div>
              <div className="text-sm text-slate-600 font-medium mb-4">STARTER PLAN</div>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  $407
                </span>
                <span className="text-slate-600 ml-1">/mo</span>
              </div>
              <p className="text-slate-600 font-light">Perfect for small businesses getting started</p>
            </div>

            <div className="mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    <span className="font-semibold">2 decisions</span> per month
                  </span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">72-hour turnaround</span>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Standard report format (8-12 pages)</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Email support only</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Basic decision types (pricing, marketing, hiring)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleCheckout("price_starter_plan", "Decision Clarity")}
              disabled={loading === "Decision Clarity"}
              className="w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading === "Decision Clarity" ? "Processing..." : "Get Started"}
            </button>
          </div>

          {/* Professional Plan - Most Popular */}
          <div className="relative bg-white/80 backdrop-blur-sm border-2 border-blue-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-bold rounded-full shadow-lg">
                MOST POPULAR
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-slate-900">Strategic Advantage</h3>
              </div>
              <div className="text-sm text-slate-600 font-medium mb-4">PROFESSIONAL PLAN</div>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  $497
                </span>
                <span className="text-slate-600 ml-1">/mo</span>
              </div>
              <p className="text-slate-600 font-light">Ideal for growing businesses</p>
            </div>

            <div className="mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    <span className="font-semibold">6 decisions</span> per month
                  </span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    <span className="font-semibold">48-hour guaranteed</span> turnaround
                  </span>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Premium report format (12-18 pages)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Implementation roadmap included</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Phone & email support</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">All decision types available</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Monthly 30-minute strategy check-in call</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleCheckout("price_professional_plan", "Strategic Advantage")}
              disabled={loading === "Strategic Advantage"}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading === "Strategic Advantage" ? "Processing..." : "Get Started"}
            </button>
          </div>

          {/* Executive Plan - Coming Soon */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-xl">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Crown className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-xl font-bold">Decision Mastery</h3>
              </div>
              <div className="text-sm text-slate-300 font-medium mb-4">EXECUTIVE PLAN</div>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </div>
              <p className="text-slate-300 font-light">For enterprise-level decision making</p>
            </div>

            <div className="mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-slate-900" />
                  </div>
                  <span className="text-slate-300">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-slate-900" />
                  </div>
                  <span className="text-slate-300">Unlimited decisions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-slate-900" />
                  </div>
                  <span className="text-slate-300">24-hour priority turnaround</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-slate-900" />
                  </div>
                  <span className="text-slate-300">Dedicated account manager</span>
                </li>
              </ul>
            </div>

            <button
              disabled
              className="w-full bg-slate-700 text-slate-400 py-3 px-4 rounded-xl font-semibold cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>

    
      </div>
    </section>
  )
}
