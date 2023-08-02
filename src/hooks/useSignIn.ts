'use client'
import {useRouter} from "next/navigation";
import {useState} from 'react';
import {signIn, SignInResponse} from "next-auth/react";
import {LoginState} from '@/types/Auth'

import validateInputs from "@/utils/validation/validateInputs";
import handleSignInError from "@/utils/errorHandling/handleError";
import handleException from "@/utils/errorHandling/handleException";

/* 로그인 작업 - Custom Hook */
const useLogin = () => {
    const router = useRouter();

    /* 에러 및 로딩 상태 관리 */
    const [
        state,
        setState
    ] = useState<LoginState>({error: null, isLoading: false});

    /* 클라이언트 요청시 호출 (Custom Hook 을 활용한 로그인 기능) */
    const login = async (email: string, password: string): Promise<void> => {
        const error = validateInputs(email, password);
        if (error) {
            setState({error, isLoading: false});
            return;
        }

        setState({error: null, isLoading: true});

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

export default useLogin;