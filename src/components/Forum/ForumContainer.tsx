'use client'
import React, {useEffect, useState} from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumSideNavbar from "@/components/Forum/SLB/ForumSlb";
import ForumItem from "@/components/Forum/ForumItem";
import ForumFooter from "@/components/Forum/ForumFooter";
import {NoticeItemProps, Post} from "@/types/Borad";
import ForumFooterSearchItems from "@/components/Forum/ForumFooterSearchItems";


const ForumContainer = ({ result: initialPosts, totalPosts, page }: NoticeItemProps) => {
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
                console.log("API Response:", result);
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
        <div className={styles.container}>
            {/* 커뮤니티 네비게이션, 작설글 리스트 */}
            <div className={styles.contents}>
                <ForumSideNavbar/>
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
        </div>
    );
};

export default ForumContainer;