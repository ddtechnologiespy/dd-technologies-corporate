import { PrismaClient } from "@prisma/client"
import BuyButton from "../components/BuyButton"

const prisma = new PrismaClient()

export default async function TiendaPage() {
  const products = await prisma.product.findMany({
    where: { active: true },
    orderBy: { createdAt: "desc" }
  })

  return (
    <div className="min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-4xl font-bold mb-12">
        Tienda de Software
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              {product.name}
            </h2>

            <p className="text-gray-400 mb-6">
              {product.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-green-400">
                ${product.price}
              </span>

              <BuyButton productId={product.id} />
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-gray-500 mt-10">
          No hay productos disponibles.
        </p>
      )}
    </div>
  )
}