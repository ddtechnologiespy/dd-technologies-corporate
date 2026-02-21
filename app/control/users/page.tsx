import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

const prisma = new PrismaClient()

export default async function UsersPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    redirect("/")
  }

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" }
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Gestión de Usuarios
      </h1>

      <div className="bg-zinc-900 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-800">
            <tr>
              <th className="p-4">Email</th>
              <th className="p-4">Rol</th>
              <th className="p-4">Creado</th>
              <th className="p-4">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-zinc-800">
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <span
                    className={
                      user.role === "ADMIN"
                        ? "text-purple-400"
                        : "text-cyan-400"
                    }
                  >
                    {user.role}
                  </span>
                </td>
                <td className="p-4">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <a
                    href={`/control/users/${user.id}`}
                    className="text-yellow-400 hover:underline"
                  >
                    Administrar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}