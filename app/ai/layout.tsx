"use client"

import { useRouter, usePathname } from "next/navigation"
import { ReactNode } from "react"
import { motion } from "framer-motion"

export default function AILayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  const navItem = (label: string, path: string) => (
    <button
      onClick={() => router.push(path)}
      className={`text-sm text-left px-4 py-2 rounded-lg transition-all duration-300 ${
        pathname === path
          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
          : "text-gray-400 hover:text-white hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="relative flex min-h-screen bg-black text-white overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-purple-900/20 blur-3xl opacity-40" />

      {/* 🏛 SIDEBAR */}
      <aside className="relative z-10 w-72 bg-white/5 backdrop-blur-xl border-r border-white/10 p-8 flex flex-col justify-between">

        <div>
          {/* Logo */}
          <h2
            onClick={() => router.push("/ai/dashboard")}
            className="text-2xl font-bold mb-12 cursor-pointer tracking-wide"
          >
            DD <span className="text-cyan-400">AI Core</span>
          </h2>

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            {navItem("Dashboard", "/ai/dashboard")}
            {navItem("AI Chat", "/ai/chat")}
            {navItem("Modules", "/ai/modules")}
            {navItem("Analytics", "/ai/analytics")}
            {navItem("Settings", "/ai/settings")}
          </nav>
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-500 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Core Status: Active
          </div>

          <button
            onClick={() => router.push("/")}
            className="hover:text-white transition"
          >
            Back to Corporation
          </button>
        </div>
      </aside>

      {/* 🧠 MAIN AREA */}
      <main className="relative z-10 flex-1 flex flex-col">

        {/* HEADER */}
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-10 backdrop-blur-xl bg-black/40">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-semibold tracking-wide"
          >
            AI Control Center
          </motion.h1>

          <div className="text-xs text-gray-400">
            DD Technologies • Internal System
          </div>
        </header>

        {/* CONTENT */}
        <div className="flex-1 p-10">
          {children}
        </div>

      </main>
    </div>
  )
}