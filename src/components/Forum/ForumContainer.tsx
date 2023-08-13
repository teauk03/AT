'use client'
import React, {useEffect, useState} from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumSideNavbar from "@/components/Forum/SLB/ForumSlb";
import ForumItem from "@/components/Forum/ForumItem";
import ForumFooter from "@/components/Forum/ForumFooter";
import ForumSearch from "@/components/Forum/ForumSearch";
import ForumSelect from "@/components/Forum/ForumSelect";
import {NoticeItemProps, Post} from "@/types/Borad";


/* TODO
    1. 포럼내 검색 기능 (API & Front)
*/
const ForumContainer = ({ result: NoticeItemProps, totalPosts, page }: { result: Post[], totalPosts: number, page: number }) => {
    console.log('totalPosts:', totalPosts);
    const [currentPage, setCurrentPage] = useState(page);
    const [result, setResult] = useState<Post[] | null>(NoticeItemProps);
    const totalPages = Math.ceil(totalPosts / 10);

    useEffect(() => {
        fetch(`/api/post/list?page=${currentPage}&limit=10`)
            .then((response) => response.json())
            .then((result) => {
                setResult(result);
            })
            .catch((error) => {
                setResult(null);
            });
    }, [currentPage]);

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
                <ForumSelect/>
                <ForumSearch/>
            </div>
        </div>
    );
};

export default ForumContainer;