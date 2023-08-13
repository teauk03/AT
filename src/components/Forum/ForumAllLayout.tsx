import React from 'react';
import ForumContainer from "@/components/Forum/ForumContainer";
export const dynamic: 'force-dynamic' = 'force-dynamic';

// TODO : 빌드를 위한 임시 타입  page: any
/**
 * 지정된 페이지의 포럼 포스트를 불러와 ForumContainer 컴포넌트로 렌더링.
 * @param page - 가져올 포스트가 있는 페이지 번호
 * @returns 포럼의 특정 페이지 내용을 렌더링하는 JSX.Element, 또는 에러 발생 시 에러 메시지를 렌더링하는 JSX.Element
 */
const ForumAllLayout = async (page: any) => {
    try {
        /* 'post' 컬렉션에서 1 페이지의 10개 포스트 가져오기 */
        const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';
        const response = await fetch(`${SITE_URL}/api/post/list?page=${page}&limit=10`);
        const result = await response.json();
        const totalPosts = result.totalPosts;


        /* 가져온 결과를 ForumContainer 컴포넌트로 렌더링 */
        return (
            <ForumContainer
                result={result.posts}
                totalPosts={totalPosts}
                page={page}
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

export default ForumAllLayout;