'use client'
import React from 'react';
import styles from "@/components/Board/Forum/ForumItem.module.scss";
import Link from "next/link";
import useNewPostHandler from "@/hooks/Board/useNewPostAuth";
import {IoCreateOutline} from "react-icons/io5";

const ForumHeader = (
    /*{searchQuery}: {searchQuery: string}*/
) => {
    /* 새 게시물 작성 버튼 */
    const handleNewPostOnClick = useNewPostHandler();

    return (
        <div className={styles.forumHeader}>
            <h2 className={styles.headerTitle}>
                <Link href={'/forum'}>커뮤니티</Link>
            </h2>

            {/* Search & Write Menu */}
            <div className={styles['forum-sub-title']}>
                {/*다음에 대한 결과 표시: <span className={styles['search-result']}>
                {searchQuery}
                </span>*/}

                {/* Create Write : Routing(../write) */}
                <Link className={styles['forum-link-button']} href={'/write'} onClick={handleNewPostOnClick}>
                    <IoCreateOutline/>
                    <span>글작성</span>
                </Link>
            </div>
        </div>
    );
};

export default ForumHeader;