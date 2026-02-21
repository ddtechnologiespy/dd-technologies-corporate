import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "DD Technologies Corporation",
  description: "Corporate AI & Technology Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-lg border-b border-gray-800 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

            <Link href="/" className="text-cyan-400 font-bold text-xl">
              DD Technologies
            </Link>

            <div className="flex gap-8 text-gray-300">
              <Link href="/ai-core" className="hover:text-cyan-400 transition">
                AI Core
              </Link>
              <Link href="/labs" className="hover:text-cyan-400 transition">
                Labs
              </Link>
              <Link href="/capital" className="hover:text-cyan-400 transition">
                Capital
              </Link>
              <Link href="/education" className="hover:text-cyan-400 transition">
                Education
              </Link>
              <Link href="/login" className="hover:text-cyan-400 transition">
                Login
              </Link>
            </div>

          </div>
        </nav>

        {/* CONTENT */}
        <div className="pt-24">
          {children}
        </div>

      </body>
    </html>
  )
}