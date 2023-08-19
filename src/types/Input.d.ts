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