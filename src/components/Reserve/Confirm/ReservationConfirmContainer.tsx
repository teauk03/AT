import React from 'react';
import styles from './ReservationConfirm.module.scss';
import Link from "next/link";

const ReservationConfirmContainer = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles['header-contents']}>
                    <div className={styles['header-info']}>
                        <div className={styles['header-info-id']}>
                            <Link href={'/reserve/confirm'}>유저이름</Link>
                            <span>님 예약해주셔서 감사합니다.</span>
                        </div>
                        <div className={styles['header-link']}>
                            <button className={styles['header-link-item']}>
                                <span>예약</span>
                                <em>0</em>
                            </button>
                            <button className={styles['header-link-item']}>
                                <span>리뷰</span>
                                <em>0</em>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Contents */}
            <main className={styles.main}>
                <div className={styles['main-contents']}>
                    <section className={styles['main-section']}>
                        <div className={styles['main-list']}>
                            <div className={styles['main-item']}>
                                <Link className={styles['main-item-link']} href={'/reserve/confirm'}>
                                    <span>몇일전</span>
                                    <span>게임 이름</span>
                                    <span>예약날짜 시간</span>
                                </Link>
                            </div>
                            <div className={styles['main-icon']}>
                                <Link className={styles['main-icon-item']} href={'/reserve/confirm'}>전화</Link>
                                <Link className={styles['main-icon-item']} href={'/reserve/confirm'}>메세지</Link>
                                <Link className={styles['main-icon-item']} href={'/reserve/confirm'}>주소</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default ReservationConfirmContainer;