'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation'
import styles from './PrimaryButton.module.scss'

interface PrimaryButtonProps {
    disabled: boolean;
}

const PrimaryButton = ({disabled}: PrimaryButtonProps) => {
    return (
        <button
            className={styles['submit-btn']}
            disabled={disabled}
            type="submit"
        >
            로그인
        </button>
    );
};

export default PrimaryButton;