import React from 'react';
import styles from "@/components/Board/Notice/NoticeComponent.module.scss";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import ForumBody from "@/components/Board/Forum/FormBody/ForumBody";
import SearchForum from "@/components/UI/Input/SearchBox/SearchForum";
import NoticeHeader from "@/components/Board/Notice/Header/NoticeHeader";
import GlobalNavbarComponent from "@/components/UI/Nav/GlobalNavbarComponent";


/**
 * 매장소식 컨테이너 컴포넌트.
 * @param {string} PATH 경로를 통해 동적으로 데이터를 가져올 API 주소
 * @returns {JSX.Element} 공지사항 컨테이너를 렌더링
 */
const NoticeContainer = () => {
    const PATH = 'notice';
    const HREF = 'announcement';


    /* Forum Header */
    const renderAnnouncementHeader = () => <NoticeHeader/>;

    const renderAnnouncementContent = () => (
        <div className={styles['article-list']}>
            {/* 게시글 렌더링 */}
            <ForumBody path={PATH} href={HREF}/>
        </div>
    );

    const renderAnnouncementFooter = () => (
        <>
            {/* [Footer] 페이지 네이션 */}
            <PaginationForum path={PATH}/>
            {/* [Footer] 커뮤니티 검색 */}
            <SearchForum/>
        </>
    );

    return (
        <>
            <GlobalNavbarComponent/>
            {renderAnnouncementHeader()}
            <main className={styles.container}>
                {renderAnnouncementContent()}
                {renderAnnouncementFooter()}
            </main>
        </>
    )
};

export default NoticeContainer;