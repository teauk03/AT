import React from 'react';
import styles from "@/components/Auth/Join.module.scss";
import {DynamicAuthFieldProps} from '@/types/Form';

const AuthInputField = ({
                            label,
                            htmlFor,
                            name,
                            placeholder,
                            autoComplete,
                            onChange,
                            value,
                            type,
                            isInputValidation,
                            validInputResult,
                            invalidInputResult
                        }: DynamicAuthFieldProps) => (
    <fieldset className={styles['form-fieldset']}>
        <label htmlFor={htmlFor} className={styles['input-label']}>
            {label}
            <div className={styles['input-item']}>
                <input
                    className={styles['input-box']}
                    name={name}
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    onChange={onChange}
                />
            </div>
        </label>
        {name && (
            <div style={{
                marginTop: '.2rem',
                color: isInputValidation ? '#00FF00' : '#FF0000',
                fontSize: '12px'
            }}> {isInputValidation ? validInputResult : invalidInputResult}
            </div>
        )}
    </fieldset>
);

export default AuthInputField;