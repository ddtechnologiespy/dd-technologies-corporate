"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/30 blur-3xl opacity-40"></div>

      {/* Subtle Moving Glow */}
      <motion.div
        animate={{ x: [0, 200, 0], y: [0, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-cyan-500/20 blur-[200px] rounded-full"
      />

      {/* NAVBAR */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold tracking-wider">
          DD <span className="text-cyan-400">Technologies</span>
        </h1>

        <select className="bg-transparent border border-gray-700 px-3 py-1 rounded-lg text-sm">
          <option>ES</option>
          <option>EN</option>
        </select>
      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-32">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight"
        >
          Engineering the Future
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
            DD Technologies
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          Artificial Intelligence • Cybersecurity • Advanced Systems • 
          Corporate Infrastructure.  
          Building scalable, resilient and intelligent digital ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 flex gap-6"
        >
          <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-700/40">
            Explore Vision
          </button>

          <button className="px-10 py-4 rounded-2xl border border-gray-700 hover:border-cyan-400 hover:bg-gray-900 transition-all duration-300">
            Corporate Labs
          </button>
        </motion.div>
      </section>

      {/* TECHNOLOGY GRID */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-xl border border-gray-800 hover:border-cyan-500 transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Artificial Intelligence
            </h3>
            <p className="text-gray-400">
              Advanced machine learning architectures, predictive systems and 
              enterprise automation platforms.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-xl border border-gray-800 hover:border-purple-500 transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              Infrastructure & Cloud
            </h3>
            <p className="text-gray-400">
              High-availability microservices, distributed computing 
              and global-grade scalable architecture.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-xl border border-gray-800 hover:border-blue-500 transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Security & Systems
            </h3>
            <p className="text-gray-400">
              Advanced encryption, cybersecurity frameworks and 
              enterprise protection systems.
            </p>
          </motion.div>

        </div>
      </section>

      {/* BOARD & VISION */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-black to-gray-950 text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Corporate Vision 2035
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            DD Technologies is committed to becoming a global technology 
            corporation operating in artificial intelligence research, 
            cybersecurity innovation, enterprise infrastructure and 
            advanced digital ecosystems.
          </p>

        </div>
      </section>

      {/* METRICS */}
      <section className="relative z-10 py-24 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">99.99%</h3>
            <p className="text-gray-400 mt-4">System Availability</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-purple-400">Global</h3>
            <p className="text-gray-400 mt-4">International Focus</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-400">AI Core</h3>
            <p className="text-gray-400 mt-4">Innovation Engine</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-white">24/7</h3>
            <p className="text-gray-400 mt-4">Continuous Operation</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-16 text-center border-t border-gray-800">
        <p className="text-gray-500">
          © {new Date().getFullYear()} DD Technologies Corporation. All rights reserved.
        </p>
      </footer>

    </main>
  )
}