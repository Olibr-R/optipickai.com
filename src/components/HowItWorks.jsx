"use client"
import { Upload, Cpu, CheckCircle, ArrowRight, Sparkles } from "lucide-react"

export default function HowItWorks({ onOpenModal }) {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 border border-blue-200 rounded-full text-base font-medium text-blue-700 mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            Simple Process
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Get AI-powered decision analysis in three simple steps
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Step 1 */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0"></div>
            <div className="relative z-10 text-center">
              {/* Step Number */}
              <div className="w-20 h-20 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full mx-auto mb-8 flex items-center justify-center text-2xl font-bold shadow-xl">
                <Upload className="w-8 h-8" />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Submit Your Decision</h3>
              {/* Description */}
              <p className="text-lg text-slate-600 mb-8 font-light">
                Describe your business challenge and submit it online
              </p>
              {/* Content Box */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-56 flex flex-col justify-between">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-slate-700 font-medium">Example Challenge:</p>
                </div>
                <p className="text-base text-slate-600 leading-relaxed text-left">
                  "Should I expand my SaaS product to the European market or focus on improving features for existing US
                  customers?"
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0"></div>
            <div className="relative z-10 text-center">
              {/* Step Number */}
              <div className="w-20 h-20 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full mx-auto mb-8 flex items-center justify-center text-2xl font-bold shadow-xl">
                <Cpu className="w-8 h-8" />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">We Run Multiple AIs</h3>
              {/* Description */}
              <p className="text-lg text-slate-600 mb-8 font-light">
                Your decision gets analyzed by leading <br />
                AI models
              </p>
              {/* Content Box */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-56 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-5 py-3">
                    <span className="text-base font-medium text-blue-800">GPT-4</span>
                    <div className="w-8 h-3 bg-blue-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-purple-50 border border-purple-200 rounded-lg px-5 py-3">
                    <span className="text-base font-medium text-purple-800">Claude</span>
                    <div className="w-8 h-3 bg-purple-200 rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-5 py-3">
                    <span className="text-base font-medium text-green-800">Gemini & More</span>
                    <div className="w-8 h-3 bg-green-200 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="relative z-10 text-center">
              {/* Step Number */}
              <div className="w-20 h-20 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full mx-auto mb-8 flex items-center justify-center text-2xl font-bold shadow-xl">
                <CheckCircle className="w-8 h-8" />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Get the Best Answer + Reasoning</h3>
              {/* Description */}
              <p className="text-lg text-slate-600 mb-8 font-light">
                Receive a comprehensive action plan with clear reasoning
              </p>
              {/* Content Box */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-56 flex flex-col justify-between">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-slate-700 font-medium">You'll receive:</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-left bg-green-50 rounded-lg px-4 py-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-base text-slate-700 font-medium">Detailed action plan</span>
                  </div>
                  <div className="flex items-center text-left bg-green-50 rounded-lg px-4 py-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-base text-slate-700 font-medium">Risk assessment</span>
                  </div>
                  <div className="flex items-center text-left bg-green-50 rounded-lg px-4 py-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-base text-slate-700 font-medium">Implementation timeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <div
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:from-slate-800 hover:to-slate-600 transform hover:-translate-y-1"
            onClick={onOpenModal}
          >
            <span className="text-lg font-semibold">Ready to make your next big decision?</span>
            <ArrowRight className="w-5 h-5" />
          </div>
          <p className="text-slate-500 text-sm mt-4 font-light">Get started with AI-powered decision analysis today</p>
        </div>
      </div>
    </section>
  )
}
