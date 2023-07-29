// Without a defined matcher, this one line applies next-auth 
// to the entire project
export { default } from "next-auth/middleware"

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/extra", "/dashboard"] }

import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

// export async function middleware(request: NextRequest, event: NextFetchEvent) {
//     if (request.nextUrl.pathname.startsWith('/auth')) {
//         // 쿠키를 통해 로그인 여부를 확인 -> 비로그인 상태일 경우 rootpage로 이동
//         if (request.cookies.get('logged') !== 'true') {
//             return NextResponse.redirect(new URL('/', request.url));
//         }
//     }
// }