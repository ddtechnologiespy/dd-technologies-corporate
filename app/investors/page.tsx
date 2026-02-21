"use client"

export default function Investors() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Investor Relations
        </h1>

        <p className="text-gray-400 mb-16">
          DD Technologies está construyendo infraestructura global en Inteligencia Artificial,
          Seguridad Digital y Expansión Tecnológica.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Stat title="Projected Growth" value="+240%" />
          <Stat title="Global Expansion" value="5 Regions" />
          <Stat title="R&D Investment" value="35%" />
        </div>

        <div className="mt-20 bg-[#111] p-10 rounded-xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">Investment Proposal</h2>
          <p className="text-gray-400 mb-6">
            Buscamos alianzas estratégicas para escalar infraestructura de IA
            y consolidar presencia internacional.
          </p>

          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold">
            Download Investor Deck
          </button>
        </div>

      </div>
    </main>
  )
}

function Stat({ title, value }) {
  return (
    <div className="bg-[#111] p-6 rounded-xl border border-white/10">
      <h3 className="text-gray-400 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-cyan-400">{value}</p>
    </div>
  )
}