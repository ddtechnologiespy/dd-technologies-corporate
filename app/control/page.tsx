import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ControlPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/login")
  }

  // 👇 ahora TypeScript ya sabe que user existe
  const { role } = session.user as { role?: string }

  if (role !== "ADMIN") {
    redirect("/")
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Panel de Control Admin</h1>
    </div>
  )
}