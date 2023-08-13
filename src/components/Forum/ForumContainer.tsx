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

    const totalPages = Math.ceil(totalPosts / 10);

    useEffect(() => {
        const initialResult = { posts: initialPosts, totalPosts };
        fetch(`/api/post/list?page=${currentPage}&limit=10`)
            .then((response) => response.json())
            .then((result) => {
                setResult(result);
            })
            .catch((error) => {
                setResult(initialResult);
            });
    }, [currentPage, initialPosts, totalPosts]);


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