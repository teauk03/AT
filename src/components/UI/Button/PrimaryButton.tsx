'use client'
import React from 'react';
import styles from './PrimaryButton.module.scss'
import {PrimaryButtonProps} from '@/types/Button';

const PrimaryButton = ({disabled, label}: PrimaryButtonProps) => (
    <button className={styles['submit-btn']} disabled={disabled} type="submit">
        {label}
    </button>
);

export default PrimaryButton;