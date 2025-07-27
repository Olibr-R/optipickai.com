const stripe = require("stripe")(
  "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",
)

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { session_id } = req.query

    if (!session_id) {
      return res.status(400).json({ message: "Session ID is required" })
    }

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "line_items.data.price.product"],
    })

    // Enhanced response with additional product information
    const enhancedSession = {
      ...session,
      product_details: null,
    }

    // If this was a catalog-based purchase, get additional product details
    if (session.metadata?.catalogUsed === "true" && session.metadata?.productId) {
      try {
        const product = await stripe.products.retrieve(session.metadata.productId)
        enhancedSession.product_details = {
          id: product.id,
          name: product.name,
          description: product.description,
          images: product.images,
          metadata: product.metadata,
        }
      } catch (productError) {
        console.error("Error fetching product details:", productError)
        // Don't fail the request if product details can't be fetched
      }
    }

    res.json(enhancedSession)
  } catch (err) {
    console.error("Error retrieving session:", err)
    res.status(500).json({
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    })
  }
}
