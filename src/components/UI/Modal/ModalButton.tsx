import React from 'react';
import {ModalButtonProps} from "@/types/Button";

const ModalButton: React.FC<ModalButtonProps> = ({ label, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    );
};

export default ModalButton;