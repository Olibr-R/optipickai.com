"use client"
import { CheckCircle, Zap, Shield, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection({ onOpenModal }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 lg:py-8 pb-0">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="space-y-3">
              {/* Badge with slide-in animation */}
              <div
                className={`inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6 transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Decision Making
              </div>

              {/* Title with staggered animation */}
              <h1
                className={`hero-title text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent leading-tight transition-all duration-900 delay-200 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Your Next Big Decision, <span className="block">Powered by AI</span>
              </h1>

              {/* Subtitle with animation */}
              <p
                className={`hero-subtitle text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl font-light transition-all duration-900 delay-400 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Submit your business challenge - we'll compare outputs from Claude, GPT-4, Gemini, and more to advise
                your best action.
              </p>
            </div>

            <div className="space-y-3">
              {/* CTA Button with animation */}
              <button
                onClick={onOpenModal}
                className={`group relative bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-4 text-base font-semibold hover:from-slate-800 hover:to-slate-600 transition-all duration-700 delay-600 w-full sm:w-auto rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 ${
                  isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                }`}
              >
                <span className="relative z-10">TRY YOUR FIRST DECISION FOR ONLY $97</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              {/* Enhanced bullet points with staggered animations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: CheckCircle, text: "Full 48-hour service", color: "text-green-600", delay: "delay-700" },
                  { icon: CheckCircle, text: "Complete report format", color: "text-green-600", delay: "delay-800" },
                  { icon: Shield, text: "30-day money-back guarantee", color: "text-blue-600", delay: "delay-900" },
                  {
                    icon: TrendingUp,
                    text: "Upgrade credit toward monthly plan",
                    color: "text-purple-600",
                    delay: "delay-1000",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-2 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200/50 transition-all duration-700 ${item.delay} ${
                      isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0`} />
                    <span className="text-base font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Illustration - Custom Dashboard with animations */}
          <div className="flex justify-center lg:justify-end">
            <div
              className={`relative w-full max-w-lg transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
              }`}
            >
              {/* Main Dashboard Container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-3 shadow-2xl border border-slate-700">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${
                          i === 0
                            ? "bg-red-500 delay-1200"
                            : i === 1
                              ? "bg-yellow-500 delay-1300"
                              : "bg-green-500 delay-1400"
                        } ${isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                      ></div>
                    ))}
                  </div>
                  <div
                    className={`text-slate-400 text-sm font-mono transition-all duration-700 delay-1100 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    AI Decision Engine
                  </div>
                </div>

                {/* AI Models Section */}
                <div className="space-y-2 mb-3">
                  <div
                    className={`text-slate-300 text-sm font-semibold mb-2 transition-all duration-700 delay-1200 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    AI Models Comparison
                  </div>

                  {/* AI Model Cards with progressive loading */}
                  {[
                    { name: "Claude", color: "from-blue-500 to-blue-400", width: "w-full", delay: "delay-1300" },
                    { name: "GPT-4", color: "from-green-500 to-green-400", width: "w-5/6", delay: "delay-1400" },
                    { name: "Gemini", color: "from-purple-500 to-purple-400", width: "w-3/4", delay: "delay-1500" },
                  ].map((model, index) => (
                    <div
                      key={model.name}
                      className={`bg-slate-700/50 rounded-lg p-2 border border-slate-600 transition-all duration-700 ${model.delay} ${
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium">{model.name}</span>
                        <div className="w-8 h-2 bg-slate-600 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${model.color} rounded-full transition-all duration-1000 ${
                              isLoaded ? model.width : "w-0"
                            } ${model.delay}`}
                          ></div>
                        </div>
                      </div>
                      <div
                        className={`h-2 bg-slate-600 rounded-full mb-1 transition-all duration-700 ${
                          isLoaded ? "opacity-100" : "opacity-30"
                        } ${model.delay}`}
                      ></div>
                      <div
                        className={`h-2 bg-slate-600 rounded-full transition-all duration-700 ${
                          index === 0 ? "w-3/4" : index === 1 ? "w-4/5" : "w-2/3"
                        } ${isLoaded ? "opacity-100" : "opacity-30"} ${model.delay}`}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Results Card with final animation */}
                <div
                  className={`bg-white rounded-lg p-3 shadow-lg transition-all duration-700 delay-1600 ${
                    isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-slate-800 font-semibold mb-1">Analysis Complete</div>
                      <div className="text-slate-600 text-sm">Best recommendation ready</div>
                    </div>
                    <div
                      className={`w-10 h-10 bg-green-100 rounded-full flex items-center justify-center transition-all duration-500 delay-1800 ${
                        isLoaded ? "scale-100 rotate-0" : "scale-0 rotate-180"
                      }`}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1500 delay-1700 ${
                        isLoaded ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating elements with pulse animation */}
              <div
                className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl transition-all duration-1000 delay-2000 ${
                  isLoaded ? "scale-100 animate-pulse" : "scale-0"
                }`}
              ></div>
              <div
                className={`absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-20 blur-xl transition-all duration-1000 delay-2100 ${
                  isLoaded ? "scale-100 animate-pulse" : "scale-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
