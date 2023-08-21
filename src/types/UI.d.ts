import {ReactNode} from "react";
import {ChangeEvent} from "react";
import {StaticImageData} from "next/image";

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
export interface UI_LOGIN_INPUT_PROPS {
    name: string;
    type: string;
    label: string;
    value?: string;
    autoComplete?: string | undefined;

    /* nChange 프로퍼티 */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/* [Input] 회원가입 인풋 타입 */
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

/* Division Line */
export interface DIVISION_LINE_PROPS {
    text: string;
}

/* Button */
/* [Components - button] Dynamic Button */
export interface DYNAMIC_BUTTON_PROPS {
    className: string;
    label: string;
    disabled: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
}

/* [Components - button] Primary Button */
export interface PRIMARY_BUTTON_PROPS {
    disabled: boolean;
    label: string;
    onClick?: () => void;
}

/* [Components - button] Social Login Button */
export interface SOCIAL_LOGIN_BUTTON_PROPS {
    provider: string;
    src: StaticImageData;
    alt: string;
}

/* [Components - button] Add Comment button */
export interface COMMENT_PROPS {
    comment: string;
    postComment: (comment: string) => void
}

/* [Component - Modal Button] ModalButton */
export interface MODAL_BUTTON_PROPS {
    label: string;
    onClick: (() => void) | undefined;
    className?: string;
}