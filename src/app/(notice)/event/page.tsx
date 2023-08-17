import React from 'react';
import NoticeContainer from "@/components/Forum/Notice/NoticeContainer";
import fetchPostsData from "@/utils/fetchPostsData";
import ErrorForum from "@/components/UI/Error/ErrorForum";
export const dynamic: 'force-dynamic' = 'force-dynamic';


/**
 * 이벤트 페이지를 렌더링
 * @async
 * @param {any} page - 현재 페이지 번호
 * @returns {Promise<JSX.Element>} 이벤트 목록을 렌더링하거나 에러 메시지를 반환합니다.
 */
const Event = async () => {
    return <NoticeContainer/>
};

export default Event;