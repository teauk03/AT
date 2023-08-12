import React from 'react';
import styles from "./SupportWrite.module.scss"
import {ContactUsInputFieldProps} from "@/types/Help";


const SupportWriteInputField
    : React.FC<ContactUsInputFieldProps> = (
        { className, inputType, name, placeholder }
) => {

    return (
        <div className={styles[className]}>
            {inputType === 'text' ?
                <input className={styles['article-title']} type={inputType} name={name} placeholder={placeholder} required /> :
                <textarea className={styles['article-editor']} name={name} placeholder={placeholder} required/>}
        </div>
    );
};

export default SupportWriteInputField;