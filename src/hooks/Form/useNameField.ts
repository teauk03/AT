import {useState, ChangeEvent, useEffect} from 'react';

const useNameField = (initialValue: string, validateName: (name: string) => boolean) => {
    const [name, setName] = useState(initialValue);
    const [isNameValid, setNameValid] = useState(false);

    useEffect(() => {
        setNameValid(validateName(name));
    },[name, validateName])

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return { name, isNameValid, handleNameChange };
}

export default useNameField;