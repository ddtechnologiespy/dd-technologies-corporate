"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />

      <motion.div
        animate={{ x: [0, 250, 0], y: [0, -180, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute -top-40 left-1/3 w-[800px] h-[800px] bg-cyan-500/20 blur-[220px] rounded-full -z-10"
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10 px-10 py-6 flex justify-between items-center">
        <h1
          onClick={() => router.push("/")}
          className="text-xl tracking-widest font-semibold cursor-pointer hover:text-cyan-400 transition"
        >
          DD TECHNOLOGIES
        </h1>

        <div className="flex gap-8 text-sm items-center">
          <button onClick={() => router.push("/services")} className="hover:text-cyan-400">
            Services
          </button>
          <button onClick={() => router.push("/about")} className="hover:text-cyan-400">
            About
          </button>
          <button onClick={() => router.push("/ai/chat")} className="hover:text-cyan-400">
            AI Core
          </button>
          <button
            onClick={() => router.push("/register")}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all"
          >
            Access Platform
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-60 pb-40 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight"
        >
          Building Digital
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Infrastructure at Scale
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Desarrollo de software empresarial, inteligencia artificial propietaria,
          automatización estratégica y sistemas tecnológicos diseñados para crecer
          progresivamente hacia una corporación global.
        </motion.p>

        {/* Investor Metrics */}
        <div className="mt-14 flex justify-center gap-16 text-gray-400 text-sm flex-wrap">
          <div>
            <p className="text-2xl font-bold text-white">2026</p>
            <p>Foundation Year</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Phase 1</p>
            <p>Software & AI</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Global</p>
            <p>Expansion Vision</p>
          </div>
        </div>

        <div className="mt-14 flex gap-8 justify-center flex-wrap">
          <button
            onClick={() => router.push("/register")}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all"
          >
            Start With Us
          </button>

          <button
            onClick={() => router.push("/ai/chat")}
            className="px-10 py-4 rounded-full border border-gray-700 hover:border-cyan-400 hover:bg-gray-900 transition-all"
          >
            Explore AI Core
          </button>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-32 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          {[
            {
              title: "Custom Software Development",
              desc: "Aplicaciones empresariales, plataformas SaaS y soluciones a medida.",
            },
            {
              title: "AI & Intelligent Systems",
              desc: "Motor de inteligencia propietaria y automatización estratégica.",
            },
            {
              title: "Cybersecurity & Infrastructure",
              desc: "Protección digital y arquitectura escalable de alto rendimiento.",
            },
            {
              title: "Automation & Enterprise Tools",
              desc: "Optimización de procesos empresariales con tecnología avanzada.",
            },
            {
              title: "Research & Innovation",
              desc: "Laboratorio interno enfocado en nuevas tecnologías.",
            },
            {
              title: "Scalable Corporate Systems",
              desc: "Plataformas diseñadas para crecer de startup a corporación global.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500 transition-all"
            >
              <h3 className="text-xl font-semibold mb-5 text-cyan-400">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-[#0a0f1c]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Why Choose <span className="text-cyan-400">DD Technologies</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Independent Innovation</h3>
              <p className="text-gray-400">
                Proprietary technology and controlled infrastructure.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-400">
                Built from startup phase to enterprise-level expansion.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Security First</h3>
              <p className="text-gray-400">
                Cybersecurity-driven development and digital sovereignty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE SOLUTIONS */}
      <section className="py-32 px-6 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Enterprise Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-16 text-left">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                Corporate Software Development
              </h3>
              <p className="text-gray-400">
                Business systems, dashboards and scalable web platforms.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                Cybersecurity & Infrastructure
              </h3>
              <p className="text-gray-400">
                Secure architecture and digital defense systems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                AI Systems & Automation
              </h3>
              <p className="text-gray-400">
                Proprietary AI engines and intelligent automation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                Future Labs
              </h3>
              <p className="text-gray-400">
                Long-term roadmap including advanced computing research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 border-t border-white/10 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Technology Built to Evolve
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          DD Technologies evoluciona progresivamente hacia una infraestructura
          tecnológica global impulsada por inteligencia propia.
        </p>

        <button
          onClick={() => router.push("/register")}
          className="px-12 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all"
        >
          Join DD Technologies
        </button>
      </section>

      <footer className="py-16 text-center border-t border-white/10 text-gray-500 text-sm">
        © {new Date().getFullYear()} DD Technologies Corporation.
        All rights reserved.
      </footer>

    </main>
  )
}