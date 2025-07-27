"use client"
import Head from "next/head"
import { useState } from "react"
import { useRouter } from "next/router"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import DecisionModal from "@/components/modal/DecisionModal"
import { FileText, Clock, DollarSign, TrendingUp, Zap, ArrowRight } from "lucide-react"
import { sampleReports } from "@/constants/sampleReports"

export default function SampleReports() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleViewReport = (reportId) => {
    router.push(`/sample-reports/${reportId}`)
  }

  return (
    <>
      <Head>
        <title>Sample AI Decision Reports | Optipick - Real Business Cases</title>
        <meta
          name="description"
          content="Explore real AI-powered decision analysis reports from healthcare, fintech, manufacturing, and more. See how our multi-AI approach delivers actionable business insights."
        />
        <meta
          name="keywords"
          content="AI decision reports, business case studies, strategic analysis, healthcare decisions, fintech strategy, manufacturing automation, sample reports"
        />
        <meta name="author" content="Optipick" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://decisiongpt.com/sample-reports" />
        <meta property="og:title" content="Sample AI Decision Reports | Optipick" />
        <meta
          property="og:description"
          content="Real AI-powered decision analysis reports across industries. See how multiple AI models provide comprehensive business insights."
        />
        <meta property="og:image" content="https://decisiongpt.com/sample-reports-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://decisiongpt.com/sample-reports" />
        <meta property="twitter:title" content="Sample AI Decision Reports | Optipick" />
        <meta
          property="twitter:description"
          content="Real AI-powered decision analysis reports across industries. See comprehensive business insights from multiple AI models."
        />
        <meta property="twitter:image" content="https://decisiongpt.com/sample-reports-twitter.jpg" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://decisiongpt.com/sample-reports" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Sample AI Decision Reports",
              description: "Collection of real AI-powered business decision analysis reports",
              url: "https://decisiongpt.com/sample-reports",
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: sampleReports.length,
                itemListElement: sampleReports.map((report, index) => ({
                  "@type": "Article",
                  position: index + 1,
                  name: report.title,
                  description: report.description,
                  url: `https://decisiongpt.com/sample-reports/${report.id}`,
                })),
              },
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation onOpenModal={handleOpenModal} />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Real Decision Analysis Reports
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent leading-tight">
                Sample AI Decision Reports
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Explore real business decisions analyzed by our AI-powered system. See how Claude, GPT-4, Gemini, and
                other models collaborate to deliver comprehensive strategic insights.
              </p>
            </div>
          </div>
        </section>

        {/* Reports Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleReports.map((report, index) => (
                <div
                  key={report.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300"
                >
                  {/* Header with gradient */}
                  <div className={`h-2 bg-gradient-to-r ${report.color}`}></div>

                  <div className="p-6">
                    {/* Industry & Complexity */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                        {report.industry}
                      </span>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          report.complexity === "High" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {report.complexity} Complexity
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {report.title}
                    </h3>

                    {/* Decision */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start text-sm text-slate-600">
                        <Zap className="w-4 h-4 mr-2 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span className="font-medium">Decision:</span>
                        <span className="ml-1">{report.decision}</span>
                      </div>
                    </div>

                    {/* Stakes & Timeline */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-sm text-slate-600">
                        <DollarSign className="w-4 h-4 mr-2 text-green-500" />
                        <div>
                          <div className="font-medium">Stakes</div>
                          <div className="text-xs">{report.stakes}</div>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                        <div>
                          <div className="font-medium">Delivered</div>
                          <div className="text-xs">{report.timeframe}</div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">{report.description}</p>

                    {/* Outcome */}
                    <div className="flex items-center text-sm text-green-700 bg-green-50 rounded-lg p-3 mb-4">
                      <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Outcome</div>
                        <div className="text-xs">{report.outcome}</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {report.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Report Button */}
                    <button
                      onClick={() => handleViewReport(report.id)}
                      className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white text-sm font-semibold rounded-xl hover:from-slate-800 hover:to-slate-600 transition-all duration-300 group-hover:shadow-lg"
                    >
                      View Full Report
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for Your Own AI Decision Analysis?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get the same comprehensive analysis for your business challenge. Multiple AI models, expert synthesis,
              actionable recommendations.
            </p>
            <button
              onClick={handleOpenModal}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Your Decision Analysis
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>

        <Footer onOpenModal={handleOpenModal} />
        <DecisionModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  )
}
