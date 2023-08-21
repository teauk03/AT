import React from 'react';
import {MODAL_BUTTON_PROPS} from "@/types/UI";

const ModalButton: React.FC<MODAL_BUTTON_PROPS> = ({ label, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    );
};

export default ModalButton;