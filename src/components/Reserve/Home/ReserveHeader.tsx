import React from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";

const ReserveHeader = () => {
    return (
        <div className={styles['searched-bar']}>
            <div className={styles['searched-show']}>대여 목록</div>
            <div className={styles['searched-sort']}>정렬 기준: <span className={styles['post-time']}>인기 게임 </span><span
                className={styles['menu-icon']}>▼</span></div>
        </div>
    );
};

export default ReserveHeader;