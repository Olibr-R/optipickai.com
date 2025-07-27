"use client"

import Head from "next/head"
import { useState } from "react"
import Navigation from "../components/Navigation"
import PricingSection from "../components/PricingSection"
import TestimonialsSection from "../components/TestimonialsSection"
import Footer from "../components/Footer"
import DecisionModal from "@/components/modal/DecisionModal"

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      <Head>
        <title>Optipick - Your Next Big Decision, Powered by AI</title>
        <meta
          name="description"
          content="Submit your business challenge and get AI-powered decision analysis from Claude, GPT-4, Gemini, and more. Professional decision consulting starting at $97."
        />
        <meta
          name="keywords"
          content="AI decision making, business consulting, GPT-4, Claude, Gemini, strategic planning"
        />
        <meta name="author" content="DecisionGPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://decisiongpt.com/" />
        <meta property="og:title" content="Optipick - Your Next Big Decision, Powered by AI" />
        <meta
          property="og:description"
          content="Submit your business challenge and get AI-powered decision analysis from multiple AI models. Professional decision consulting starting at $97."
        />
        <meta property="og:image" content="https://decisiongpt.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://decisiongpt.com/" />
        <meta property="twitter:title" content="Optipick - Your Next Big Decision, Powered by AI" />
        <meta
          property="twitter:description"
          content="Submit your business challenge and get AI-powered decision analysis from multiple AI models. Professional decision consulting starting at $97."
        />
        <meta property="twitter:image" content="https://decisiongpt.com/twitter-image.jpg" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://decisiongpt.com/" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Optipick",
              description: "AI-powered business decision consulting service",
              url: "https://decisiongpt.com",
              logo: "https://decisiongpt.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-DECISION",
                contactType: "customer service",
              },
              sameAs: ["https://twitter.com/decisiongpt", "https://linkedin.com/company/decisiongpt"],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <Navigation onOpenModal={handleOpenModal} />

       
        {/* Pricing Section */}
        <PricingSection onOpenModal={handleOpenModal} />


     
        <Footer onOpenModal={handleOpenModal} />

        {/* Modal */}
        <DecisionModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  )
}
