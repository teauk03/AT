'use client'
import axios from 'axios';

import {useState} from 'react';
import {useRouter} from "next/navigation";

import {
    validateSignUpInputs,
    handleSignUpError,
    handleException
} from '@/utils/validation/validation';

import {SignupData, SignUpState} from '@/types/next-auth';


/* [Custom Hook] 회원가입 */
const useSignUp = () => {
    const router = useRouter();

    const [
        state,
        setState
    ] = useState<SignUpState>({
        error: null, isLoading: false, signedUp: false
    });


    const signup = async (data: SignupData) => {
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
            const response = await axios
                .post('/api/auth/register', data);

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