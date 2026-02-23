import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ProductsControlPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/login")
  }

  const { role } = session.user as { role?: string }

  if (role !== "ADMIN") {
    redirect("/")
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Gestión de Productos</h1>
    </div>
  )
}