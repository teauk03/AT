'use client'

import axios, {AxiosError} from 'axios';
import {useState} from 'react';
import {useRouter} from "next/navigation";
import {isValidEmail, hasValidPasswordLength, hasBirthValid, hasValidEmail, hasPassword} from '@/utils/validation';
import {SignupData} from '@/types/Auth';

interface SignUpState {
    error: string | null;
    isLoading: boolean;
    signedUp: boolean;
}

// 입력 유효성을 검사 (Client)
const validateInputs = (data: SignupData): string | null => {
    const { email, password, name, birth } = data;
    if (!email || !password || !name || !birth) {
        return '필수 정보입니다.';
    }
    if (!isValidEmail(email)) {
        return '사용할 수 없는 이메일입니다.';
    }
    if (!hasValidPasswordLength(password)) {
        return '사용할 수 없는 비밀번호입니다.';
    }
    if (!hasBirthValid(birth)) {
        return '생년월일은 8자리 숫자로 입력해 주세요.';
    }

    return null;
}

// 회원가입 오류 응답 처리 (Server)
const handleSignUpError = (err: AxiosError) => {
    if (!err.response) return '응답이 존재하지 않습니다. 다시 시도해주세요.';
    if (err.response.status >= 500) return '서버에서 오류가 발생했습니다. 다시 시도해주세요.';

    switch (err.response?.data) {
        case '사용할 수 없는 이메일입니다.':
            return '이메일이 유효하지 않습니다.';
        case '사용할 수 없는 비밀번호입니다.':
            return '비밀번호가 유효하지 않습니다.';
        case '이미 존재하는 닉네임입니다.':
            return '닉네임이 이미 존재합니다.';
        case '생년월일 : 필수 입력사항입니다.':
            return '생년월일을 입력해주세요.';
        case '인터넷 또는 서버 오류 발생':
            return '회원가입 중에 오류가 발생했습니다. 다시 시도해주세요.';
    }

    return null;
}

const handleException = (err: any) => {
    if (err instanceof Error) return err.message;
    else throw err;
}

// 회원가입 작업 - Custom Hook
const useSignUp = () => {
    const router = useRouter();
    const [state, setState] = useState<SignUpState>({
        error: null, isLoading: false, signedUp: false
    });

    const signup = async (data: SignupData) => {
        setState(prev => ({
            ...prev, isLoading: true, error: null
        }));

        const error = validateInputs(data);

        if (error) {
            setState(prev => ({
                ...prev, error, isLoading: false
            }));

            return;
        }

        try {
            const response = await axios
                .post('/api/auth/register', data);
            console.log(data)

            if (response.status === 200) {
                setState(prev => ({
                    ...prev, signedUp: true, isLoading: false
                }));
                router.push('/');
            } else {
                throw new Error('Signup failed.');
            }

        } catch (err) {
            let errorMessage: string | null = null;

            if (axios.isAxiosError(err)) errorMessage = handleSignUpError(err);
            else errorMessage = handleException(err);

            setState(prev => ({
                ...prev, error: errorMessage, isLoading: false
            }));
        }
    };

    return {signup, ...state};
};

export {useSignUp};