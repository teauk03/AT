/* [Components - Input] Auth - InputBox */
import {ChangeEvent} from "react";

export interface LoginInputProps {
    name: string;
    type: string;
    label: string;
    value?: string;
    autoComplete?: string | undefined;

    /* nChange 프로퍼티 */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}


/* [JoinComponent] 회원가입 인풋 타입 */
export interface InputField {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    validation: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validInputResult: string;
    VerificationButton?: PrimaryButtonProps; // 선택적 프로퍼티로 추가
}