import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function ControlPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  if (session.user.role !== "ADMIN") {
    redirect("/")
  }

  const totalUsers = await prisma.user.count()
  const totalAdmins = await prisma.user.count({
    where: { role: "ADMIN" }
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard Empresarial
      </h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Usuarios Totales
          </h2>
          <p className="text-4xl text-cyan-400">
            {totalUsers}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Administradores
          </h2>
          <p className="text-4xl text-purple-400">
            {totalAdmins}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Estado IA
          </h2>
          <p className="text-green-400">
            Activa y monitoreando
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Sistema
          </h2>
          <p>
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}