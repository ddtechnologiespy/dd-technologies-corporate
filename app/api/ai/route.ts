import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { message } = await req.json()

  // Aquí luego conectamos OpenAI o modelo propio
  const simulatedResponse = `
  [DD Technologies AI Core]

  Analyzing input:
  "${message}"

  Strategic response generated successfully.
  `

  return NextResponse.json({ reply: simulatedResponse })
}