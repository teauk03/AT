'use client'
import React from 'react';
import styles from './PrimaryButton.module.scss'
import {PRIMARY_BUTTON_PROPS} from "@/types/UI";

const PrimaryButton = ({disabled, label}: PRIMARY_BUTTON_PROPS) => (
    <button className={styles['submit-btn']} disabled={disabled} type="submit">
        {label}
    </button>
);

export default PrimaryButton;