'use client'
import React from 'react';
import styles from "@/components/Reserve/Reserve.module.scss";
import {useSearchParams} from "next/navigation";
import Calendar from "@/components/Reserve/Rent/Calendar/Calendar";
import Link from "next/link";

const RentContainer = () => {
    /* 쿼리스트링을 사용해 동적 라우팅 : 게임의 타이틀 */
    const searchParams = useSearchParams();
    const game = searchParams ? searchParams.get('game') : null;

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.title}>예약하기</span>
                </div>
                <form className={styles.reserveForm}>
                    {/* 캘린더 */}
                    <Calendar/>

                    <div className={styles.wrapper}>
                        <div className={styles['input-wrapper']}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>이름</label>
                                <input type="text" className={styles.input} required/>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>연락처</label>
                                <input type="tel" className={styles.input} required/>
                            </div>
                        </div>
                        <div className={styles['submit-button']}>
                            <Link href={'/reserve/home'} className={styles.button}>돌아가기</Link>
                            <button type="submit" className={styles.button}>예약하기</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default RentContainer;