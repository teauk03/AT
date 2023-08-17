import React from "react";
import fetchPostsData from "@/utils/fetchPostsData";
import ForumContainer from "@/components/Forum/ForumContainer";
import ErrorForum from "@/components/UI/Error/ErrorForum";

export const dynamic: 'force-dynamic' = 'force-dynamic';

/**
 * [게시판] 커뮤니티
 * 지정된 페이지의 포럼 포스트를 불러와 ForumContainer 컴포넌트로 렌더링.
 * @param page - 가져올 포스트가 있는 페이지 번호
 * @returns 포럼의 특정 페이지 내용을 렌더링하는 JSX.Element, 또는 에러 발생 시 에러 메시지를 렌더링하는 JSX.Element
 */
const Forum = async () => {
   return <ForumContainer/>
};

export default Forum;