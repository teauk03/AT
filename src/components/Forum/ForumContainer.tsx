'use client'
import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumItem from "@/components/Forum/ForumItem";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import SearchForum from "@/components/UI/SearchBox/SearchForum";
import {NoticeItemProps, Post} from "@/types/Borad";
import ForumHeader from "@/components/Forum/ForumHeader";
import useForumLogic from "@/hooks/Board/useForumLogic";
import IsForumRoute from "@/components/Forum/isForumRoute";



const ForumContainer = (
    { result: initialPosts, totalPosts, page, path }: NoticeItemProps & { path: string }
) => {
    const {currentPage, result, totalPages, setCurrentPage} = useForumLogic(
        `/api/notice/${path}`, page, initialPosts, totalPosts
    );

    return (
        <main className={styles.container}>
            {/* Forum Header */}
            <ForumHeader />

            {/* 커뮤니티 네비게이션, 작성글 리스트 */}
            <div className={styles['article-list']}>
                <IsForumRoute />

                {/* 게시글 렌더링 */}
                <ForumItem result={result} path='forum'/>
            </div>

            {/* [Footer] 페이지 네이션 */}
            <PaginationForum
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />

            {/* [Footer] 커뮤니티 검색 */}
            <SearchForum/>
        </main>
    );
};

export default ForumContainer;