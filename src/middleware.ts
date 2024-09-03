import { NextRequest, NextResponse } from 'next/server'
import { getUserData } from './services/api'

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const signInUrl = new URL('/login', request.url)
  const profileUrl = new URL('/profile', request.url)
  const homeUrl = new URL('/', request.url)

  if (!token) {
    if (
      request.nextUrl.pathname === '/login' ||
      request.nextUrl.pathname === '/sign-up'
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(signInUrl)
  }

  if (request.nextUrl.pathname.includes('/admin')) {
    const user = await getUserData(token)

    if (user.role !== 'ADMIN') {
      return NextResponse.redirect(homeUrl)
    }
  }

  if (request.nextUrl.pathname === '/sign-in') {
    return NextResponse.redirect(profileUrl)
  }
}

export const config = {
  matcher: ['/profile', '/admin/:path*', '/login', '/sign-up'],
}
