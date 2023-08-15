'use client'
import React, {useState} from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import Link from "next/link";
import ForumSideNavbar from "@/components/Forum/SLB/ForumSlb";
import ForumItem from "@/components/Forum/ForumItem";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import {usePathname} from "next/navigation";
import {useFetchPosts} from "@/hooks/Board/useFetchPosts";
import SearchForum from "@/components/UI/SearchBox/SearchForum";
import SvgIconComponent from "@/components/SvgIconComponent";
import SearchResult from "@/components/UI/SearchBox/SearcgResult";
import {NoticeItemProps, Post} from "@/types/Borad";
import useNewPostHandler from "@/hooks/Board/useNewPostAuth";



const ForumContainer = ({ result: initialPosts, totalPosts, page}: NoticeItemProps) => {
    /* usePathname : 현재 URL 경로(값)를 가져옴 */
    const pathname  = usePathname();
    const isForumRoute = pathname === '/announcement' && '/event';

    /* 검색된 게시물 상태 */
    const [searchResults, setSearchResults] = useState<Post[] | null>(null);

    /* 게시물 가져오기 로직 (currentPage, result, totalPages 등 관리) */
    const { currentPage, result, totalPages, setCurrentPage
    } = useFetchPosts('/api/post/list', page, initialPosts, totalPosts);

    /* 검색 결과를 상태로 설정 */
    const handleSearchResults = (results: Post[]) => setSearchResults(results);
    console.log(initialPosts)

    /* 새 게시물 작성 버튼 */
    const status = "unauthenticated";
    const handleNewPostOnClick = useNewPostHandler(status);

    return (
        <main className={styles.container}>
            {/* Forum Header */}
            <div className={styles['forum-header']}>
                <h2 className={styles['forum-header-title']}>커뮤니티</h2>
                <p className={styles['forum-header-sub']}>ALL</p>

                {/* Search & Write Menu */}
                <div className={styles['forum-sub-title']}>
                    {/* Create Write : Routing(../write) */}
                    <Link className={styles['forum-link-button']} href={'/write'} onClick={handleNewPostOnClick}>
                        <SvgIconComponent width={20} height={20} svgPath={'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'}/>
                        글작성
                    </Link>
                </div>
            </div>

            {/* 커뮤니티 네비게이션, 작성글 리스트 */}
            <div className={styles['article-list']}>
                {/* 현재 경로가 "announcement, event"이 아니면 "ForumSideNavbar"를 렌더링 */}
                {!isForumRoute && <ForumSideNavbar/>}

                {/* 게시글 렌더링 */}
                {searchResults === null && <ForumItem result={result} path='forum'/>}

                {/* 새로운 게시물 렌더링 컴포넌트 */}
                {searchResults !== null && <SearchResult/>}
            </div>

            {/* [Footer] 커뮤니티 이전, 다음버튼 */}
            <PaginationForum
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />

            {/* [Footer] 커뮤니티 검색 */}
            <SearchForum onSearchResults={handleSearchResults}/>
        </main>
    );
};

export default ForumContainer;