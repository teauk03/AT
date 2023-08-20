import React from 'react';
import styles from '@/components/Dashboard/Admin/Admin.module.scss';
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import getConnectServerDb from "@/utils/DB/getConnectServerDb";
import LoadingForum from "@/components/UI/Loading/LoadingForum";
import formatDate from "@/utils/formatDate";
import checkAdminRole from "@/utils/User/checkAdminRole";

const AdminPage = async () => {
    const adminCheckResult = await checkAdminRole();
    if (adminCheckResult) return adminCheckResult;

    /* DB 쿼리 */
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
    )
}

export default AdminPage;