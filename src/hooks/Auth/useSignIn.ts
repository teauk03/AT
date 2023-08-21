'use client'
import {signIn, SignInResponse} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useState} from 'react';

import {
    validateSignInInputs,
    handleSignInError,
    handleException
} from "@/utils/validation/validation";

import {LoginState} from '@/types/next-auth';


/* [Custom Hook] 로그인 */
const useLogin = () => {
    const router = useRouter();
    const [
        state,
        setState
    ] = useState<LoginState>({
        error: null, isLoading: false
    });


    /* [Fn] 클라이언트 요청시 호출 (Custom Hook 을 활용한 로그인 기능) */
    const login = async (email: string, password: string) => {
        const error = validateSignInInputs(email, password);
        if (error) {
            setState({
                error, isLoading: false
            });

            return;
        }


        setState({
            error: null, isLoading: true
        });


        try {
            const response: SignInResponse | undefined = await signIn(
                "credentials", {
                    email, password, redirect: false, callbackUrl: "/"
                }
            );

            const signInError = handleSignInError(response);
            if (signInError) {
                setState({
                    error: signInError, isLoading: false
                });
            } else {
                router.push('/');
            }

        } catch (err) {
            const errorMessage = handleException(err);
            if (errorMessage) {
                setState({
                    error: errorMessage, isLoading: false
                });
            }
        }
    };

    return { login, ...state };
};

export { useLogin };