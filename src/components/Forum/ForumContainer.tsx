'use client'
import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumItem from "@/components/Forum/ForumItem";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import SearchForum from "@/components/UI/SearchBox/SearchForum";
import {NoticeItemProps} from "@/types/Borad";
import ForumHeader from "@/components/Forum/ForumHeader";
import usePaginationLogic from "@/hooks/Board/usePaginationLogic";
import IsForumRoute from "@/components/Forum/isForumRoute";


/**
 * 커뮤니티 컨테이너
 * @param initialPosts 초기 게시글
 * @param totalPosts 전체 게시글 수
 * @param page 현재 페이지
 * @param path 현재 경로
 * @returns 커뮤니티 컨테이너를 렌더링하는 JSX.Element
 * @constructor
 * @see src\components\Forum\ForumContainer.tsx
 * @see src\app\(board)\forum\page.tsx
 * @see src\hooks\Board\useForumLogic.ts
 * @see src\components\Forum\ForumItem.tsx
 * @see src\components\UI\Pagination\PaginationForum.tsx
 * @see src\components\UI\SearchBox\SearchForum.tsx
 * @see src\components\Forum\ForumHeader.tsx
 * @see src\components\Forum\isForumRoute.tsx
 * @see src\components\UI\Error\ErrorForum.tsx
 * @see src\utils\fetchPostsData.ts
 * @see src\utils\fetchSearchPostsData.ts
 **/
const ForumContainer = (
    { result: initialPosts, totalPosts, page, path }: NoticeItemProps & { path: string }
) => {
    const {currentPage, result, totalPages, setCurrentPage} = usePaginationLogic(
        `/api/${path}/list`, page, initialPosts, totalPosts
    );


    /* Forum Header */
    const renderForumHeader = () => <ForumHeader />;

    const renderForumContent = () => (
        <div className={styles['article-list']}>
            {/* 커뮤니티 네비게이션 */}
            <IsForumRoute />
            {/* 게시글 렌더링 */}
            <ForumItem result={result} path='forum'/>
        </div>
    );

    const renderForumFooter = () => (
        <>
            {/* [Footer] 페이지 네이션 */}
            <PaginationForum
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
            {/* [Footer] 커뮤니티 검색 */}
            <SearchForum />
        </>
    );

    return (
        <main className={styles.container}>
            {renderForumHeader()}
            {renderForumContent()}
            {renderForumFooter()}
        </main>
    );
};

export default ForumContainer;