const stripe = require("stripe")(
  "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",
)

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { product_ids } = req.query

    // If specific product IDs are requested
    if (product_ids) {
      const ids = product_ids.split(",")
      const products = []

      for (const id of ids) {
        try {
          const product = await stripe.products.retrieve(id.trim())
          const prices = await stripe.prices.list({
            product: id.trim(),
            active: true,
          })

          products.push({
            ...product,
            prices: prices.data,
          })
        } catch (error) {
          console.error(`Error fetching product ${id}:`, error)
          // Continue with other products even if one fails
        }
      }

      return res.json({ products })
    }

    // Default: return your specific catalog products
    const catalogProductIds = ["prod_Sl1IttQQdpmFrh", "prod_Sl3MUfrfm9JXmq"]
    const products = []

    for (const productId of catalogProductIds) {
      try {
        const product = await stripe.products.retrieve(productId)
        const prices = await stripe.prices.list({
          product: productId,
          active: true,
        })

        products.push({
          ...product,
          prices: prices.data,
        })
      } catch (error) {
        console.error(`Error fetching product ${productId}:`, error)
      }
    }

    res.json({ products })
  } catch (err) {
    console.error("Error fetching products:", err)
    res.status(500).json({
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    })
  }
}
