'use client'
import {ChangeEvent, useState} from 'react';
import {validateEmail, validateName, validatePassword} from '@/util/validation';

const useForm = () => {
    // useState
    const [year, setYear] = useState<string | number>('년');
    const [month, setMonth] = useState<string | number>('월');
    const [day, setDay] = useState<string | number>('일');

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);


    // Event Handler (유효성 검사)
    const handleYearChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setYear(e.target.value);
    };

    const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setMonth(e.target.value);
    };

    const handleDayChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setDay(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
        setEmailValid(validateEmail(e.target.value));
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
        setPasswordValid(validatePassword(e.target.value));
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }


    // Form validation
    const validateForm = (): string | null => {
        if (!email || !validateEmail(email)) {
            return 'E-mail';
        }
        if (!password || !validatePassword(password)) {
            return 'Password';
        }
        if (!name || !validateName(name)) {
            return "성함(이름)";
        }
        if (year === '년' || month === '월' || day === '일') {
            return '생년월일';
        }
        return null;
    }

    return {
        year, month, day,
        email, password, name,
        emailValid, passwordValid,
        handleYearChange, handleMonthChange, handleDayChange,
        handleEmailChange, handlePasswordChange, handleNameChange,
        validateForm
    };
}

export {useForm};