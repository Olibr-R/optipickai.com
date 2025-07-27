const stripe = require("stripe")(
  "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",
)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { priceId, planName, useProductCatalog = false } = req.body

    // Product catalog mapping for your two products
    const productCatalogMap = {
      prod_Sl1IttQQdpmFrh: {
        name: "Decision Analysis Plan",
        description: "AI-powered decision analysis with comprehensive insights",
        isSubscription: false, // Adjust based on your product setup
      },
      prod_Sl3MUfrfm9JXmq: {
        name: "Strategic Planning Plan",
        description: "Advanced strategic planning with multi-AI analysis",
        isSubscription: true, // Adjust based on your product setup
      },
    }

    // Legacy pricing map (preserved for existing functionality)
    const pricingMap = {
      price_starter_plan: {
        amount: 49700, // $497.00 in cents
        name: "Decision Analysis Plan",
        isSubscription: true,
      },
      price_professional_plan: {
        amount: 149700, // $997.00 in cents
        name: "Strategic Planning Plan",
        isSubscription: true,
      },
      price_crisis_support: {
        amount: 249700, // $2497.00 in cents
        name: "Crisis Support Plan",
        isSubscription: true,
      },
      first_decision: {
        amount: 9700, // $97.00 in cents
        name: "First Decision Plan",
        isSubscription: false, // One-time payment
      },
    }

    let lineItems = []
    let sessionMode = "payment"
    let planDetails = null

    if (useProductCatalog && productCatalogMap[priceId]) {
      // Use product catalog approach
      const productInfo = productCatalogMap[priceId]

      // Fetch the product from Stripe to get current pricing
      try {
        const product = await stripe.products.retrieve(priceId)
        const prices = await stripe.prices.list({
          product: priceId,
          active: true,
        })

        if (prices.data.length === 0) {
          return res.status(400).json({ message: "No active prices found for this product" })
        }

        // Use the first active price (you can modify this logic as needed)
        const price = prices.data[0]

        lineItems = [
          {
            price: price.id,
            quantity: 1,
          },
        ]

        sessionMode = price.type === "recurring" ? "subscription" : "payment"

        planDetails = {
          name: product.name,
          description: product.description,
          isSubscription: price.type === "recurring",
        }
      } catch (productError) {
        console.error("Error fetching product from catalog:", productError)
        return res.status(400).json({ message: "Invalid product ID" })
      }
    } else {
      // Use legacy pricing approach (existing functionality)
      planDetails = pricingMap[priceId]

      if (!planDetails) {
        return res.status(400).json({ message: "Invalid price ID" })
      }

      lineItems = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: planDetails.name,
              description: planDetails.isSubscription
                ? `Monthly subscription to ${planDetails.name}`
                : `One-time purchase of ${planDetails.name}`,
            },
            unit_amount: planDetails.amount,
            ...(planDetails.isSubscription && {
              recurring: {
                interval: "month",
              },
            }),
          },
          quantity: 1,
        },
      ]

      sessionMode = planDetails.isSubscription ? "subscription" : "payment"
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: sessionMode,
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/pricing`,
      metadata: {
        planName: planName || planDetails.name,
        planType: planDetails.isSubscription ? "subscription" : "one-time",
        productId: useProductCatalog ? priceId : "legacy",
        catalogUsed: useProductCatalog.toString(),
      },
    })

    res.json({ url: session.url })
  } catch (err) {
    console.error("Stripe error:", err)
    res.status(500).json({
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    })
  }
}
