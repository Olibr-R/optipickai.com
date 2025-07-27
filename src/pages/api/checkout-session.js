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

    const session = await stripe.checkout.sessions.retrieve(session_id)

    res.json(session)
  } catch (err) {
    console.error("Error retrieving session:", err)
    res.status(500).json({ message: "Internal server error" })
  }
}
