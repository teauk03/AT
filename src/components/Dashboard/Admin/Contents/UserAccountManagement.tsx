import React from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";
import {ADMIN_MANAGEMENT_USERS_TYPE} from "@/types/Account";
import formatDate from "@/utils/formatDate";
import ReservationButton from "@/components/Dashboard/Admin/Button/ReservationButton";

type USERS_PROPS_TYPE = {
    title: string;
    results: ADMIN_MANAGEMENT_USERS_TYPE[];
}

/* 추후 사용여부 고려 */
const UserAccountContainer = ({title, results}: USERS_PROPS_TYPE) => {
    return (
        <>
            <div className={styles['reserve-nav']}>
                <div className={styles['nav-item']}>
                    <button type={"button"}>
                        ALL
                    </button>
                </div>
                <div className={styles['nav-item']}>
                    <button type={"button"}>
                        BlackList
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
                                        <span>{item.user_status}</span>
                                        <span>{formatDate(item.subscription)}</span>
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

export default UserAccountContainer;