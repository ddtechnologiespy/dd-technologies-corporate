import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { productId } = await req.json()

  const product = await prisma.product.findUnique({
    where: { id: productId }
  })

  if (!product || !product.stripePriceId) {
    return NextResponse.json({ error: "Producto inválido" }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: product.type === "SUBSCRIPTION" ? "subscription" : "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price: product.stripePriceId,
        quantity: 1
      }
    ],
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/tienda"
  })

  return NextResponse.json({ url: session.url })
}