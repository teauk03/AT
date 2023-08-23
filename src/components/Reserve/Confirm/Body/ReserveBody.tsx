import React from 'react';
import styles from "@/components/Reserve/Confirm/ReservationConfirm.module.scss";
import Link from "next/link";
import formatDate from "@/utils/formatDate";

const ReserveBody = async ({results}: any) => {
    /* 날짜 계산 로직 */
    const calculateDaysAgo = (reservationDate: string): string => {
        const today = new Date(); // 오늘 날짜
        today.setHours(0, 0, 0, 0); // 오늘 날짜의 시간, 분, 초, 밀리초를 0으로 설정합니다.
        const reservation = new Date(reservationDate); // 예약일

        const diffInTime = reservation.getTime() - today.getTime();
        const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

        if (diffInDays === 1) return '하루전';
        if (diffInDays > 1) return `${diffInDays}일전`;

        return ''; // 오늘이나 그 이전의 날짜인 경우 빈 문자열 반환
    };

    return (
        <main className={styles.main}>
            <div className={styles['main-contents']}>
                <section className={styles['main-section']}>
                    <div className={styles['main-list']}>
                        {results.map((item: any, index: number) => (
                            <>
                                <div key={index} className={styles['main-item']}>
                                    <div>
                                        {item.rent_status}
                                        {item.rent_status === '예약완료' &&
                                            <span>{calculateDaysAgo(item.days)}</span>
                                        }
                                    </div>
                                    <div>
                                        <Link className={styles['main-item-link']} href={'/reserve/confirm'}>
                                            <span>{item.division_title}</span>
                                        </Link>
                                    </div>
                                    <div>
                                        예약날짜 : <span>{formatDate(item.days)}</span>
                                    </div>
                                    <div>
                                        시간 : <span>{item.time}</span>
                                    </div>
                                </div>
                                <div className={styles['main-icon']}>
                                    <Link className={styles['main-icon-item']} href={'/reserve/confirm'}>
                                        전화
                                    </Link>
                                    <Link className={styles['main-icon-item']} href={'/reserve/confirm'}>
                                        메세지
                                    </Link>
                                    <Link className={styles['main-icon-item']} href={'/reserve/confirm'}>
                                        주소
                                    </Link>
                                </div>
                            </>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ReserveBody;