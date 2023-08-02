'use client'
import { signIn } from "next-auth/react";
import validateInputs from '@/utils/validation/validateInputs';
import handleSignInError from '@/utils/errorHandling/handleError';

import { useFormValidation  } from '@/hooks/useFormValidation';
import { useServerResponse } from '@/hooks/useServerResponse';
import { useRouter } from "next/navigation";

const login = async (
    email: string,
    password: string
): Promise<void> => {
    const router = useRouter();

    // [Validate] 커스텀 훅을 사용하여 이메일 및 비밀번호 확인
    const {
        error: validationError
        , validateField
    } = useFormValidation(validateInputs);

    validateField(email, password);

    if (validationError) {
        // 유효성 검사 오류 처리
        console.error('Validation Error:', validationError);
        return;
    }

    try {
        const response = await signIn(/*...*/);

        // [Server Response] 커스텀 훅을 사용하여 서버 응답 처리
        const {
            error: serverError,
            handleResponse
        } = useServerResponse(handleSignInError);
        await handleResponse(response);

        if (serverError) {
            // 서버 오류 처리
            console.error('Server Error:', serverError);
        } else {
            // 성공시 홈페이지로 이동
            router.push('/');
        }

    } catch (err) {
        // 예외 처리
        console.error('Exception:', err);
    }
};

export default login;