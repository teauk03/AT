import {ReactNode} from "react";

/* [GLB] Dropdown NavbarLink */
export interface UI_LINK_COMPONENT {
    className?: string;
    href: string;
    label: string | undefined;
    children?: ReactNode;
    onClick?: onClick;
}


/* [Modal] Close Modal */
export interface UI_MODAL_PROPS {
    isOpen: boolean;
    onClose: () => void;
    onAbort?: () => void;
    children: React.ReactNode;
}


/* [Input] Auth - InputBox */
import {ChangeEvent} from "react";

export interface UI_LOGIN_INPUT_PROPS {
    name: string;
    type: string;
    label: string;
    value?: string;
    autoComplete?: string | undefined;

    /* nChange 프로퍼티 */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}


/* [JoinComponent] 회원가입 인풋 타입 */
export interface UI_JOIN_INPUT_FIELD {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    validation: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validInputResult: string;
    VerificationButton?: PrimaryButtonProps; // 선택적 프로퍼티로 추가
}