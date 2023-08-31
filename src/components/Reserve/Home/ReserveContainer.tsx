'use client'

import React, {useState} from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import ReserveSideNavbar from "@/components/Reserve/ReserveTopNavbar";
import ReserveContents from "@/components/Reserve/Home/ReserveContents";
import ReserveSearchBar from "@/components/SearchBar/Reserve/ReserveSearchBar";

const ReserveContainer = () => {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <main className={styles['reserve-main']}>
            <div className={styles['reserve-container']}>
                {/* ReserveTopNavbar : 검색 네비게이션 */}
                <div className={styles['search-menu']}>
                    {/* nav - 예약페이지 네비게이션 */}
                    <ReserveSearchBar
                        inputSearch={inputSearch}
                        setInputSearch={setInputSearch}
                    />
                    <ReserveSideNavbar/>
                </div>
                {/* ReserveContents : 메인 콘텐츠 */}
                <ReserveContents/>
            </div>
        </main>
    );
};

export default ReserveContainer;