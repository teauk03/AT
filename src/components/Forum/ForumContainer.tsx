'use client'
import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumSideNavbar from "@/components/Forum/SLB/ForumSlb";
import ForumItem from "@/components/Forum/ForumItem";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import {usePathname, useRouter} from "next/navigation";
import {useFetchPosts} from "@/hooks/Board/useFetchPosts";
import SearchBoxForum from "@/components/UI/SearchBox/SearchBoxForum";
import {NoticeItemProps} from "@/types/Borad";


const ForumContainer = ({ result: initialPosts, totalPosts, page }: NoticeItemProps) => {
    /* usePathname : 현재 URL 경로(값)를 가져옴 */
    const pathname  = usePathname();
    const isForumRoute = pathname === '/forum';
    //console.log('[ForumContainer] usePathname : ', pathname, isForumRoute)


    const { currentPage, result, totalPages, setCurrentPage
    } = useFetchPosts(
        '/api/post/list', page, initialPosts, totalPosts
    );


    const router = useRouter();
    const handleNewPostOnClick = (e: React.MouseEvent) => {
        if (status === 'unauthenticated') {
            e.preventDefault();
            alert('로그인 후 이용 가능합니다.');
            router.push('/login');
        } else {
            router.push('/write');
        }
    }


    return (
        <main className={styles.container}>
            {/* Forum Header */}
            <div className={styles['forum-header']}>
                <h2 className={styles['forum-header-title']}>
                    커뮤니티
                </h2>
                {/* 디자인 설계중 */}
                <p className={styles['forum-header-sub']}>ALL</p>
            </div>
            
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