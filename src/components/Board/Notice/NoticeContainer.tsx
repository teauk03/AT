import React from 'react';
import styles from "@/components/Board/Notice/NoticeComponent.module.scss";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import ForumBody from "@/components/Board/Forum/FormBody/ForumBody";
import SearchForum from "@/components/SearchBar/SearchBox/SearchForum";
import NoticeHeader from "@/components/Board/Notice/Header/NoticeHeader";


/**
 * 매장소식 컨테이너 컴포넌트.
 * @param {string} PATH 경로를 통해 동적으로 데이터를 가져올 API 주소
 * @returns {JSX.Element} 공지사항 컨테이너를 렌더링
 */
const NoticeContainer = () => {
    const PATH = 'notice';
    const HREF = 'announcement';

    return (
        <>
            <NoticeHeader/>
            <main className={styles.container}>
                <div className={styles['article-list']}>
                    {/* 게시글 렌더링 */}
                    <ForumBody path={PATH} href={HREF}/>
                </div>
                {/* [Footer] 페이지 네이션 */}
                <PaginationForum path={PATH}/>
                {/* [Footer] 커뮤니티 검색 */}
                <SearchForum/>
            </main>
        </>
    )
};

export default NoticeContainer;