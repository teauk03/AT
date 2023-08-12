import {ReactNode} from "react";

/* [Component - GLB] Dropdown NavbarLink */
export interface LinkComponent {
    className?: string;
    href: string;
    label: string | undefined;
    children?: ReactNode;
    onClick?: onClick;
}