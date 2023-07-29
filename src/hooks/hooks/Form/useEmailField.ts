import { useState, useEffect, ChangeEvent } from 'react';

const useEmailField = (initialValue: string, validateEmail: (email: string) => boolean) => {
    const [email, setEmail] = useState(initialValue);
    const [emailValid, setEmailValid] = useState(false);

    useEffect(() => {
        setEmailValid(validateEmail(email));
    }, [email, validateEmail]);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return { email, emailValid, handleEmailChange };
}

export default useEmailField;