import React from 'react';
import styles from "@/components/Reserve/Confirm/ReservationConfirm.module.scss";
import getUserServerSession from "@/utils/DB/getUserServerSession";
import ReserveHeader from "@/components/Reserve/Confirm/Header/ReserveHeader";
import ReserveBody from "@/components/Reserve/Confirm/Body/ReserveBody";
import getConnectServerDb from "@/utils/DB/getConnectServerDb";
import LoadingForum from "@/components/UI/Loading/LoadingForum";

const ReservationConfirm = async () => {
    const user = await getUserServerSession();
    if (user && 'redirect' in user) return user;

    /* DB 쿼리 */
    const {results} = await getConnectServerDb("reservation", "reservation_list", 10);
    if (!results) return <LoadingForum/>;
    console.log('ReservationConfirm', results)
    return (
        <div className={styles.container}>
            <ReserveHeader user={user}/>
            <ReserveBody results={results}/>
        </div>
    )
};

export default ReservationConfirm;