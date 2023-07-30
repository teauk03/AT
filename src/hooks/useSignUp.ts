import { useState } from 'react';
import { SignupData } from '@/types/Auth';

/**
 * useSignup은 회원 가입을 처리하는 ReactHook입니다.
 *
 * @returns {object} 반환 객체는 다음의 상태 및 함수들을 포함합니다.
 *   - signup: 회원 가입을 처리하는 함수입니다. 인자로 회원 가입 데이터를 받습니다.
 *   - loading: 현재 회원 가입 요청이 진행 중인지 나타내는 상태입니다.
 *   - error: 회원 가입 요청에서 발생한 오류를 나타내는 상태입니다.
 *   - signedUp: 회원 가입이 성공적으로 완료되었는지 나타내는 상태입니다.
 */
const useSignUp = () => {
    const [signedUp, setSignedUp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const signup = async (data: SignupData) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSignedUp(true);
            }

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Signup failed.');
            }

            const responseData = await response.json();
            return responseData;
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading, error, signedUp };
};


export { useSignUp };