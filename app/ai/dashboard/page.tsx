"use client"

import { motion } from "framer-motion"

export default function Dashboard() {
  return (
    <div className="space-y-12">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold tracking-wide">
          DD AI Core Dashboard
        </h1>
        <p className="text-gray-400 mt-2">
          Internal Strategic Control Panel — AI Operational Overview
        </p>
      </motion.div>

      {/* SYSTEM STATUS GRID */}
      <div className="grid md:grid-cols-4 gap-8">

        <StatusCard
          title="Core Status"
          value="Operational"
          color="cyan"
        />

        <StatusCard
          title="Modules Active"
          value="4 / 7"
          color="purple"
        />

        <StatusCard
          title="System Load"
          value="37%"
          color="blue"
        />

        <StatusCard
          title="Security Level"
          value="High"
          color="green"
        />

      </div>

      {/* STRATEGIC OVERVIEW */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
      >
        <h2 className="text-xl font-semibold mb-6">
          Strategic Vision Module
        </h2>

        <p className="text-gray-400 leading-relaxed">
          DD AI Core is designed as an internal intelligence engine
          supporting DD Technologies strategic expansion into Artificial
          Intelligence research, Cybersecurity infrastructure, Advanced
          Systems architecture and Global enterprise operations.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">

          <MiniMetric label="AI Research Progress" value="62%" />
          <MiniMetric label="Infrastructure Readiness" value="78%" />
          <MiniMetric label="Security Framework" value="91%" />

        </div>
      </motion.div>

      {/* FUTURE EXPANSION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="p-8 rounded-3xl bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-purple-900/20 border border-cyan-500/20"
      >
        <h2 className="text-xl font-semibold mb-4">
          Roadmap — AI Evolution
        </h2>

        <ul className="text-gray-400 space-y-2 text-sm">
          <li>• Autonomous Decision Engine (Phase 2)</li>
          <li>• Predictive Enterprise Modeling</li>
          <li>• Advanced Cyber Defense Module</li>
          <li>• Corporate Intelligence Analytics</li>
        </ul>
      </motion.div>

    </div>
  )
}

/* COMPONENTS */

function StatusCard({
  title,
  value,
  color
}: {
  title: string
  value: string
  color: "cyan" | "purple" | "blue" | "green"
}) {
  const colorMap = {
    cyan: "text-cyan-400 border-cyan-500/30",
    purple: "text-purple-400 border-purple-500/30",
    blue: "text-blue-400 border-blue-500/30",
    green: "text-green-400 border-green-500/30",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl border ${colorMap[color]} transition-all duration-300`}
    >
      <p className="text-gray-400 text-sm mb-2">{title}</p>
      <h3 className={`text-2xl font-bold ${colorMap[color].split(" ")[0]}`}>
        {value}
      </h3>
    </motion.div>
  )
}

function MiniMetric({
  label,
  value
}: {
  label: string
  value: string
}) {
  return (
    <div className="bg-black/40 p-4 rounded-xl border border-white/10">
      <p className="text-gray-400 text-xs">{label}</p>
      <p className="text-lg font-semibold text-cyan-400 mt-1">{value}</p>
    </div>
  )
}