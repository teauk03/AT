// Email Validation
const isValidEmail = (email: string): boolean => {
    //const emailRegex: RegExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const emailRegex: RegExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.?[A-Za-z]*$/;
    return emailRegex.test(email);
}

// Password Validation: 길이가 8 이상이면 유효
const hasValidPasswordLength = (password: string): boolean => {
    //return password.length >= 8;
    return password.length >= 2;
}

// Naming Validation: 이름이 비어있지 않아야 함
const hasValidName = (name: string): boolean => {
    //return name.trim() !== "";
    return name.length >= 2;
}

// Email Validation: 비어있지 않아야 함
const hasValidEmail = (email: string): boolean => {
    return email.trim() !== "";
}

// Password Validation: 비어있지 않아야 함
const hasPassword = (password: string): boolean => {
    return password.trim() !== "";
}

// BirthField Validation: 숫자만 입력 가능
const hasBirthValid = (birth: string): boolean => {
    const isOnlyDigits = /^\d+$/;
    return isOnlyDigits.test(birth);
}


export {
    isValidEmail,
    hasValidPasswordLength,
    hasValidName,
    hasValidEmail,
    hasPassword,
    hasBirthValid
};