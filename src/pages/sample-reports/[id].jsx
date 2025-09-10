"use client"
import Head from "next/head"
import { useState } from "react"
import { useRouter } from "next/router"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import DecisionModal from "@/components/modal/DecisionModal"
import { getReportById } from "@/constants/sampleReports"
import {
  ArrowLeft,
  Clock,
  DollarSign,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Target,
  BarChart3,
  Calendar,
  FileText,
  Download,
  ArrowRight,
  Lightbulb,
  Zap,
  Building2,
  AlertCircle,
  Users,
} from "lucide-react"

export default function ReportDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const { id } = router.query

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  // Get report data
  const report = getReportById(id)

  if (!report) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Report Not Found</h1>
          <button
            onClick={() => router.push("/sample-reports")}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to Sample Reports
          </button>
        </div>
      </div>
    )
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "HIGH":
        return "bg-red-100 text-red-700 border-red-200"
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "LOW":
        return "bg-green-100 text-green-700 border-green-200"
      default:
        return "bg-slate-100 text-slate-700 border-slate-200"
    }
  }

  // Check if this is the patient monitoring report to show additional header
  const isPatientMonitoringReport = id === "patient-monitoring-strategy"

  return (
    <>
      <Head>
        <title>{report.title} | Optipick Sample Report</title>
        <meta name="description" content={report.description} />
        <meta
          name="keywords"
          content={`${report.tags.join(", ")}, AI decision analysis, business strategy, ${report.industry}`}
        />
        <meta name="author" content="Optipick" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://decisiongpt.com/sample-reports/${report.id}`} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation onOpenModal={handleOpenModal} />

        {/* Header Section */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back Button */}
            <button
              onClick={() => router.push("/sample-reports")}
              className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sample Reports
            </button>

            {/* Patient Monitoring Report Specific Header */}
            {isPatientMonitoringReport && (
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Client Information */}
                  <div className="space-y-4">
                    <div className="flex items-center text-blue-700 mb-3">
                      <Building2 className="w-5 h-5 mr-2" />
                      <span className="font-semibold text-lg">Client Information</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                      <h3 className="font-bold text-slate-900 text-lg mb-2">MedDevice Innovations</h3>
                      <p className="text-slate-600 text-sm">B2B medical device software company</p>
                    </div>
                  </div>

                  {/* Decision Context */}
                  <div className="space-y-4">
                    <div className="flex items-center text-blue-700 mb-3">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      <span className="font-semibold text-lg">Decision Context</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                      <p className="text-slate-700 text-sm leading-relaxed">
                        "Should we launch our patient monitoring dashboard as a standalone SaaS product or license it to
                        existing EHR vendors? We need market analysis, competitor research, pricing strategy, and legal
                        considerations."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stakes and Complexity */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center text-green-600 mb-2">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span className="font-semibold text-sm">Investment Stakes</span>
                    </div>
                    <p className="text-slate-700 text-sm">$2M product development investment</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center text-blue-600 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-semibold text-sm">Timeline</span>
                    </div>
                    <p className="text-slate-700 text-sm">18-month development timeline</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center text-orange-600 mb-2">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="font-semibold text-sm">Complexity Level</span>
                    </div>
                    <p className="text-slate-700 text-sm">High - Multi-faceted analysis required</p>
                  </div>
                </div>

                {/* Analysis Requirements */}
                <div className="mt-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Analysis Requirements:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Market Research
                    </div>
                    <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Competitive Intelligence
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Pricing Analysis
                    </div>
                    <div className="bg-orange-100 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      Legal Evaluation
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Industry Tag */}
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  <FileText className="w-4 h-4 mr-2" />
                  {report.industry}
                </div>

                {/* Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">{report.title}</h1>

                {/* Description */}
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{report.description}</p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center text-green-600 mb-2">
                      <DollarSign className="w-5 h-5 mr-2" />
                      <span className="font-semibold text-sm">Stakes</span>
                    </div>
                    <div className="text-sm text-slate-700">{report.stakes}</div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center text-blue-600 mb-2">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="font-semibold text-sm">Delivery</span>
                    </div>
                    <div className="text-sm text-slate-700">{report.timeframe}</div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center text-purple-600 mb-2">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      <span className="font-semibold text-sm">Complexity</span>
                    </div>
                    <div className="text-sm text-slate-700">{report.complexity}</div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center text-orange-600 mb-2">
                      <Target className="w-5 h-5 mr-2" />
                      <span className="font-semibold text-sm">Decision</span>
                    </div>
                    <div className="text-sm text-slate-700">{report.decision}</div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Final Recommendation */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center text-green-700 mb-3">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Final Recommendation</span>
                  </div>
                  <div className="text-sm font-medium text-green-800 mb-2">
                    {report.content.executiveSummary.recommendation}
                  </div>
                  <p className="text-sm text-green-700">{report.outcome}</p>
                </div>

                {/* Categories */}
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {report.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download Button */}
                <a
                  href={report?.downloadLink?window.location.origin + "/" + report.downloadLink :  "#-"}
                  download={report?.downloadLink?true:false}
                  className="w-full flex items-center justify-center px-4 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Report
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Report Content - Expanded Width */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200">
              {/* Executive Decision Brief */}
              <div className="p-8 border-b border-slate-200">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">Executive Decision Brief</h2>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-blue-900 mb-3">
                    Strategic Recommendation: {report.content.executiveSummary.recommendation}
                  </h3>
                  <p className="text-blue-800 leading-relaxed">{report.content.executiveSummary.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Key Supporting Evidence:</h4>
                    <ul className="space-y-3">
                      {report.content.executiveSummary.keyEvidence.map((evidence, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {evidence}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Immediate Next Steps:</h4>
                    <ul className="space-y-3">
                      {report.content.executiveSummary.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-700">
                          <Target className="w-4 h-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cross-Analysis Synthesis */}
              <div className="p-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Cross-Analysis Synthesis</h2>
                <p className="text-slate-600 mb-8">Alignment across expert analyses</p>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Market Opportunity Consensus</h3>
                    <div className="bg-slate-50 rounded-lg p-6">
                      <ul className="space-y-2">
                        {report.content.crossAnalysis.marketOpportunity.map((item, index) => (
                          <li key={index} className="text-sm text-slate-700">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Business Model Preference Convergence</h3>
                    <div className="bg-green-50 rounded-lg p-6">
                      <ul className="space-y-2">
                        {report.content.crossAnalysis.businessModel.map((item, index) => (
                          <li key={index} className="text-sm text-slate-700">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Risk Assessment Alignment</h3>
                    <div className="bg-yellow-50 rounded-lg p-6">
                      <ul className="space-y-2">
                        {report.content.crossAnalysis.riskAssessment.map((item, index) => (
                          <li key={index} className="text-sm text-slate-700">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Framework */}
              {report.content.strategicFramework && (
                <div className="p-8 border-b border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Integrated Strategic Framework</h2>
                  <p className="text-slate-600 mb-8">Optimal Business Model: Hybrid SaaS-First Approach</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Primary Channel */}
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="font-semibold text-blue-900 mb-4">
                        {report.content.strategicFramework.primaryChannel.name}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-blue-800 mb-2">Target Market:</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            {report.content.strategicFramework.primaryChannel.targetMarket.map((target, index) => (
                              <li key={index}>• {target}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-800 mb-2">Value Proposition:</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            {report.content.strategicFramework.primaryChannel.valueProposition.map((value, index) => (
                              <li key={index}>• {value}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-800 mb-2">Pricing Strategy:</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            {report.content.strategicFramework.primaryChannel.pricing.map((price, index) => (
                              <li key={index}>• {price}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Secondary Channel */}
                    <div className="bg-purple-50 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-900 mb-4">
                        {report.content.strategicFramework.secondaryChannel.name}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-purple-800 mb-2">Partner Selection Priority:</h4>
                          <ul className="text-sm text-purple-700 space-y-1">
                            {report.content.strategicFramework.secondaryChannel.partners.map((partner, index) => (
                              <li key={index}>• {partner}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-800 mb-2">Partnership Terms:</h4>
                          <ul className="text-sm text-purple-700 space-y-1">
                            {report.content.strategicFramework.secondaryChannel.terms.map((term, index) => (
                              <li key={index}>• {term}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Implementation Roadmap */}
              <div className="p-8 border-b border-slate-200">
                <div className="flex items-center mb-6">
                  <Calendar className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">Implementation Roadmap</h2>
                </div>
                <div className="space-y-8">
                  {report.content.implementation.phases.map((phase, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">{phase.name}</h3>
                          <p className="text-sm text-slate-600">{phase.timeline}</p>
                        </div>
                      </div>
                      <div className="ml-12">
                        <div className="bg-blue-50 rounded-lg p-6">
                          <ul className="text-sm text-blue-800 space-y-2">
                            {phase.objectives.map((objective, objIndex) => (
                              <li key={objIndex}>• {objective}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk-Adjusted Analysis */}
              <div className="p-8 border-b border-slate-200">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">Risk-Adjusted Analysis</h2>
                </div>
                <p className="text-slate-600 mb-8">Primary risk mitigation strategies</p>
                <div className="space-y-6">
                  {report.content.risks.map((risk, index) => (
                    <div key={index} className={`border rounded-lg p-6 ${getPriorityColor(risk.priority)}`}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{risk.category}</h3>
                        <span className="text-xs font-semibold px-2 py-1 rounded">{risk.priority} PRIORITY</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Risk:</strong> {risk.description}
                        </p>
                        <p>
                          <strong>Mitigation:</strong> {risk.mitigation}
                        </p>
                        {risk.contingency && (
                          <p>
                            <strong>Contingency:</strong> {risk.contingency}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alternative Scenarios */}
              {report.content.scenarios && (
                <div className="p-8 border-b border-slate-200">
                  <div className="flex items-center mb-6">
                    <Lightbulb className="w-6 h-6 text-yellow-600 mr-3" />
                    <h2 className="text-2xl font-bold text-slate-900">Alternative Scenarios</h2>
                  </div>
                  <div className="space-y-6">
                    {report.content.scenarios.map((scenario, index) => (
                      <div key={index} className="bg-slate-50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-slate-900">{scenario.name}</h3>
                          <span className="text-sm font-medium text-slate-600">{scenario.probability}</span>
                        </div>
                        <p className="text-sm text-slate-700 mb-2">{scenario.description}</p>
                        <p className="text-sm text-slate-800">
                          <strong>Action:</strong> {scenario.action}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Success Metrics */}
              <div className="p-8 border-b border-slate-200">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">Success Metrics & Decision Checkpoints</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {report.content.metrics.map((metric, index) => (
                    <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="font-semibold text-blue-900 mb-4">{metric.timeline}</h3>
                      <ul className="space-y-2 text-sm text-blue-800">
                        {metric.milestones.map((milestone, milestoneIndex) => (
                          <li key={milestoneIndex}>• {milestone}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Immediate Action Items */}
              {report.content.actionItems && (
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Zap className="w-6 h-6 text-orange-600 mr-3" />
                    <h2 className="text-2xl font-bold text-slate-900">Immediate Action Items</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-4">Week 1-2</h3>
                      <div className="bg-red-50 rounded-lg p-4">
                        <ul className="text-sm text-red-800 space-y-2">
                          {report.content.actionItems.immediate.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-4">Month 1</h3>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <ul className="text-sm text-orange-800 space-y-2">
                          {report.content.actionItems.month1.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-4">Month 2-3</h3>
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <ul className="text-sm text-yellow-800 space-y-2">
                          {report.content.actionItems.months2to3.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-4">Month 4-6</h3>
                      <div className="bg-green-50 rounded-lg p-4">
                        <ul className="text-sm text-green-800 space-y-2">
                          {report.content.actionItems.months4to6.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need Similar Strategic Analysis?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get comprehensive AI-powered decision analysis for your business challenge. Multiple expert perspectives,
              actionable recommendations, detailed implementation roadmaps.
            </p>
            <button
              onClick={handleOpenModal}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Your Decision Analysis - $97
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
