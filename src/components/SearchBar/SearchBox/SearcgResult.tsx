import React from 'react';
import styles from '@/components/Board/Forum/Forum.module.scss';
import Link from "next/link";
import {MongoPost} from "@/types/Borad";
import ForumHeader from "@/components/Board/Forum/ForumHeader/ForumHeader";
import LeftNavBar from "@/components/UI/Nav/LeftNavBar/LeftNavBar";
import SearchForum from "@/components/SearchBar/SearchBox/SearchForum";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import {AiOutlineUser} from "react-icons/ai";

/**
 * 검색 결과 컴포넌트
 * @param {Object} props
 * @param {Array<MongoPost>} props.posts - 검색 결과로 얻은 게시물 목록
 * @param {string} props.searchQuery - 사용자가 입력한 검색 쿼리
 * @param {string} props.searchType - 검색 유형 (예: 'title')
 * @returns {JSX.Element} 검색 결과 페이지를 렌더링하는 요소
 */
const SearchResult = ({posts, searchQuery, searchType}: {
    posts?: Array<MongoPost>,
    searchQuery: string,
    searchType: string
}) => {
    const PATH = `/search?type=${searchType}&q=${searchQuery}`;

    return (
        <>
            {/* 검색 결과 */}
            <ul className={styles.forumItemContainer}>
                {posts && posts.length > 0 ? (
                    posts.map((post, index) => (
                        <li className={styles.forumList} key={index}>
                            {/* User Title */}
                            <div className={styles.authorWrap}>
                                <AiOutlineUser/>
                                <div className={styles.postAuthor}>
                                    {post.userName}
                                </div>
                            </div>

                            {/* 제목 */}
                            <Link className={styles.titleLink} href={`/forum/${post._id}`}>
                                <h3 className={styles.titleText}>
                                    {post.title}
                                </h3>
                            </Link>
                        </li>
                    ))
                ) : (
                    /* "posts"가 "undefined"인 경우에 대한 처리 */
                    <div className={styles['search-result-fail']}>
                        <p>검색결과가 없습니다.</p>
                    </div>
                )}
            </ul>
            {/* [Footer] 페이지 네이션 */}
            <PaginationForum path={PATH}/>
            {/* [Footer] 커뮤니티 검색 */}
            <SearchForum/>
        </>
    );
};

export default SearchResult;