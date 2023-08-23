// Email Validation
import {AxiosError} from "axios";
import {SignInResponse} from "next-auth/react";
import {SignupData} from '@/types/next-auth';

const isValidEmailFormat = (email: string): boolean => {
    //const emailRegex: RegExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const emailRegex: RegExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.?[A-Za-z]*$/;
    return emailRegex.test(email);
}

// Email Validation: 비어있지 않아야 함
const isEmailNotEmpty = (email: string): boolean => {
    return email.trim() !== "";
}


/* Naming Validation: 이름, 닉네임이 비어있지 않아야 함 */
const hasValidName = (name: string): boolean => {
    //return name.trim() !== "";
    return name.length >= 2;
}

const hasValidNickName = (name: string): boolean => {
    //return name.trim() !== "";
    return name.length >= 2;
}


// Password Validation: 비어있지 않아야 함
const hasPassword = (password: string): boolean => {
    return password.trim() !== "";
}

// Password Validation: 길이가 8 이상이면 유효
const hasValidPasswordLength = (password: string): boolean => {
    //return password.length >= 8;
    return password.length >= 2;
}


// BirthField Validation: 숫자만 입력 가능
const hasBirthValid = (birth: string): boolean => {
    const isOnlyDigits = /^\d+$/;
    return isOnlyDigits.test(birth);
}

/* Phone Validation: 휴대폰 번호가 비어있지 않아야 함 */
const hasValidPhone = (name: string): boolean => {
    //return name.trim() !== "";
    return name.length >= 2;
}


/* Sign In error response handler (Server) */
const handleSignInError = (response: SignInResponse | undefined) => {
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
/* Input validation : (Client - SignIn) */
const validateSignInInputs = (email: string, password: string): string | null => {
    if (!email && !password) return '이메일과 비밀번호를 모두 입력해 주세요.';
    if (!email) return '이메일을 입력해주세요.';
    if (!isValidEmailFormat(email)) return '올바른 이메일 주소를 입력해주세요.';
    if (!password) return '비밀번호를 입력해주세요.';
    return null;
}


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
    const { email, password, name, birth } = data;

    if (!email || !password || !name || !birth) return '필수 정보입니다.';
    if (!isEmailNotEmpty(email)) return '사용할 수 없는 이메일입니다.';
    if (!hasValidPasswordLength(password)) return '사용할 수 없는 비밀번호입니다.';
    if (!hasBirthValid(birth)) return '생년월일은 8자리 숫자로 입력해 주세요.';
    return null;
}

// 로그인 중 발생할 수 있는 예외 처리
const handleException = (err: any) => {
    if (err instanceof Error) return err.message;
    else throw err;
}


export {
    isValidEmailFormat,
    isEmailNotEmpty,
    hasValidPasswordLength,
    hasValidName,
    hasValidNickName,
    hasPassword,
    hasBirthValid,
    hasValidPhone,

    // Sign In
    validateSignInInputs,
    handleSignInError,

    // Sign Up
    validateSignUpInputs,
    handleSignUpError,

    // Sign In & Sign Up
    handleException
};