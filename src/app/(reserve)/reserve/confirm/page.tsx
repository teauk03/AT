import React from 'react';
import styles from "@/components/Reserve/Confirm/ReservationConfirm.module.scss";
import getUserServerSession from "@/utils/DB/getUserServerSession";
import ReserveHeader from "@/components/Reserve/Confirm/Header/ReserveHeader";
import ReserveBody from "@/components/Reserve/Confirm/Body/ReserveBody";

const ReservationConfirm = async () => {
    const user = await getUserServerSession();
    if (user && 'redirect' in user) return user;
    return (
        <div className={styles.container}>
            <ReserveHeader user={user}/>
            <ReserveBody/>
        </div>
    )
};

export default ReservationConfirm;