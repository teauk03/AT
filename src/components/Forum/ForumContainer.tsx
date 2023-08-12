import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumSideNavbar from "@/components/Forum/SLB/ForumSlb";
import ForumItem from "@/components/Forum/ForumItem";
import {NoticeItemProps} from "@/types/Borad";

const ForumContainer = async ({result}: NoticeItemProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <ForumSideNavbar/>
                <ForumItem result={result}/>
            </div>
        </div>
    );
};

export default ForumContainer;