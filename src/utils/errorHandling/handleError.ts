import {SignInResponse} from "next-auth/react";

// 로그인 오류 응답 처리 (Server)
const handleSignInError = (
    response: SignInResponse | undefined
): string | undefined => {
    // response 객체가 존재하는지 확인.
    if (!response) return '응답이 존재하지 않습니다. 다시 시도해주세요.';

    // 서버 오류 체크.
    if (response.status >= 500) return '서버에서 오류가 발생했습니다. 다시 시도해주세요.';
    const errorMessage = typeof response?.error === 'string' ? response?.error : response?.error;
    switch (errorMessage) {
        case 'User not found':
        case 'Invalid email format':
        case 'Invalid password format':
            return '사용자 정보가 존재하지 않습니다.';
        case 'Invalid password':
            return '사용자 정보가 일치하지 않습니다.';
        case 'No credentials provided':
            return '로그인 중에 오류가 발생했습니다. 다시 시도해주세요.';
    }
}

export default handleSignInError;