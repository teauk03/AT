import React from 'react';
import styles from './ReserveOverview.module.scss';
import ReserveTopNavbar from "@/components/Reserve/ReserveTopNavbar";
import OverviewContainer from "@/components/Reserve/Overview/OverviewContainer";
import OverviewAsideSection from "@/components/Reserve/Overview/OverviewAsideSection";
import OverviewMainSection from "@/components/Reserve/Overview/OverviewMainSection";

const Overview = () => {
    return (
        <div className={`${styles.wrapper} ${styles['detail-page']}`}>
            {/* nav - 검색 네비게이션 */}
            <ReserveTopNavbar/>

            {/* 상세페이지 컨테이너 */}
            <main className={styles['game-overview']}>
                {/*<OverviewContainer/>*/}
                {/* [Left Section] 상세페이지 Aside */}
                <OverviewAsideSection/>

                {/* [Right Section] 상세페이지 섹션 */}
                <OverviewMainSection/>
            </main>
        </div>
    );
};

export default Overview;