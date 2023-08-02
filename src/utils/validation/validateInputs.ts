import { isValidEmail } from '@/utils/validation';

// 입력 유효성 검사 (Client)
const validateInputs = (
    email: string,
    password: string
): string | null => {

    if (!email && !password) return '이메일과 비밀번호를 모두 입력해 주세요.';
    if (!email) return '이메일을 입력해주세요.';
    if (!isValidEmail(email)) return '올바른 이메일 주소를 입력해주세요.';
    if (!password) return '비밀번호를 입력해주세요.';
    return null;
}

export default validateInputs;