'use client'
import React, {useEffect, useState} from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumSideNavbar from "@/components/Forum/SLB/ForumSlb";
import ForumItem from "@/components/Forum/ForumItem";
import ForumFooter from "@/components/Forum/ForumFooter";
import ForumFooterSearchItems from "@/components/Forum/ForumFooterSearchItems";
import {usePathname} from "next/navigation";
import {NoticeItemProps, Post} from "@/types/Borad";


const ForumContainer = ({ result: initialPosts, totalPosts, page }: NoticeItemProps) => {
    /* usePathname : 현재 URL 경로(값)를 가져옴 */
    const pathname  = usePathname();
    const isForumRoute = pathname === '/forum';
    //console.log('[ForumContainer] usePathname : ', pathname, isForumRoute)

    let title;
    if (pathname === '/announcement') title = '공지사항';
    else if (pathname === '/event') title = '이벤트';
    //console.log(pathname, title)


    const [
        currentPage,
        setCurrentPage
    ] = useState(page);

    const [
        result,
        setResult
    ] = useState<{ posts: Post[]; totalPosts: number }>({ posts: initialPosts, totalPosts });


    useEffect(() => {
        const initialResult = { posts: initialPosts, totalPosts };
        fetch(`/api/post/list?page=${currentPage}&limit=10`)
            .then((response) => response.json())
            .then((result) => {
                //console.log("[ForumContainer] API Response:", result);
                setResult(result);
            })
            .catch((error) => {
                setResult(initialResult);
            });
    }, [currentPage, initialPosts, totalPosts]);


    /* result 객체 내부의 totalPosts 값을 가져와서 10으로 나눈 후 올림하여 전체 페이지 수를 계산
     * 예: totalPosts가 14일 경우, totalPages = 2 */
    const totalPages = Math.ceil(result.totalPosts / 10);


    return (
        <main className={styles.container}>
            {/* 현재 경로가 "/forum"이 아닌 경우에만 "<h1>{title}</h1>"를 렌더링 */}
            {!isForumRoute && <h1 className={styles['notice-title']}>{title}</h1>}

            {/* 커뮤니티 네비게이션, 작설글 리스트 */}
            <div className={styles.contents}>
                {/* 현재 경로가 "/forum"인 경우에만 "ForumSideNavbar"를 렌더링 */}
                {isForumRoute && <ForumSideNavbar/>}
                <ForumItem result={result}/>
            </div>

            {/* 커뮤니티 이전, 다음버튼 */}
            <div className={styles['forum-footer']}>
                <ForumFooter
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>

            {/* 커뮤니티 검색 */}
            <div className={styles['forum-search']}>
                <ForumFooterSearchItems/>
            </div>
        </main>
    );
};

export default ForumContainer;