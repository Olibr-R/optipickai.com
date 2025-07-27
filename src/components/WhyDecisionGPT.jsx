"use client"

export default function WhyDecisionGPT() {
  return (
    <section id="features" className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">🟦 WHY Optipick?</h2>
        </div>

        {/* Four Columns with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Outsmart traditional consulting */}
          <div className="text-center">
            {/* Content Box */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-64 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Emoji Icon */}
              <div className="text-5xl mb-4">🧠</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">Outsmart traditional consulting</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                Stop paying $10K for strategy decks. Let AI do it faster and smarter.
              </p>
            </div>
          </div>

          {/* Column 2 - Battle-test decisions */}
          <div className="text-center">
            {/* Content Box */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-64 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Emoji Icon */}
              <div className="text-5xl mb-4">⚖️</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">Battle-test decisions with AI model ensembles</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                Different models. Different views. One best outcome.
              </p>
            </div>
          </div>

          {/* Column 3 - Reports you can act on */}
          <div className="text-center">
            {/* Content Box */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-64 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Emoji Icon */}
              <div className="text-5xl mb-4">🎯</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">Reports you can act on, not just read</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">Get a decision framework + reasoning. Every time.</p>
            </div>
          </div>

          {/* Column 4 - Your data stays your data */}
          <div className="text-center">
            {/* Content Box */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-64 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Emoji Icon */}
              <div className="text-5xl mb-4">🔒</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">Your data stays your data</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                We don't train on your submissions. Full confidentiality.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to make better decisions?</h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of business leaders who trust Optipick for their most important choices.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>500+ Decisions Analyzed</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>98% Satisfaction Rate</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>24-48hr Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
