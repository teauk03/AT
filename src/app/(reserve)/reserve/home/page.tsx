import React from 'react';
import styles from './ReserveHome.module.scss'
import ReserveTopNavbar from "@/components/Reserve/ReserveTopNavbar";
import ReserveContents from "@/components/Reserve/Contents/ReserveContents";


/* ReserveHome : 예약페이지 */
const ReserveHome = () => {
    return (
        <main className={styles['reserve-main']}>
            <div className={styles['reserve-container']}>
                {/* ReserveTopNavbar : 검색 네비게이션 */}
                <ReserveTopNavbar/>
                {/* ReserveContents : 메인 콘텐츠 */}
                <ReserveContents/>
            </div>
        </main>
    );
};

export default ReserveHome;