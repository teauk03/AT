import React from 'react';
import styles from "./SupportWrite.module.scss"
import {ContactUsSelectInputProps} from "@/types/Help";

const SupportWriteSelectRadio: React.FC<ContactUsSelectInputProps> = ({options, title, name, id}) => {
    return (
        <tr className={styles['table-wrapper']}>
            <th className={styles['table-title']}>{title}</th>
            <td className={styles['table-item']}>
                {options.map((option, index) =>
                    <span key={index} className={styles.item}>
                        <input type="radio" value={option.value} name={name} id={`${id}-${index}`} required/>
                        <label htmlFor={`${id}-${index}`}>{option.label}</label>
                    </span>
                )}
            </td>
        </tr>
    );
};

export default SupportWriteSelectRadio;