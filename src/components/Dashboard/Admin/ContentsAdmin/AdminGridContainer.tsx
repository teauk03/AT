import React from 'react';
import styles from "@/components/Dashboard/Admin/ContentsAdmin/ContentsAdmin.module.scss";
import getConnectServerDb from "@/utils/DB/getConnectServerDb";
import LoadingForum from "@/components/UI/Loading/LoadingForum";
import formatDate from "@/utils/formatDate";

const AdminGridContainer = async () => {
    const {results} = await getConnectServerDb("reservation", "reservation_list", 5);
    if (!results) return <LoadingForum/>;

    return (
        <section className={styles['grid-container']}>
            <article className={styles.article}>
                <h1>예약목록</h1>
                <div className={styles.reserve}>
                    <div className={styles['reserve-inner']}>
                        {results.map((item, index) => (
                            <div key={index} className={styles['reserve-list']}>
                                <div key={index} className={styles['reserve-item']}>
                                    <span>{item.name}</span>
                                    <span>{item.division}</span>
                                    <span>{item.division_title}</span>
                                    <span>{formatDate(item.days)}</span>
                                    <span>{item.time}</span>
                                </div>
                                <div className={styles['reserve-submit-btn']}>
                                    <button>수락</button>
                                    <button>거절</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
            <article>
                <h1>근무 시간표</h1>
            </article>
        </section>
    );
};

export default AdminGridContainer;