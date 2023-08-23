'use client'
import axios, {AxiosError} from 'axios';

import {useState} from 'react';
import {useRouter} from "next/navigation";

import {
    handleException, hasValidPasswordLength, hasBirthValid, isValidEmailFormat
} from '@/utils/validation/validation';

import {SignupData, SignUpState} from '@/types/next-auth';


/* [Custom Hook] 회원가입 */
const useSignUp = () => {
    const router = useRouter();
    /* Sign up error response handler (Server) */
    const handleSignUpError = (err: AxiosError) => {
        if (!err.response) return '응답이 존재하지 않습니다. 다시 시도해주세요.';
        if (err.response.status >= 500) return '서버에서 오류가 발생했습니다. 다시 시도해주세요.';
        console.log('err.response?.data (handleSignUpError) : ', err.response?.data)
        switch (err.response?.data) {
            case '사용할 수 없는 이메일입니다.':
                return '이메일이 유효하지 않습니다.';
            case '사용할 수 없는 비밀번호입니다.':
                return '비밀번호가 유효하지 않습니다.';
            case '생년월일 : 필수 입력사항입니다.':
                return '생년월일을 입력해주세요.';
            case '이미 존재하는 닉네임입니다.':
                return '닉네임이 이미 존재합니다.';
            case '이미 사용중인 이메일입니다.':
                return '이미 사용중인 이메일 주소입니다. 다른 이메일 주소를 사용해주세요.';
            case '인터넷 또는 서버 오류 발생':
                return '회원가입 중에 오류가 발생했습니다. 다시 시도해주세요.';
        }

        return null;
    }

    /* Input validation (Client - SignUp) */
    const validateSignUpInputs = (data: SignupData): string | null => {
        console.log('data (validateSignUpInputs) : ', data)
        const {
            email, password, name, birth
        } = data;

        if (!email || !password || !name || !birth) return '필수 정보입니다.';
        if (!isValidEmailFormat(email)) return '사용할 수 없는 이메일입니다.';
        if (email === email) return '중복된 이메일 입니다.';
        if (!hasValidPasswordLength(password)) return '사용할 수 없는 비밀번호입니다.';
        if (!hasBirthValid(birth)) return '생년월일은 8자리 숫자로 입력해 주세요.';
        return null;
    }

    const [
        state,
        setState
    ] = useState<SignUpState>({
        error: null, isLoading: false, signedUp: false
    });

    const [
        errorMessage,
        setErrorMessage
    ] = useState<string | null>(null);

    const signupFetching = async (data: SignupData) => {
        setState(prev => ({
            ...prev, isLoading: true, error: null
        }));

        const error = validateSignUpInputs(data);

        if (error) {
            setState(prev => ({
                ...prev, error, isLoading: false
            }));

            return;
        }

        try {
            const response = await axios.post('/api/auth/register', data);
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

    return {signupFetching, ...state};
};

export {useSignUp};