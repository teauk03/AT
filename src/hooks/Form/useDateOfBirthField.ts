import {useState, ChangeEvent, useEffect} from 'react';

const useDateOfBirthField = (initialValue: string, initialBirth: (birth: string) => boolean) => {
    const [
        birth,
        setBirth
    ] = useState(initialValue);

    const [
        isBirthValid,
        setBirthValid
    ] = useState(false);

    useEffect(() => {
        setBirthValid(initialBirth(birth));
    }, [birth, initialBirth]);

    const handleBirthChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBirth(e.target.value);
    }

    return { birth, isBirthValid, handleBirthChange };
}

export default useDateOfBirthField;