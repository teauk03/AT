import React from 'react';
import styles from "@/components/Reserve/Confirm/ReservationConfirm.module.scss";
import Link from "next/link";
import {UserProfileData} from "@/types/Account";

const ReserveHeader: React.FC<UserProfileData> = ({user}) => {
    return (
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
    );
};

export default ReserveHeader;