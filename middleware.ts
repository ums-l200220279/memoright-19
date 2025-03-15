import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")

  // Check if the user is authenticated
  if (!token && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Add HIPAA and GDPR required headers
  const response = NextResponse.next()
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  return response
}

export const config = {
  matcher: ["/api/:path*", "/patient/:path*", "/doctor/:path*"],
}

