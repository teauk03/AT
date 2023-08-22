import React from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";
import {ADMIN_MANAGEMENT_RESERVATION_TYPE} from "@/types/Account";
import formatDate from "@/utils/formatDate";
import ReservationButton from "@/components/Dashboard/Admin/Button/ReservationButton";

type RESERVATION_PROPS_TYPE = {
    title: string;
    results: ADMIN_MANAGEMENT_RESERVATION_TYPE[];
}

/* 추후 사용여부 고려 */
const ReservationContainer = ({title, results}: RESERVATION_PROPS_TYPE) => {
    return (
        <>
            <div className={styles['reserve-nav']}>
                <div className={styles['nav-item']}>
                    <button type={"button"}>
                        예약대기
                    </button>
                </div>
                <div className={styles['nav-item']}>
                    <button type={"button"}>
                        예약완료
                    </button>
                </div>
                <div className={styles['nav-item']}>
                    <button type={"button"}>
                        예약거절
                    </button>
                </div>
            </div>
            <section className={styles['grid-container']}>
                <article className={styles['reserve-article']}>
                    <h1>{title}</h1>
                    <div className={styles.reserve}>
                        <div className={styles['reserve-inner']}>
                            {results.map((item, index) => (
                                <div key={index} className={styles['reserve-list']}>
                                    <div className={styles['reserve-item']}>
                                        <span>{item.name}</span>
                                        <span>{item.division}</span>
                                        <span>{item.division_title}</span>
                                        <span>{formatDate(item.days)}</span>
                                        <span>{item.time}</span>
                                    </div>
                                    <ReservationButton reservationId={item._id} />
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};

export default ReservationContainer;