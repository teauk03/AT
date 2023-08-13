import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import {NoticeItemProps} from "@/types/Borad";
import ForumSideNavbar from "@/components/Forum/SLB/ForumSlb";
import ForumItem from "@/components/Forum/ForumItem";
import ForumFooter from "@/components/Forum/ForumFooter";
import ForumSearch from "@/components/Forum/ForumSearch";
import ForumSelect from "@/components/Forum/ForumSelect";


/* TODO
    1. 포럼내 검색 기능 (API & Front)
    2. 포럼내 게시글 노출 (Max 10, API & Front Refactoring)
*/
const ForumContainer = async ({result}: NoticeItemProps) => {
    return (
        <div className={styles.container}>
            {/* 커뮤니티 네비게이션, 작설글 리스트 */}
            <div className={styles.contents}>
                <ForumSideNavbar/>
                <ForumItem result={result}/>
            </div>

            {/* 커뮤니티 이전, 다음버튼 */}
            <div className={styles['forum-footer']}>
                <ForumFooter/>
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