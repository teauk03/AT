import {NextFetchEvent, NextRequest, NextResponse} from "next/server";
import { getToken } from "next-auth/jwt";

/* next-auth/middleware 모듈에서 기본 미들웨어를 가져옴 */
export { default } from "next-auth/middleware"
const secret = process.env.SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
    /* 로그인 했을 경우에만 존재함 ( "next-auth.session-token" 쿠키가 존재할 때 ) */
    const session = await getToken({ req, secret, raw: true });
    const { pathname } = req.nextUrl;

    /* 로그인/회원가입 접근 제한 */
    if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
        if (session) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
}

/* /user/[id] & /login 경로에 대해 설정 */
// export const config = {
//     matcher: ["/user/[id]"]
// }

export const config = {
    matcher: ['/userposts/:path*'],
}