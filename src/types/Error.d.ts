// hooks/useErrorAndLoading Type
export interface AsyncTaskFunction {
    (...args: any[]): Promise<void>;
}

// utils/handleLoginSubmit.ts
export interface UseErrorAndLoadingType {
    error: string,
    isLoading: boolean,
    handleAsyncTask: (fn: AsyncTaskFunction, ...args: any[]) => Promise<void>
}