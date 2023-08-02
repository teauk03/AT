'use client'

import React from 'react';
import styles from './PrimaryButton.module.scss'

interface PrimaryButtonProps {
    disabled: boolean;
    label: string;
}

const PrimaryButton = ({disabled, label}: PrimaryButtonProps) => (
    <button className={styles['submit-btn']} disabled={disabled} type="submit">
        {label}
    </button>
);

export default PrimaryButton;