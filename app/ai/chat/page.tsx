"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type Message = {
  role: "user" | "ai"
  content: string
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content:
        "DD AI Core Online. Strategic intelligence module ready."
    }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const newMessage: Message = { role: "user", content: input }

    setMessages((prev) => [...prev, newMessage])
    setInput("")
    setLoading(true)

    // Simulación de respuesta IA local (sin API externa)
    setTimeout(() => {
      const aiResponse: Message = {
        role: "ai",
        content: generateCorporateResponse(newMessage.content)
      }

      setMessages((prev) => [...prev, aiResponse])
      setLoading(false)
    }, 800)
  }

  return (
    <div className="flex flex-col h-[80vh]">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">DD AI Core Interface</h1>
        <p className="text-gray-400 text-sm">
          Internal Corporate Intelligence System
        </p>
      </div>

      {/* CHAT WINDOW */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-xl p-4 rounded-2xl ${
              msg.role === "user"
                ? "bg-cyan-600/20 ml-auto text-right"
                : "bg-white/5 border border-white/10"
            }`}
          >
            <p className="text-sm text-gray-400 mb-1">
              {msg.role === "user" ? "You" : "DD AI"}
            </p>
            <p>{msg.content}</p>
          </motion.div>
        ))}

        {loading && (
          <div className="text-gray-400 text-sm">DD AI is analyzing...</div>
        )}
      </div>

      {/* INPUT AREA */}
      <div className="mt-6 flex gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter strategic command..."
          className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition"
        >
          Send
        </button>
      </div>

    </div>
  )
}

/* Simple local AI logic (no external APIs) */

function generateCorporateResponse(input: string): string {
  const text = input.toLowerCase()

  if (text.includes("vision")) {
    return "DD Technologies strategic objective: global expansion in AI research, cybersecurity and advanced infrastructure."
  }

  if (text.includes("security")) {
    return "Security module active. Current status: High integrity framework with multi-layer encryption readiness."
  }

  if (text.includes("roadmap")) {
    return "Roadmap Phase 1: Infrastructure stabilization. Phase 2: Autonomous AI modules. Phase 3: Global deployment."
  }

  if (text.includes("ai")) {
    return "AI Core expanding internal cognitive architecture. Current mode: Advisory and strategic assistance."
  }

  return "Command received. DD AI analyzing strategic implications for corporate growth."
}