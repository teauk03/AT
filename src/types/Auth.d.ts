import {Session as NextAuthSession} from "next-auth/core/types";

export interface User {
    email: string;
}

export interface Session extends NextAuthSession {
    user: User;
}

export interface SignupData {
    birth: string;
    name: string;
    email: string;
    password: string;
}

/* [useSignIn] 에러 및 로딩 상태 인터페이스 */
export interface LoginState {
    error: string | null;
    isLoading: boolean;
}