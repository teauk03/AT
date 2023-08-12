import { useCallback } from 'react';

const useErrorHandler = () => {
    const handleError = useCallback((error: Error) => {
        console.error("An error occurred:", error);
    }, []);

    return { handleError };
};

export default useErrorHandler;