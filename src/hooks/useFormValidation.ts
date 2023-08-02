import { useState } from 'react';

const useFormValidation = (validate: (email: string, password: string) => (string | null)) => {
    const [error, setError] = useState<string | null>(null);

    const validateField = (value: string, password: string) => {
        const validationError = validate(value);
        setError(validationError);
    };

    return { error, validateField };
};

export { useFormValidation };