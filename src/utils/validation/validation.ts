/* 이름, 닉네임, 휴대폰 번호, 비밀번호의 길이를 검사 */
const hasMinLength = (value: string, minLength: number): boolean => {
    return value.length >= minLength;
};

/* 이름, 닉네임, 휴대폰 번호, 비밀번호의 공백을 검사 */
const isFieldNotEmpty = (field: string): boolean => {
    return field.trim() !== "";
};

/* Email Validation */
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

// 로그인 중 발생할 수 있는 예외 처리
const handleException = (err: any) => {
    if (err instanceof Error) return err.message;
    else throw err;
}


export {
    /* Validation */
    hasMinLength,
    isFieldNotEmpty,
    isValidEmailFormat,
    isEmailNotEmpty,
    hasValidPasswordLength,
    hasValidName,
    hasValidNickName,
    hasPassword,
    hasBirthValid,
    hasValidPhone,

    // Sign In & Sign Up
    handleException
};