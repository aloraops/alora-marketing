/**
 * =============================================================================
 * PASSWORD PROTECTION PROXY
 * =============================================================================
 *
 * This proxy provides optional password protection for the entire site.
 *
 * NOTE: Next.js 16+ uses proxy.ts instead of middleware.ts
 * https://nextjs.org/docs/app/api-reference/file-conventions/proxy
 *
 * HOW TO TOGGLE ON/OFF:
 * ---------------------
 * 1. In .env.local (local development):
 *    - Set ENABLE_PASSWORD_PROTECTION=true  → Password protection ON
 *    - Set ENABLE_PASSWORD_PROTECTION=false → Password protection OFF (public site)
 *
 * 2. In Vercel (production):
 *    - Go to Project Settings → Environment Variables
 *    - Set ENABLE_PASSWORD_PROTECTION=true or false
 *    - Redeploy for changes to take effect
 *
 * HOW IT WORKS:
 * -------------
 * When enabled:
 * - All visitors are redirected to /password page
 * - After entering correct password, a cookie is set
 * - Cookie is valid for 7 days
 * - Visitor can browse freely with the cookie
 *
 * When disabled:
 * - This proxy does nothing
 * - Site is publicly accessible
 * - Password page is still accessible but not enforced
 *
 * =============================================================================
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Check if password protection is enabled
  const isPasswordProtectionEnabled = process.env.ENABLE_PASSWORD_PROTECTION === 'true'

  // If password protection is disabled, allow all requests
  if (!isPasswordProtectionEnabled) {
    return NextResponse.next()
  }

  // === PASSWORD PROTECTION IS ENABLED ===

  // Check if user has already authenticated
  const authCookie = request.cookies.get('site-password-verified')

  // Allow access to the password verification API endpoint
  if (request.nextUrl.pathname === '/api/verify-password') {
    return NextResponse.next()
  }

  // If authenticated (cookie present and valid), allow access
  if (authCookie?.value === 'true') {
    return NextResponse.next()
  }

  // If not authenticated and not already on password page, redirect to password page
  if (request.nextUrl.pathname !== '/password') {
    const passwordUrl = new URL('/password', request.url)
    // Add the original URL as a query param so we can redirect back after auth
    passwordUrl.searchParams.set('returnTo', request.nextUrl.pathname)
    return NextResponse.redirect(passwordUrl)
  }

  // Already on password page, allow it to render
  return NextResponse.next()
}

// Configure which routes this proxy runs on
// This runs on all routes except Next.js internals and static files
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
