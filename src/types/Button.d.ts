import {StaticImageData} from "next/image";
import ModalButton from "@/components/UI/Modal/ModalButton";

/* [Components - button] Dynamic Button */
export interface DynamicButtonProps {
    className: string;
    label: string;
    disabled: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
}

/* [Components - button] Primary Button */
export interface PrimaryButtonProps {
    disabled: boolean;
    label: string;
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