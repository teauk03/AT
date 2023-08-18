import {Session as NextAuthSession} from "next-auth/core/types";

/* [API] NEW Comment */
interface User {
    name: string;
    email: string;
}

export interface Session extends NextAuthSession {
    user: User;
}

/*
 * [Custom Hook] useSignUp
 * [utils] validation
 */
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