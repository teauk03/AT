/* [Components - Input] Auth - AuthInputField */
export interface DynamicAuthFieldProps {
    label: string;
    htmlFor: string;
    name: string;
    placeholder: string;
    autoComplete: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    type?: string | 'email' | 'password' | 'text' | 'number' | undefined;
    isInputValidation: boolean;
    validInputResult: string;
    invalidInputResult: string | null;
}