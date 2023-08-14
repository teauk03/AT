import React from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";

const ReserveTopNavbar = () => {
    return (
        /* nav - 예약페이지 검색 네비게이션 */
        <nav className={styles['search-menu']}>
            <section className={styles['search-bar']}>
                <input type="text" className={styles['search-box']} autoFocus/>
                <div className={`${styles.item} ${styles.search}`}>beatmania IIDX 30 RESIDENT
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width={20} height={20} strokeLinecap="round" strokeLinejoin="round" className={`${styles.feather} ${styles['feather-briefcase']}`}>
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </div>
                <div className={`${styles.item} ${styles.search}`}>Sound Vortex Exceed Gear
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" width={20} height={20} strokeWidth="3" strokeLinecap="round"
                         strokeLinejoin="round" className={`${styles.feather} ${styles['feather-x']}`}>
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </div>
            </section>
        </nav>
    );
};

export default ReserveTopNavbar;