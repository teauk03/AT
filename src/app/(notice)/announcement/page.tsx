import React from 'react';
import NoticeContainer from "@/components/Notice/NoticeContainer";
import fetchPostsData from "@/utils/fetchPostsData";
import ErrorForum from "@/components/UI/Error/ErrorForum";
export const dynamic: 'force-dynamic' = 'force-dynamic';


/* 공지사항 */
const Announcement = async (page: any) => {
    try {
        /* [utils Function] 'post' 컬렉션에서 1 페이지의 10개 포스트 가져오기 */
        const { posts, totalPosts } = await fetchPostsData('notice/announcement', page);

        /* 가져온 결과를 ForumContainer 컴포넌트로 렌더링 */
        return (
            <NoticeContainer
                result={posts}
                totalPosts={totalPosts}
                page={page}
                path='event'
            />
        )

    } catch (error) {
        /*console.error(error);*/
        /* 에러 발생 시 에러 메시지 렌더링 */
        return (
            <ErrorForum/>
        )
    }
};

export default Announcement;