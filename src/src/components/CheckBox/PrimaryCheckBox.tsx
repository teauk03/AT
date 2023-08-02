import React from 'react';
import styles from "./PrimaryCheckBox.module.scss";

const PrimaryCheckBox = (): JSX.Element => (
    <div className={styles['checkbox-wrapper']}>
        <input type="checkbox" id="passwordCheckbox"/>
        <label className={styles['check-label']} htmlFor={"passwordCheckbox"}>
            간편 로그인 정보 저장
        </label>
    </div>
);

export default PrimaryCheckBox;