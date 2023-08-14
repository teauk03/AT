import React from 'react';
import ForumAllLayout from "@/components/Forum/ForumAllLayout";
import NoticeNavigation from "@/components/Notice/NoticeNavigation";

/* 공지사항 */
const Announcement = () => {
    return (
        <>
            <NoticeNavigation/>
            <ForumAllLayout/>
        </>
    );
};

export default Announcement;