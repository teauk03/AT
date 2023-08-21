import React from 'react';
import styles from './InputBox.module.scss';
import {UI_LOGIN_INPUT_PROPS} from "@/types/UI";

const InputBox = ({name, type, label, autoComplete, onChange}: UI_LOGIN_INPUT_PROPS) => (
    <div className={styles['input-wrapper']}>
        <input
            id={`${name}Form`}
            className={styles['input-item']}
            type={type}
            name={name}
            autoComplete={autoComplete}
            onChange={onChange}
            required
        />
        <label className={styles['input-label']} htmlFor={`${name}Form`}>
            {label}
        </label>
        <span className={styles['input-bottom']}></span>
    </div>
);

export default InputBox;