import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumSideNavbar from "@/components/Forum/SLB/ForumSlb";
import ForumItem from "@/components/Forum/ForumItem";
import {NoticeItemProps} from "@/types/Borad";
import ForumFooter from "@/components/Forum/ForumFooter";
import ForumSearch from "@/components/Forum/ForumSearch";
import ForumSelect from "@/components/Forum/ForumSelect";

const ForumContainer = async ({result}: NoticeItemProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <ForumSideNavbar/>
                <ForumItem result={result}/>
            </div>
            <div className={styles['forum-footer']}>
                <ForumFooter/>
            </div>
            <div className={styles['forum-search']}>
                <ForumSelect/>
                <ForumSearch/>
            </div>
        </div>
    );
};

export default ForumContainer;