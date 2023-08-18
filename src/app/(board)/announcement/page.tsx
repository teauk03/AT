import React from 'react';
import NoticeContainer from "@/components/Board/Notice/NoticeContainer";

export const dynamic: 'force-dynamic' = 'force-dynamic';


/* 공지사항 페이지 : http://localhost:3000/announcement/[id]: 64db1383cc7cfe6a2212af11 */
const Announcement = async () => {
    return <NoticeContainer/>
};

export default Announcement;