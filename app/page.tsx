"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px] top-[-200px] animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] bottom-[-200px] right-[-200px] animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 pt-40"
      >

        {/* Badge */}
        <div className="mb-6 inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-cyan-400 backdrop-blur-sm">
          Global AI Infrastructure
        </div>

        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
          DD Technologies
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Plataforma Corporativa Global enfocada en Inteligencia Artificial,
          Desarrollo de Software, Investigación Avanzada y Expansión Tecnológica.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center mb-14 flex-wrap">
          <Link href="/empresa">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20">
              Sobre la Empresa
            </button>
          </Link>

          <Link href="/tienda">
            <button className="px-8 py-4 border border-gray-700 rounded-xl hover:bg-white/5 transition duration-300">
              Tienda Software
            </button>
          </Link>

          <Link href="/proyectos">
            <button className="px-8 py-4 border border-gray-700 rounded-xl hover:bg-white/5 transition duration-300">
              Proyectos Futuros
            </button>
          </Link>

          <Link href="/control">
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition duration-300">
              Control Center
            </button>
          </Link>
        </div>

        {/* Corporate Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-32">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">12+</h3>
            <p className="text-gray-500 mt-2">Divisiones Activas</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">3</h3>
            <p className="text-gray-500 mt-2">Laboratorios en Desarrollo</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-indigo-400">Global</h3>
            <p className="text-gray-500 mt-2">Expansión Estratégica</p>
          </div>
        </div>

      </motion.div>

      {/* New Corporate Sections */}
      <section className="relative z-10 grid md:grid-cols-3 gap-10 px-10 pb-32 max-w-6xl w-full">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Empresa</h2>
          <p className="text-gray-400 mb-6">
            Conoce nuestra visión estratégica, misión global y liderazgo tecnológico.
          </p>
          <Link href="/empresa" className="text-cyan-400 hover:underline">
            Ver más →
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Tienda</h2>
          <p className="text-gray-400 mb-6">
            Explora nuestros softwares, sistemas IA y herramientas empresariales.
          </p>
          <Link href="/tienda" className="text-blue-400 hover:underline">
            Ir a tienda →
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Proyectos</h2>
          <p className="text-gray-400 mb-6">
            Investigación en IA evolutiva, SaaS multiempresa y expansión global.
          </p>
          <Link href="/proyectos" className="text-indigo-400 hover:underline">
            Descubrir →
          </Link>
        </motion.div>

      </section>

    </main>
  )
}