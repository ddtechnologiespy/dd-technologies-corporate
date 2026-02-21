import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const { pathname } = req.nextUrl

  // Rutas protegidas
  if (pathname.startsWith("/control")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    // Solo ADMIN puede entrar
    if (token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/control/:path*"],
}