import { useState, ChangeEvent } from 'react';

const useDateOfBirthField = (initialYear: string, initialMonth: string, initialDay: string) => {
    const [year, setYear] = useState(initialYear);
    const [month, setMonth] = useState(initialMonth);
    const [day, setDay] = useState(initialDay);

    const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setYear(e.target.value);
    }

    const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setMonth(e.target.value);
    }

    const handleDayChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setDay(e.target.value);
    }

    return { year, month, day, handleYearChange, handleMonthChange, handleDayChange };
}

export default useDateOfBirthField;