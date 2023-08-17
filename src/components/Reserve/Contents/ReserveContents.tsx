import React from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import ReserveNavbar from "@/components/Reserve/Navbar/ReserveNavbar";
import ReserveList from "@/components/Reserve/Contents/ReserveList/ReserveList";
import ReserveHeader from "@/components/Reserve/Contents/ReserveHeader";

const ReserveContents = () => {
    return (
        <section className={styles['main-container']}>
            {/* aside - 사이드 메뉴 */}
            <ReserveNavbar/>

            {/* section - 메인 컨텐츠 아이템 섹션 */}
            <section className={styles['searched-games']}>
                {/* header - 예약 헤더 */}
                <ReserveHeader/>
                {/* article - 예약 리스트 */}
                <ReserveList/>
            </section>
        </section>
    );
};

export default ReserveContents;