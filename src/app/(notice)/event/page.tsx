import React from 'react';
import NoticeContainer from "@/components/Notice/NoticeContainer";
import fetchPostsData from "@/utils/fetchPostsData";
export const dynamic: 'force-dynamic' = 'force-dynamic';


/**
 * 이벤트 페이지를 렌더링
 * @async
 * @param {any} page - 현재 페이지 번호
 * @returns {Promise<JSX.Element>} 이벤트 목록을 렌더링하거나 에러 메시지를 반환합니다.
 */
const Event = async (page: any) => {
    try {
        /* [utils Function] 'post' 컬렉션에서 1 페이지의 10개 포스트 가져오기 */
        const { posts, totalPosts } = await fetchPostsData('notice/event', page);

        /* 가져온 결과를 ForumContainer 컴포넌트로 렌더링 */
        return (
            <NoticeContainer
                result={posts}
                totalPosts={totalPosts}
                page={page}
                path='announcement'
            />
        )

    } catch (error) {
        /*console.error(error);*/
        /* 에러 발생 시 에러 메시지 렌더링 */
        return (
            <p>Something went wrong!</p>
        )
    }
};

export default Event;