'use client'

import {useRouter} from "next/navigation";
import {useState} from 'react';
import {signIn, SignInResponse} from "next-auth/react";

interface LoginState {
    error: string | null;
    isLoading: boolean;
}

// 입력 유효성을 검사 (Client)
const validateInputs = (email: string, password: string): string | null => {
    if (!email && !password) return '사용자 정보를 입력해 주세요.';
    if (!email) return '이메일을 입력해주세요.';
    //if (!isValidEmail(email)) return '유요하지 않은 이메일 주소입니다.';
    if (!password) return '비밀번호를 입력해주세요.';
    return null;
}

// 로그인 오류 응답 처리 (Server)
const handleSignInError = (response: SignInResponse | undefined) => {
    // response 객체가 존재하는지 확인.
    if (!response) return '응답이 존재하지 않습니다. 다시 시도해주세요.';

    // 서버 오류를 체크.
    if (response.status >= 500) return '서버에서 오류가 발생했습니다. 다시 시도해주세요.';

    const errorMessage = typeof response?.error === 'string' ? response?.error : response?.error;

    switch (errorMessage) {
        case 'User not found':
            return '사용자 정보가 존재하지 않습니다.';
        case 'Invalid email format':
            return '사용자 정보가 존재하지 않습니다.';
        case 'Invalid password format':
            return '사용자 정보가 존재하지 않습니다.';
        case 'Invalid password':
            return '사용자 정보가 일치하지 않습니다.';
        case 'No credentials provided':
            return '로그인 중에 오류가 발생했습니다. 다시 시도해주세요.';
    }
}

// 로그인 중 발생할 수 있는 예외 처리
const handleException = (err: any) => {
    if (err instanceof Error) return err.message;
    else throw err;
}

// 로그인 작업 - Custom Hook
const useLogin = () => {
    const router = useRouter();
    const [state, setState] = useState<LoginState>({error: null, isLoading: false});

    /* 클라이언트 요청시 호출 (Custom Hook 을 활용한 로그인 기능) */
    const login = async (email: string, password: string) => {
        const error = validateInputs(email, password);
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