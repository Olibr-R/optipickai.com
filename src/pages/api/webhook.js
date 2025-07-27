import { buffer } from "micro"

const stripe = require("stripe")(
  "sk_test_51Rmxyu4G7EqJTNUav8cKrf9zVB9c3zNYMwF5upMDxe8PT2RExEhWwauLHvZatNpXa0B9Q2bVvrYSq3zEv2V7wILW00XHkCtcPF",
)

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_your_webhook_secret_here"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const buf = await buffer(req)
  const sig = req.headers["stripe-signature"]

  let event

  try {
    event = stripe.webhooks.constructEvent(buf, sig, endpointSecret)
  } catch (err) {
    console.log(`Webhook signature verification failed.`, err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object
      console.log("Payment successful:", session)

      // Here you can:
      // - Save the subscription to your database
      // - Send confirmation email
      // - Grant access to the user
      // - Update user's subscription status

      break
    case "invoice.payment_succeeded":
      const invoice = event.data.object
      console.log("Invoice payment succeeded:", invoice)
      break
    case "invoice.payment_failed":
      const failedInvoice = event.data.object
      console.log("Invoice payment failed:", failedInvoice)
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  res.json({ received: true })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
