import {NextFetchEvent, NextRequest, NextResponse} from "next/server";

export { default } from "next-auth/middleware"
export const config = { matcher: ["/extra", "/dashboard"] }

// export async function middleware(request: NextRequest, event: NextFetchEvent) {
//     // 이 부분은 '/write' 경로로 접근할 때를 처리합니다.
//     if (request.nextUrl.pathname === '/write') {
//         // 쿠키를 통해 로그인 여부를 확인
//         const loggedCookie = request.cookies.get('logged') as string | undefined;
//         if (loggedCookie !== 'true') {
//             // 로그인되지 않은 사용자의 경우 팝업을 띄우지 않고 바로 로그인 페이지로 리디렉션
//             return NextResponse.redirect(new URL('/login', request.url));
//         }
//     }
// }