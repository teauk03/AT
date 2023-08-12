import { useState, useEffect, ChangeEvent } from 'react';

const usePasswordField = (initialValue: string, validatePassword: (password: string) => boolean) => {
    const [
        password,
        setPassword
    ] = useState(initialValue);

    const [
        isPasswordValid,
        setPasswordValid
    ] = useState(false);

    useEffect(() => {
        setPasswordValid(validatePassword(password));
    }, [password, validatePassword]);

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return { password, isPasswordValid, handlePasswordChange };
}

export default usePasswordField;