import React from 'react';
import styles from "@/components/Reserve/Confirm/ReservationConfirm.module.scss";
import Link from "next/link";
import getConnectServerDb from "@/utils/DB/getConnectServerDb";
import LoadingForum from "@/components/UI/Loading/LoadingForum";
import formatDate from "@/utils/formatDate";

const ReserveBody = async () => {
    const {results} = await getConnectServerDb("reservation", "reservation_list", 10);
    if (!results) return <LoadingForum/>;
    console.log(results)
    return (
        <main className={styles.main}>
            <div className={styles['main-contents']}>
                <section className={styles['main-section']}>
                    <div className={styles['main-list']}>
                        {results.map((item, index) => (
                            <>
                                <div className={styles['main-item']}>
                                    <div>
                                        <Link className={styles['main-item-link']} href={'/reserve/confirm'}>
                                            <span>몇일전</span>
                                            <span>{item.division_title}</span>
                                        </Link>
                                    </div>
                                    <div>
                                        예약날짜 : <span>{formatDate(item.days)}</span>
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