const stripe = require("stripe")(
  "sk_test_51Rmxyu4G7EqJTNUav8cKrf9zVB9c3zNYMwF5upMDxe8PT2RExEhWwauLHvZatNpXa0B9Q2bVvrYSq3zEv2V7wILW00XHkCtcPF",
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

    const session = await stripe.checkout.sessions.retrieve(session_id)

    res.json(session)
  } catch (err) {
    console.error("Error retrieving session:", err)
    res.status(500).json({ message: "Internal server error" })
  }
}
