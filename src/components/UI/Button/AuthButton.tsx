'use client'
import React from 'react';
import styles from './PrimaryButton.module.scss'
import {FaLock, FaLockOpen} from "react-icons/fa";
import {PRIMARY_BUTTON_PROPS} from "@/types/UI";

const AuthButton = ({isHoverButton, handleMouseHover, disabled, label, isHoverable, showIcon}: PRIMARY_BUTTON_PROPS) => (
    <button
        className={styles.submitBtn}
        disabled={disabled}
        type="submit"
        onMouseEnter={isHoverable ? handleMouseHover : undefined}
        onMouseLeave={isHoverable ? handleMouseHover : undefined}
    >
        {showIcon && (isHoverButton && isHoverable ? <FaLockOpen/> : <FaLock/>)}
        <span>{label}</span>
    </button>
);

export default AuthButton;