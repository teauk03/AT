import React from 'react';
import styles from "@/components/Auth/Join.module.scss";
import {PRIMARY_BUTTON_PROPS} from "@/types/UI";

const VerificationButton: React.FC<PRIMARY_BUTTON_PROPS> = ({ label, disabled, onClick }) => {
    return <button className={styles['verification-btn']}disabled={disabled} onClick={onClick}>{label}</button>
}

export default VerificationButton;