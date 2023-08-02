import { useState } from "react";
import { AsyncTaskFunction } from '@/types/Error'

export function useErrorAndLoading() {
    const [
        error,
        setError
    ] = useState<Error | null>(null);

    const [
        isLoading,
        setIsLoading
    ] = useState<boolean>(false);

    const handleAsyncTask = async (asyncTask: AsyncTaskFunction, ...args: any[]) => {
        try {
            setIsLoading(true);
            setError(null);
            await asyncTask(...args);
        } catch (error) {
            setError(error as Error);
        } finally {
            setIsLoading(false);
        }
    };

    return { error, isLoading, handleAsyncTask };
}

export default useErrorAndLoading;