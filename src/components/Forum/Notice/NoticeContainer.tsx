'use client'
import React from 'react';
import styles from "@/components/Forum/Notice/NoticeComponent.module.scss";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import ForumItem from "@/components/Forum/FormBody/ForumItem";
import SearchForum from "@/components/UI/SearchBox/SearchForum";
import IsForumRoute from "@/components/Forum/AsideNavbar/isForumRoute";
import ForumHeader from "@/components/Forum/ForumHeader/ForumHeader";


/**
 * 매장소식 컨테이너 컴포넌트.
 * @param {Object} props 컴포넌트 속성
 * @param {Object} props.result 초기 게시글 데이터
 * @param {number} props.totalPosts 총 게시글 수
 * @param {number} props.page 현재 페이지 번호
 * @param {string} props.path 경로를 통해 동적으로 데이터를 가져올 API 주소
 * @returns {JSX.Element} 공지사항 컨테이너를 렌더링
 */
const NoticeContainer = () => {
    const PATH = 'notice';

    /* Forum Header */
    const renderAnnouncementHeader = () => <ForumHeader/>;

    const renderAnnouncementContent = () => (
        <div className={styles['article-list']}>
            {/* 커뮤니티 네비게이션 */}
            <IsForumRoute/>
            {/* 게시글 렌더링 */}
            <ForumItem path={PATH}/>
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
        <main className={styles.container}>
            {renderAnnouncementHeader()}
            {renderAnnouncementContent()}
            {renderAnnouncementFooter()}
        </main>
    )
};

export default NoticeContainer;