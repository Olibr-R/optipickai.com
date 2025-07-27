const stripe = require("stripe")(
  "pk_live_51RmxyiKanSNQZ3FD0TrisMDVD9R2ikt5qsNOXz70S8Wd8xHEpOJ3Svl7uobW2Mc882iTXoepIK71KX009T2QcOv10049SaDoNh",
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
