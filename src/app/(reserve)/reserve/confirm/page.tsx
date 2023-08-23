import React from 'react';
import styles from "@/components/Reserve/Confirm/ReservationConfirm.module.scss";
import getUserServerSession from "@/utils/DB/getUserServerSession";
import getConnectServerDb from "@/utils/DB/getConnectServerDb";
import LoadingForum from "@/components/UI/Loading/LoadingForum";
import Link from "next/link";
import formatDate from "@/utils/formatDate";
import SvgIconComponent from "@/components/SvgIconComponent";

const ReservationConfirm = async () => {
    const user = await getUserServerSession();
    if (user && 'redirect' in user) return user;

    /* DB 쿼리 */
    const {results} = await getConnectServerDb("reservation", "reservation_list", 10);
    if (!results) return <LoadingForum/>;

    /* 날짜 계산( D-n ) */
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
        <div className={styles.container}>
            {/* 헤더 : 유저 타이틀 */}
            <header className={styles.header}>
                <div className={styles['header-contents']}>
                    <div className={styles['header-info']}>
                        <div className={styles['header-info-id']}>
                            <Link href={'/reserve/confirm'}>{user.name}</Link>
                            <span>님 환영합니다.</span>
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

            {/* 메인 컨텐츠 : 예약 리스트 */}
            <main className={styles.main}>
                <div className={styles['main-contents']}>
                    <section className={styles['main-section']}>
                        <div className={styles['main-list']}>
                            {results.map((item: any, index: number) => (
                                <ul key={index} className={styles['main-menu']}>
                                    <li className={styles['main-item']}>
                                        {item.rent_status === '예약완료' ? (
                                            <>
                                                <div className={styles['main-check']}>
                                                    <SvgIconComponent width={25} height={25} svgPath={'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'}/>
                                                    {item.rent_status}
                                                </div>
                                                <span className={styles['main-days']}>{calculateDaysAgo(item.days)}</span>
                                            </>
                                        ) : (
                                            <span className={styles['main-check']}>
                                                <SvgIconComponent width={25} height={25} svgPath={'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'}/>
                                                {item.rent_status}
                                            </span>
                                        )}
                                    </li>
                                    <li className={styles['main-item']}>
                                        <Link className={styles['main-link']} href={'/reserve/confirm'}>
                                            <span>{item.division_title}</span>
                                        </Link>
                                    </li>
                                    <li className={styles['main-item']}>
                                        예약날짜 : <span>{formatDate(item.days)}{` (${item.time})`}</span>
                                    </li>
                                    <li className={styles['main-icon']}>
                                        <Link className={styles['main-icon-item']} href={'/reserve/confirm'}>
                                            <SvgIconComponent width={25} height={25} svgPath={'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'}/>
                                        </Link>
                                        <Link className={styles['main-icon-item']} href={'/reserve/confirm'}>
                                            <SvgIconComponent width={25} height={25} svgPath={'M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z'}/>
                                        </Link>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
};

export default ReservationConfirm;