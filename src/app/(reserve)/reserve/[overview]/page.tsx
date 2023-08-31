import React from 'react';
import styles from './ReserveOverview.module.scss';
import OverviewAsideSection from "@/components/Reserve/Overview/OverviewAsideSection";
import OverviewMainSection from "@/components/Reserve/Overview/OverviewMainSection";
import ReserveSideNavbar from "@/components/Reserve/ReserveTopNavbar";

const Overview = () => {
    return (
        <div className={`${styles.wrapper} ${styles['detail-page']}`}>
            {/* nav - 검색 네비게이션 */}
            <ReserveSideNavbar/>
            {/* 상세페이지 컨테이너 */}
            <main className={styles['game-overview']}>
                {/* [Left Section] 상세페이지 Aside */}
                <OverviewAsideSection/>
                {/* [Right Section] 상세페이지 섹션 */}
                <OverviewMainSection/>
            </main>
        </div>
    );
};

export default Overview;