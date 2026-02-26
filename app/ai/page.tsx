"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function AIHome() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold"
      >
        DD AI
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Private Intelligence Engine
        </span>
      </motion.h1>

      <p className="mt-8 text-gray-400 max-w-2xl">
        Motor de inteligencia artificial propietario diseñado para
        automatización estratégica, análisis avanzado y operaciones autónomas.
      </p>

      <div className="mt-12 flex gap-6">
        <button
          onClick={() => router.push("/ai/dashboard")}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
        >
          Enter System
        </button>

        <button
          onClick={() => router.push("/")}
          className="px-8 py-4 border border-gray-700 rounded-full"
        >
          Back to Corporation
        </button>
      </div>

    </main>
  )
}