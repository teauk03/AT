import { useState, ChangeEvent } from 'react';

const useNameField = (initialValue: string, validateName: (name: string) => boolean) => {
    const [name, setName] = useState(initialValue);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return { name, handleNameChange };
}

export default useNameField;