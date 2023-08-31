import React from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import SvgIconComponent from "@/components/SvgIconComponent";
import ReserveSearchBar from "@/components/SearchBar/Reserve/ReserveSearchBar";

const ReserveSideNavbar = () => {
    return (
        <>
            {/* nav - 예약페이지 네비게이션 */}
            <div className={styles['search-menu']}>
                <ReserveSearchBar/>
                {/* 자주(최근?)검색 이력 */}
                <section className={styles['search-bar']}>
                    <div className={`${styles.item} ${styles.search}`}>beatmania IIDX 30 RESIDENT
                        <SvgIconComponent width={20} height={20} svgPath={'M18 6L6 18M6 6l12 12'}/>
                    </div>
                    <div className={`${styles.item} ${styles.search}`}>Sound Vortex Exceed Gear
                        <SvgIconComponent width={20} height={20} svgPath={'M18 6L6 18M6 6l12 12'}/>
                    </div>
                    <div className={`${styles.item} ${styles.search}`}>GITADORA FUZZ-UP 기타프릭스
                        <SvgIconComponent width={20} height={20} svgPath={'M18 6L6 18M6 6l12 12'}/>
                    </div><div className={`${styles.item} ${styles.search}`}>MAIMAI DX FESTIVAL PLUS
                        <SvgIconComponent width={20} height={20} svgPath={'M18 6L6 18M6 6l12 12'}/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ReserveSideNavbar;