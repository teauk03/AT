'use client'
import React from 'react';
import styles from "@/components/Board/Forum/ForumItem.module.scss";
import Link from "next/link";
import SvgIconComponent from "@/components/SvgIconComponent";
import useNewPostHandler from "@/hooks/Board/useNewPostAuth";

const ForumHeader = (
    /*{searchQuery}: {searchQuery: string}*/
) => {
    /* 새 게시물 작성 버튼 */
    const handleNewPostOnClick = useNewPostHandler();

    return (
        <div className={styles['forum-header']}>
            <h2 className={styles['forum-header-title']}>
                <Link href={'/forum'}>커뮤니티</Link>
            </h2>

            {/* Search & Write Menu */}
            <div className={styles['forum-sub-title']}>
                {/*다음에 대한 결과 표시: <span className={styles['search-result']}>
                {searchQuery}
                </span>*/}

                {/* Create Write : Routing(../write) */}
                <Link className={styles['forum-link-button']} href={'/write'} onClick={handleNewPostOnClick}>
                    <SvgIconComponent width={20} height={20} svgPath={'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'}/>
                    글작성
                </Link>
            </div>
        </div>
    );
};

export default ForumHeader;