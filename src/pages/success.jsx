"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Success() {
  const router = useRouter()
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { session_id } = router.query

    if (session_id) {
      fetch(`/api/checkout-session?session_id=${session_id}`)
        .then((res) => res.json())
        .then((data) => {
          setSession(data)
          setLoading(false)
        })
        .catch((err) => {
          console.error("Error fetching session:", err)
          setLoading(false)
        })
    }
  }, [router.query])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h1>

        <p className="text-gray-600 mb-6">
          Thank you for your subscription. You'll receive a confirmation email shortly.
        </p>

        {session && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Subscription Details:</p>
            <p className="font-semibold text-gray-900">{session.metadata?.planName}</p>
            <p className="text-sm text-gray-600">Customer: {session.customer_details?.email}</p>
          </div>
        )}

        <button
          onClick={() => router.push("/")}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
  )
}
