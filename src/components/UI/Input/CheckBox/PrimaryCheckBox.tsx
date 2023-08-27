import React from 'react';
import styles from "./PrimaryCheckBox.module.scss";
type PrimaryCheckBox = {
    label: string;
}

const PrimaryCheckBox = ({label}: PrimaryCheckBox): JSX.Element => (
    <div className={styles.checkboxWrapper}>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className={styles['check-label']}>{label}</label>
    </div>
);

export default PrimaryCheckBox;