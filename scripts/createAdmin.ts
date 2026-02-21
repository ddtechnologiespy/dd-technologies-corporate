import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10)

  await prisma.user.create({
    data: {
      email: "admin@ddtech.com",
      password: hashedPassword,
      role: "ADMIN"
    }
  })

  console.log("ADMIN creado")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())