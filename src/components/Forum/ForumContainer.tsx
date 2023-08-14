'use client'
import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumSideNavbar from "@/components/Forum/SLB/ForumSlb";
import ForumItem from "@/components/Forum/ForumItem";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import {usePathname} from "next/navigation";
import {NoticeItemProps, Post} from "@/types/Borad";
import {useFetchPosts} from "@/hooks/Board/useFetchPosts";
import SearchBoxForum from "@/components/UI/SearchBox/SearchBoxForum";


const ForumContainer = ({ result: initialPosts, totalPosts, page }: NoticeItemProps) => {
    /* usePathname : 현재 URL 경로(값)를 가져옴 */
    const pathname  = usePathname();
    const isForumRoute = pathname === '/forum';
    //console.log('[ForumContainer] usePathname : ', pathname, isForumRoute)


    const { currentPage, result, totalPages, setCurrentPage
    } = useFetchPosts(
        '/api/post/list', page, initialPosts, totalPosts
    );


    return (
        <main className={styles.container}>
            {/* 커뮤니티 네비게이션, 작성글 리스트 */}
            <div className={styles.contents}>
                {/* 현재 경로가 "/forum"인 경우에만 "ForumSideNavbar"를 렌더링 */}
                {isForumRoute && <ForumSideNavbar/>}

                {/* 게시글 렌더링 */}
                <ForumItem result={result} path='forum'/>
            </div>

            {/* 커뮤니티 이전, 다음버튼 */}
            <PaginationForum
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />

            {/* 커뮤니티 검색 */}
            <SearchBoxForum/>
        </main>
    );
};

export default ForumContainer;