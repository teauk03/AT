import React from 'react';
import styles from "@/components/Forum/Notice/NoticeComponent.module.scss";
import NoticeHeader from "@/components/Forum/Notice/NoticeHeader";
import SearchForum from "@/components/UI/SearchBox/SearchForum";
import Pna from "@/components/Atestnew/pna";
import Newi from "@/components/Atestnew/newi";

const Newc = () => {
    return (
        <main className={styles['content-container']}>
            {/* 공지사항 헤더 */}
            <NoticeHeader/>

            <section className={styles['content-item-list']}>
                <Newi path='event'/>
            </section>

            {/* [공지사항] 페이지 네이션 */}
            <Pna path='event'/>

            {/* 커뮤니티 검색 */}
            <SearchForum/>
        </main>
    )
};

export default Newc;