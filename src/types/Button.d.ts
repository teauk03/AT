import {StaticImageData} from "next/image";

/* [Components - button] Primary Button */
export interface PrimaryButtonProps {
    disabled: boolean;
    label: string;
    onClick?: () => void;
}

/* [Components - button] Social Login Button */
export interface SocialLoginButtonProps {
    provider: string;
    src: StaticImageData;
    alt: string;
}

/* [Components - button] Add Comment button */
export interface CommentProps {
    comment: string;
    postComment: (comment: string) => void
}

/* [Component - Modal Button] ModalButton */
export interface ModalButtonProps {
    label: string;
    onClick: (() => void) | undefined;
    className?: string;
}