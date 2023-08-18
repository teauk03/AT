import {NextFetchEvent, NextRequest, NextResponse} from "next/server";
import { getToken } from "next-auth/jwt";

/* next-auth/middleware 모듈에서 기본 미들웨어를 가져옴 */
export { default } from "next-auth/middleware"
const secret = process.env.SECRET;

/* /user/[id] & /login 경로에 대해 설정 */
// export const config = {
//     matcher: ["/user/[id]"]
// }

export const config = {
    matcher: ['/userposts/:path*'],
}