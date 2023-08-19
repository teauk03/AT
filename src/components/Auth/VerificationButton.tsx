import React from 'react';
import styles from "@/components/Auth/Join.module.scss";
import {PrimaryButtonProps} from "@/types/Button";

const VerificationButton: React.FC<PrimaryButtonProps> = ({ label, disabled, onClick }) => {
    return <button className={styles['verification-btn']}disabled={disabled} onClick={onClick}>{label}</button>
}

export default VerificationButton;