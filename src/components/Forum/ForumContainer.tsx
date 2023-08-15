'use client'
import React, {useState} from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumSideNavbar from "@/components/Forum/SLB/ForumSlb";
import ForumItem from "@/components/Forum/ForumItem";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import {usePathname, useRouter} from "next/navigation";
import {useFetchPosts} from "@/hooks/Board/useFetchPosts";
import SearchBoxForum from "@/components/UI/SearchBox/SearchBoxForum";
import {NoticeItemProps} from "@/types/Borad";
import Link from "next/link";
import SvgIconComponent from "@/components/SvgIconComponent";


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
                {/* 현재 경로가 "/forum"인 경우에만 "ForumSideNavbar"를 렌더링 */}
                {isForumRoute && <ForumSideNavbar/>}

                {/* 게시글 렌더링 */}
                <ForumItem result={result} path='forum'/>
            </div>

            {/* [Footer] 커뮤니티 이전, 다음버튼 */}
            <PaginationForum
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />

            {/* [Footer] 커뮤니티 검색 */}
            <SearchBoxForum/>
        </main>
    );
};

export default ForumContainer;