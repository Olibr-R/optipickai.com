"use client"
import { Upload, Cpu, CheckCircle, ArrowRight, Sparkles } from "lucide-react"

export default function HowItWorks({onOpenModal}) {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 lg:py-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Get AI-powered decision analysis in three simple steps
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1 */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0"></div>

            <div className="relative z-10 text-center">
              {/* Step Number */}
              <div className="w-16 h-16 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-bold shadow-lg">
                <Upload className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">Submit Your Decision</h3>

              {/* Description */}
              <p className="text-slate-600 mb-6 font-light">Describe your business challenge and submit it online</p>

              {/* Content Box */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-48 flex flex-col justify-between">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-700 font-medium">Example Challenge:</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed text-left">
                  "Should I expand my SaaS product to the European market or focus on improving features for existing US
                  customers?"
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0"></div>

            <div className="relative z-10 text-center">
              {/* Step Number */}
              <div className="w-16 h-16 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-bold shadow-lg">
                <Cpu className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Run Multiple AIs</h3>

              {/* Description */}
              <p className="text-slate-600 mb-6 font-light">
                Your decision gets analyzed by leading <br />
                AI models
              </p>

              {/* Content Box */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-48 flex flex-col justify-center">
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                    <span className="text-sm font-medium text-blue-800">GPT-4</span>
                    <div className="w-6 h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-purple-50 border border-purple-200 rounded-lg px-4 py-2">
                    <span className="text-sm font-medium text-purple-800">Claude</span>
                    <div className="w-6 h-2 bg-purple-200 rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                    <span className="text-sm font-medium text-green-800">Gemini & More</span>
                    <div className="w-6 h-2 bg-green-200 rounded-full overflow-hidden">
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
              <div className="w-16 h-16 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-bold shadow-lg">
                <CheckCircle className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">Get the Best Answer + Reasoning</h3>

              {/* Description */}
              <p className="text-slate-600 mb-6 font-light">Receive a comprehensive action plan with clear reasoning</p>

              {/* Content Box */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-48 flex flex-col justify-between">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-700 font-medium">You'll receive:</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-left bg-green-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">Detailed action plan</span>
                  </div>
                  <div className="flex items-center text-left bg-green-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">Risk assessment</span>
                  </div>
                  <div className="flex items-center text-left bg-green-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">Implementation timeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 cursor-pointer" onClick={onOpenModal}>
          <div className="inline-flex items-center space-x-2 text-slate-600">
            <span className="text-sm font-medium">Ready to make your next big decision?</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  )
}
