import {UserData} from "@/types/Account";

/* [Component] InquiryContainer */
export interface InquiryContainer {
    inquiryDescription: string;
    btnDescription: string;
    isActiveId?: boolean;
}


/* [Component] Support - ContactUsInputField */
export interface ContactUsInputFieldProps {
    className: string;
    placeholder?: string;
    inputType: string;
    name: string;
}


/* [Component] Support - ContactUsSelectInput */
export interface Option {
    value: string;
    label: string;
    disabled?: boolean;
    hidden?: boolean;
}

export interface ContactUsSelectInputProps {
    options: Option[];
    id: string;
    title: string;
    name: string;
}


/* [Session] UserData - Support -> SupportSideBar */
export interface SupportSideBarProps {
    session: { user: UserData; } | null;
}