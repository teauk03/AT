import React from 'react';
import styles from "@/components/Help/Support/ContactUs/contactus.module.scss";

const ContactUsCheckBox = () => {
    return (
        <>
            <input className={styles.box} type="checkbox" name="agree" id="agree"/>
            <label className={styles.box} htmlFor="agree">
                개인정보 수집에 동의합니다.
            </label>
        </>
    );
};

export default ContactUsCheckBox;