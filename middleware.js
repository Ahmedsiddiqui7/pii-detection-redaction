// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const user = req.cookies.get('user');
  const url = req.nextUrl.clone();

  if (!user && !url.pathname.startsWith('/signin') && !url.pathname.startsWith('/signup')) {
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};