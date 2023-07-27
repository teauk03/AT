import {useState} from 'react';
import {signIn, SignInResponse} from "next-auth/react";

interface LoginState {
    error: string | null;
    isLoading: boolean;
}

const useLogin = () => {
    const [state, setState] = useState<LoginState>({error: null, isLoading: false});

    const login = async (email: string, password: string) => {
        if (!email || !password) {
            alert('이메일 또는 비밀번호를 입력해주세요.');
            setState({
                error: '이메일 또는 비밀번호를 입력해주세요.',
                isLoading: false
            });
            return;
        }

        setState({
            error: null,
            isLoading: true
        });

        try {
            const response: SignInResponse | undefined = await signIn(
                "email-password-credential", {
                    email, password,
                    redirect: false,
                    callbackUrl: "/"
                }
            );

            if (response?.error) {
                alert('아이디 비밀번호가 일치하지 않습니다.');
                setState({
                    error: '아이디 비밀번호가 일치하지 않습니다.',
                    isLoading: false
                });
            } else {
                window.location.href = "/";
            }
        } catch (err) {
            if (err instanceof Error) {
                setState({
                    error: err.message,
                    isLoading: false
                });
            } else {
                throw err;
            }
        }
    };

    return {login, ...state};
};


export {useLogin};