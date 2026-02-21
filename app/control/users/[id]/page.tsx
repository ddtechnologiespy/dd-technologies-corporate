import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

const prisma = new PrismaClient()

export default async function UserDetailPage(
  { params }: { params: { id: string } }
) {
  const id = params.id

  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    redirect("/")
  }

  if (!id) {
    redirect("/control/users")
  }

  const user = await prisma.user.findUnique({
    where: { id }
  })

  if (!user) {
    redirect("/control/users")
  }

  // 🔐 PROTEGER ÚLTIMO ADMIN
  async function toggleRole() {
    "use server"

    const adminCount = await prisma.user.count({
      where: { role: "ADMIN" }
    })

    if (user.role === "ADMIN" && adminCount <= 1) {
      throw new Error("No puedes degradar el último administrador")
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        role: user.role === "ADMIN" ? "USER" : "ADMIN"
      }
    })

    redirect("/control/users")
  }

  async function deleteUser() {
    "use server"

    const adminCount = await prisma.user.count({
      where: { role: "ADMIN" }
    })

    if (user.role === "ADMIN" && adminCount <= 1) {
      throw new Error("No puedes eliminar el último administrador")
    }

    await prisma.user.delete({
      where: { id: user.id }
    })

    redirect("/control/users")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Administrar Usuario
      </h1>

      <div className="bg-zinc-900 p-8 rounded-2xl space-y-4">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role}</p>
        <p>
          <strong>Creado:</strong>{" "}
          {new Date(user.createdAt).toLocaleDateString()}
        </p>

        <div className="flex gap-4 mt-6">
          <form action={toggleRole}>
            <button
              type="submit"
              className="bg-yellow-500 px-6 py-2 rounded-xl hover:bg-yellow-400"
            >
              Cambiar Rol
            </button>
          </form>

          <form action={deleteUser}>
            <button
              type="submit"
              className="bg-red-600 px-6 py-2 rounded-xl hover:bg-red-500"
            >
              Eliminar Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}