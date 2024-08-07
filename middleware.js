import { locales } from './lib/i18n';
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 检查是否已经在根路径
  if (pathname === '/') return;

  const isExist = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (isExist) return;

  // 只有当路径不是根路径且不包含 locale 时才重定向
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/((?!_next)(?!.*\\.(?:ico|png|gif|svg|jpg|jpeg|xml|txt|mp4)$)(?!/api).*)'],
};