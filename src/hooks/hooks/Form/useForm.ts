'use client'
import {ChangeEvent, useState} from 'react';
import {useValidation} from '../Validation/useValidation';

const useForm = () => {
    const [year, setYear] = useState<string | number>('년');
    const [month, setMonth] = useState<string | number>('월');
    const [day, setDay] = useState<string | number>('일');

    const { handleChange, values, errors } = useValidation({
        name: '', email: '', password: ''
    });

    // Handler (Birthdate Validation)
    const handleYearChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setYear(e.target.value);
    };

    const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setMonth(e.target.value);
    };

    const handleDayChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setDay(e.target.value);
    };


    return {
        year, month, day,
        handleChange, values, errors,
        handleYearChange, handleMonthChange, handleDayChange,
    };
}

export {useForm};