import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const signInUrl = new URL('/login', request.url)
  const profileUrl = new URL('/profile', request.url)
  // const homeUrl = new URL('/', request.url)

  if (!token) {
    if (
      request.nextUrl.pathname === '/login' ||
      request.nextUrl.pathname === '/sign-up'
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(signInUrl)
  }

  // const payload: TJWTDecode = jwtDecode(token)

  // if (request.nextUrl.pathname.includes('/admin') && payload.type !== 'admin') {
  //   return NextResponse.redirect(homeUrl)
  // }

  if (request.nextUrl.pathname === '/sign-in') {
    return NextResponse.redirect(profileUrl)
  }
}

export const config = {
  matcher: ['/profile'],
}
