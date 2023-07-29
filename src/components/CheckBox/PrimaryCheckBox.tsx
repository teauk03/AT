import React from 'react';
import styles from "./PrimaryCheckBox.module.scss";

const PrimaryCheckBox = (): JSX.Element => {
    return (
        <div className={styles['form-item']}>
            <div className={styles.checkbox}>
                <input type="checkbox" id="passwordCheckbox"/>
                <label className={styles['check-label']} htmlFor={"passwordCheckbox"}>간편 로그인 정보 저장</label>
            </div>
        </div>
    );
};

export default PrimaryCheckBox;