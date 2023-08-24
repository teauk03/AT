import { useState, useEffect, ChangeEvent } from 'react';

const useValueField = (initialValue: string, validateFunction: (value: string) => boolean, errorMessage: string) => {
    const [value, setValue] = useState(initialValue);
    const [isValueValid, setValueValid] = useState(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        if (validateFunction(value)) {
            setValueValid(true);
            setError(null);
        } else {
            setValueValid(false);
            setError(errorMessage);
        }
    }, [value, validateFunction, errorMessage]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return { value, isValueValid, handleChange, error };
}

export default useValueField;