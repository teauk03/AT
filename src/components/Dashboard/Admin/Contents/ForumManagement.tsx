import React from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";
import {ADMIN_MANAGEMENT_POSTS_TYPE} from "@/types/Account";
import formatDate from "@/utils/formatDate";
import ReservationButton from "@/components/Dashboard/Admin/Button/ReservationButton";

type FORUM_PROPS_TYPE = {
    title: string;
    results: ADMIN_MANAGEMENT_POSTS_TYPE[];
}

/* 추후 사용여부 고려 */
const ForumContainer = ({title, results}: FORUM_PROPS_TYPE) => {
    return (
        <section className={styles['grid-container']}>
            <article className={styles['admin-article']}>
                <h1>{title}</h1>
                <div className={styles.reserve}>
                    <div className={styles['reserve-inner']}>
                        {results.map((item, index) => (
                            <div key={index} className={styles['reserve-list']}>
                                <div className={styles['reserve-item']}>
                                    <span>{item.userName}</span>
                                    <span>{item.title}</span>
                                    <span>{formatDate(item.content)}</span>
                                </div>
                                <ReservationButton reservationId={item._id} />
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ForumContainer;