import React from 'react';
import styles from './InputBox.module.scss';
import {LoginInputProps} from '@/types/Input';

const InputBox = ({name, type, label, autoComplete}: LoginInputProps) => (
    <div className={styles['input-wrapper']}>
        <input
            id={`${name}Form`}
            className={styles['input-item']}
            type={type}
            name={name}
            autoComplete={autoComplete}
            required
        />
        <label className={styles['input-label']} htmlFor={`${name}Form`}>
            {label}
        </label>
        <span className={styles['input-bottom']}></span>
    </div>
);

export default InputBox;