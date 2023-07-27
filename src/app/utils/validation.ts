// 이메일 유효성 검사
const validateEmail = (email: string): boolean => {
    const emailRegex: RegExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    return emailRegex.test(email);
}

// 비밀번호 유효성 검사: 길이가 8 이상이면 유효
const validatePassword = (password: string): boolean => {
    return password.length >= 8;
}

// 이름 유효성 검사: 이름이 비어있지 않아야 함
const validateName = (name: string): boolean => {
    return name.trim() !== "";
}


export {validatePassword, validateEmail, validateName}