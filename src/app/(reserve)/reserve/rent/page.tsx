import React from 'react';
import styles from '@/components/Reserve/Reserve.module.scss';

const Reserve = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>예약하기</h1>
            </div>
            <form className={styles.reserveForm}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>이름</label>
                    <input type="text" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>연락처</label>
                    <input type="tel" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>날짜</label>
                    <input type="date" className={styles.input} required />
                </div>
                <div className={styles.submitButton}>
                    <button type="submit" className={styles.button}>예약하기</button>
                </div>
            </form>
        </div>
    );
};

export default Reserve;