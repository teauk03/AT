import { useState } from 'react';
import {SignInResponse} from "next-auth/react";

const useServerResponse = (handleError: (response: (SignInResponse | undefined)) => (string | undefined)) => {
    const [error, setError] = useState<string | null>(null);

    const handleResponse = async (response: any) => {
        if (!response) {
            setError('응답이 존재하지 않습니다. 다시 시도해주세요.');
            return;
        }

        const errorMessage = handleError(response);
        setError(errorMessage);
    };

    return { error, handleResponse };
};

export { useServerResponse };