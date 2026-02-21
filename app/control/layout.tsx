export default function ControlLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 p-6">
        <h2 className="text-xl font-bold mb-6">
          DD Technologies
        </h2>

        <nav className="space-y-4">
          <a href="/control" className="block hover:text-cyan-400">
            Dashboard
          </a>
          <a href="/control/users" className="block hover:text-cyan-400">
            Usuarios
          </a>
          <a href="/control/metrics" className="block hover:text-cyan-400">
            Métricas
          </a>
          <a href="/control/capital" className="block hover:text-cyan-400">
            Capital
          </a>
          <a href="/control/ai-core" className="block hover:text-cyan-400">
            IA Core
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  )
}