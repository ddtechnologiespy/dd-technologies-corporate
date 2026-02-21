import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

const prisma = new PrismaClient()

export default async function ProductsAdminPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    redirect("/")
  }

  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" }
  })

  async function createProduct(formData: FormData) {
    "use server"

    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const price = parseFloat(formData.get("price") as string)

    if (!name || !description || isNaN(price)) {
      return
    }

    await prisma.product.create({
      data: {
        name,
        description,
        price
      }
    })

    redirect("/control/products")
  }

  return (
    <div className="min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-4xl font-bold mb-10">
        Administrar Productos
      </h1>

      {/* Crear Producto */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl mb-12">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">
          Crear Nuevo Producto
        </h2>

        <form action={createProduct} className="space-y-6">
          <input
            name="name"
            placeholder="Nombre del producto"
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <textarea
            name="description"
            placeholder="Descripción"
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <input
            name="price"
            type="number"
            step="0.01"
            placeholder="Precio"
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl"
          >
            Crear Producto
          </button>
        </form>
      </div>

      {/* Lista Productos */}
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/5 border border-white/10 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-cyan-400">
              {product.name}
            </h3>
            <p className="text-gray-400 mt-2">
              {product.description}
            </p>
            <p className="text-green-400 mt-4 font-semibold">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}