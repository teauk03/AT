import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";


/**
 * 현재 사용자의 서버 세션을 가져온다.
 * 로그인하지 않은 경우 로그인 페이지로 리다이렉션.
 * @async
 * @function
 * @returns {Promise<object | {redirect: {destination: string, permanent: boolean}}>} 로그인한 사용자의 객체 또는 리다이렉션 정보를 반환합니다.
 * @example
 *
 * const user = await getUserServerSession();
 * if (user && 'redirect' in user) // 리다이렉트 수행
 * else // 사용자 정보 사용
 */
const getUserServerSession = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user || null;

    if (!user) {
        return {
            redirect: {
                destination: "login",
                permanent: false,
            },
        }
    }

    return user;
}

export default getUserServerSession;