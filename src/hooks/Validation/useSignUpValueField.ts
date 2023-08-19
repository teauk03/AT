import { useState, useEffect, ChangeEvent } from 'react';

const useValueField = (initialValue: string, validateEmail: (value: string) => boolean) => {
    const [value, setValue] = useState(initialValue);
    const [isValueValid, setValueValid] = useState(false);

    useEffect(() => {
        setValueValid(validateEmail(value));
    }, [value, validateEmail]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return { value, isValueValid, handleChange };
}

export default useValueField;