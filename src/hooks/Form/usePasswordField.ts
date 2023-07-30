import { useState, useEffect, ChangeEvent } from 'react';

const usePasswordField = (initialValue: string, validatePassword: (password: string) => boolean) => {
    const [password, setPassword] = useState(initialValue);
    const [passwordValid, setPasswordValid] = useState(false);

    useEffect(() => {
        setPasswordValid(validatePassword(password));
    }, [password, validatePassword]);

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return { password, passwordValid, handlePasswordChange };
}

export default usePasswordField;