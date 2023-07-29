import React, { useState, useEffect } from 'react';
import { validateEmail, validateName, validatePassword } from '@/utils/validation';

interface InitialState {
    name?: string;
    email?: string;
    password?: string;
}

interface ErrorState {
    name?: string;
    email?: string;
    password?: string;
}

const useValidation = (initialState: InitialState = {}) => {
    const [values, setValues] = useState<InitialState>(initialState);
    const [errors, setErrors] = useState<ErrorState>({});

    useEffect(() => {
        let newErrors: ErrorState = {};

        if ('email' in values) {
            if (!values.email || !validateEmail(values.email)) {
                newErrors.email = '유효하지 않은 이메일 주소';
            }
        }

        if ('password' in values) {
            if (!values.password || !validatePassword(values.password)) {
                newErrors.password = '유효하지 않은 비밀번호';
            }
        }

        if ('name' in values) {
            if (!values.name || !validateName(values.name)) {
                newErrors.name = '유효하지 않은 이름';
            }
        }

        setErrors(newErrors);
    }, [values]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value, });
    };

    return { handleChange, values, errors };
};

export { useValidation };