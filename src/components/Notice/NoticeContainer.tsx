import React from 'react';
import styles from "@/components/Notice/NoticeComponent.module.scss";
import NoticeNavigation from "@/components/Notice/NoticeNavigation";
import ForumAllLayout from "@/components/Forum/ForumAllLayout";

const NoticeContainer = () => {
    return (
        <div className={styles['content-container']}>
            <NoticeNavigation/>
            <ForumAllLayout/>
        </div>
    );
};

export default NoticeContainer;