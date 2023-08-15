'use client'
import React from 'react';
import styles from "@/components/Notice/NoticeComponent.module.scss";
import NoticeHeader from "@/components/Notice/NoticeHeader";
import {NoticeItemProps} from "@/types/Borad";
import {useFetchPosts} from "@/hooks/Board/useFetchPosts";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import ForumItem from "@/components/Forum/ForumItem";
import SearchBoxForum from "@/components/UI/SearchBox/SearchBoxForum";


/**
 * 매장소식 컨테이너 컴포넌트.
 * @param {Object} props 컴포넌트 속성
 * @param {Object} props.result 초기 게시글 데이터
 * @param {number} props.totalPosts 총 게시글 수
 * @param {number} props.page 현재 페이지 번호
 * @param {string} props.path 경로를 통해 동적으로 데이터를 가져올 API 주소
 * @returns {JSX.Element} 공지사항 컨테이너를 렌더링
 */
const NoticeContainer = (
    {
        result: initialPosts,
        totalPosts,
        page,
        path
    }: NoticeItemProps & { path: string }) => {

    /* [Custom Hook] useFetchPosts 훅을 사용하여 데이터를 가져옴 */
    const {
        currentPage, result, totalPages, setCurrentPage
    } = useFetchPosts(
        `/api/notice/${path}`, page, initialPosts, totalPosts
    );


    return (
        <div className={styles['content-container']}>
            {/* 공지사항 헤더 */}
            <NoticeHeader/>

            <div className={styles['content-item-list']}>
                {/* 게시글 렌더링 */}
                <ForumItem result={result} path='announcement'/>
            </div>

            {/* 페이지 네이션 */}
            <PaginationForum
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />

            {/* 커뮤니티 검색 */}
            <SearchBoxForum/>
        </div>
    )
};

export default NoticeContainer;