import React from 'react';
import styles from './InputBox.module.scss';

interface LoginInputProps {
    name: string;
    type: string;
    label: string;
    autoComplete: string;
}

const InputBox = ({ name, type, label, autoComplete }: LoginInputProps) => {
    return (
        <span className={styles['input-wrapper']}>
            <input
                className={styles['input-item']}
                type={type}
                name={name}
                autoComplete={autoComplete}
            />
            <label className={styles['input-label']} htmlFor={`${name}Form`}>{label}</label>
            <span className={styles['input-bottom']}></span>
        </span>
    );
};

export default InputBox;