import {Session as NextAuthSession} from "next-auth/core/types";
import {ObjectId} from "mongodb";

/* [...nextAuth].ts - User Session
 * 유저 정보(세션) 인터페이스 */
declare module "next-auth" {
    interface Session {
        user: {
            _id: ObjectId;
            name: string;
            email: string;
            birth: string;
            role: string;
            summary: string;
            skills: string;
            accessToken: string;
        };
        /* 만료 시간 (일반적으로 ISO 문자열 형식) */
        //expires: string;
    }
}


/* CustomUser : 사용자 정보에 대한 사용자 정의 인터페이스.
 * _id: 사용자의 고유 식별자
 * name: 사용자의 이름
 * email: 사용자의 이메일 주소
 * birth: 사용자의 생일
 * role: 사용자의 역할 (예: 관리자, 사용자 등)
 * lastAccess: 사용자의 마지막 접근 시간
 * summary: 사용자의 요약 정보 또는 설명
 * skills: 사용자의 기술 또는 관심 분야 */
interface CustomUser {
    _id: ObjectId;
    name: string;
    email: string;
    birth: string;
    role: string;
    lastAccess?: string;
    summary: string;
    skills: string;
}

/* CustomSession: "NextAuth"의 Session 인터페이스를 확장해 사용자 정의 세션 인터페이스를 만듬.
 * user: CustomUser 인터페이스를 사용하여 사용자 정보를 포함.
 * "Session"의 기타 멤버도 이 인터페이스에서 사용할 수 있다. */
export interface CustomSession {
    user: CustomUser;
}


/* [API] NEW Comment */
interface User {
    name: string;
    email: string;
}

export interface Session extends NextAuthSession {
    user: User;
}


/* [Custom Hook] useSignUp
 * [utils] validation */
export interface SignupData {
    birth: string;
    name: string;
    email: string;
    password: string;
}


/* [Custom Hook] useSignUp */
export interface SignUpState {
    error: string | null;
    isLoading: boolean;
    signedUp: boolean;
}


/* [Custom Hook] useSignIn */
interface LoginState {
    error: string | null;
    isLoading: boolean;
}