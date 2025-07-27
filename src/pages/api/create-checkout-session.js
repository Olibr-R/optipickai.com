const stripe = require("stripe")(
  "pk_live_51RmxyiKanSNQZ3FD0TrisMDVD9R2ikt5qsNOXz70S8Wd8xHEpOJ3Svl7uobW2Mc882iTXoepIK71KX009T2QcOv10049SaDoNh",
)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { priceId, planName } = req.body

    // Define pricing based on plan with subscription type
    const pricingMap = {
      price_starter_plan: {
        amount: 40700, // $497.00 in cents
        name: "Decision Analysis Plan",
        isSubscription: true,
      },
      price_professional_plan: {
        amount: 49700, // $997.00 in cents
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

    const planDetails = pricingMap[priceId]
    if (!planDetails) {
      return res.status(400).json({ message: "Invalid price ID" })
    }

    // Create line items based on subscription type
    const lineItems = [
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

    // Create Checkout Sessions with appropriate mode
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: planDetails.isSubscription ? "subscription" : "payment",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/pricing`,
      metadata: {
        planName: planName,
        planType: planDetails.isSubscription ? "subscription" : "one-time",
      },
    })

    res.json({ url: session.url })
  } catch (err) {
    console.error("Stripe error:", err)
    res.status(500).json({ message: "Internal server error" })
  }
}
