"use client"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { FileText } from "lucide-react"

export default function Navigation({ onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const router = useRouter()

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/optipick-logo.png"
              alt="OptipickAI Logo"
              width={160}
              height={48}
              className="h-8 w-auto cursor-pointer"
              onClick={() => router.push("/")}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/#features"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="/#how-it-works"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                How It Works
              </a>
              <a
                href="/#pricing"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <a

                href="#-"
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors group" 
                onClick={(e) => {
                  e.preventDefault()
                  router.push("/sample-reports")
                }}
                style={{paddingTop:"8px",marginTop:"auto"}}
              >
                <FileText className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                <span>Sample Reports</span>
              </a>
              <a
                href="/#faq-section"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onOpenModal}
              className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors rounded-md"
            >
              GET STARTED
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a
                href="/#features"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="/#pricing"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <button
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 w-full text-left px-3 py-2 text-base font-medium transition-colors"
                onClick={() => {
                  router.push("/sample-reports")
                  setIsMobileMenuOpen(false)
                }}
              >
                <FileText className="w-4 h-4" />
                <span>Sample Reports</span>
              </button>
              <a
                href="/#faq-section"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button
                onClick={() => {
                  onOpenModal()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full text-left bg-gray-900 text-white px-3 py-2 text-base font-medium hover:bg-gray-800 transition-colors mt-4 rounded-md"
              >
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
