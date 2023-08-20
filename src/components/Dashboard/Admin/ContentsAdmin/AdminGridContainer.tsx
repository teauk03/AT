import React from 'react';
import styles from "@/components/Dashboard/Admin/ContentsAdmin/ContentsAdmin.module.scss";
import getConnectServerDb from "@/utils/DB/getConnectServerDb";
import LoadingForum from "@/components/UI/Loading/LoadingForum";

const AdminGridContainer = async () => {
    const {results} = await getConnectServerDb("reservation", "reservation_list");
    if (!results) return <LoadingForum/>;

    const results_data = (dateString: any) => {
        const date = new Date(dateString);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

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
                                    <span>{results_data(item.days)}</span>
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