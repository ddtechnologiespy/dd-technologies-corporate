"use client"

export default function BuyButton({ productId }: { productId: string }) {
  const handleBuy = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ productId }),
      headers: { "Content-Type": "application/json" }
    })

    const data = await res.json()
    window.location.href = data.url
  }

  return (
    <button
      onClick={handleBuy}
      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:scale-105 transition"
    >
      Comprar
    </button>
  )
}