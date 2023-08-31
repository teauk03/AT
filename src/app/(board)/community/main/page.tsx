import React from "react";
import ForumBody from "@/components/Board/Forum/FormBody/ForumBody";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import SearchForum from "@/components/UI/Input/SearchBox/SearchForum";
import ForumFilter from "@/components/Board/Filter/ForumFilter";
import ForumHeader from "@/components/Board/Forum/ForumHeader/ForumHeader";


export const dynamic: 'force-dynamic' = 'force-dynamic';

/* 커뮤니티 */
const Forum = async () => {
    const PATH = 'post';
    const HREF = 'main';

    return (
        <>
            {/* Header */}
            <ForumHeader/>
            {/* Filter */}
            <ForumFilter/>
            {/* [Body] 게시글 */}
            <ForumBody path={PATH} href={HREF}/>
            {/* [Footer] 커뮤니티 검색 */}
            <SearchForum/>
            {/* [Footer] 페이지 네이션 */}
            <PaginationForum path={PATH}/>
        </>
    );
};

export default Forum;