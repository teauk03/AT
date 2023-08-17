'use client'
import React from 'react';
import styles from "@/components/Reserve/Reserve.module.scss";
import { useSearchParams } from "next/navigation";

const RentContainer = () => {
    /* 쿼리스트링을 사용해 동적 라우팅 : 게임의 타이틀 */
    const searchParams = useSearchParams();
    const game = searchParams ? searchParams.get('game') : null;

    return (
        <main className={styles.container}>
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
        </main>
    );
};

export default RentContainer;