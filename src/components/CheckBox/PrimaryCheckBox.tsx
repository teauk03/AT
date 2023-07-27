import React from 'react';
// TODO : CSS(Scss)의 경우 추가 체크박스(약관동의 페이지 등) 제작시 분리
import styles from "@/components/Auth/Login.module.scss";

const PrimaryCheckBox = (): JSX.Element => {
    return (
        <div className={styles['form-item']}>
            <div className={styles.checkbox}>
                <input type="checkbox" id="passwordCheckbox"/>
                <label className={styles.checkboxLabel} htmlFor={"passwordCheckbox"}>Remember me</label>
            </div>
        </div>
    );
};

export default PrimaryCheckBox;