'use client'
import React, {useState} from 'react';
import styles from './SearchBox.module.scss';
import SvgIconComponent from "@/components/SvgIconComponent";
import Link from "next/link";

/* TODO : 임시 인터페이스 */
interface Post {
    _id: string;
    title: string;
}

const SearchBoxForum = () => {
    const [
        searchType,
        setSearchType
    ] = useState('title');
    const [
        searchQuery,
        setSearchQuery
    ] = useState('');

    /* 검색 결과를 저장할 상태 */
    const [
        searchResults,
        setSearchResults
    ] = useState<Post[]>([]);

    const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSearchType(e.target.value);
    const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);

    const handleSearchPost = () => {
        fetch(`/api/post/search?searchType=${searchType}&searchQuery=${searchQuery}&page=1&limit=10`)
            .then((response) => response.json())
            .then((data) => {
                /* 검색된 게시물을 "setSearchResults"상태에 저장 */
                setSearchResults(data.posts);
            })
            .catch((error) => {
                console.error('검색 중 오류 발생:', error);
            });
    };

    return (
        <div className={styles['search-box']}>
            {/* Search Select */}
            <select
                className={styles['forum-footer-select']}
                name="title"
                id="title"
                value={searchType}
                onChange={handleSearchTypeChange}
            >
                <option value="title">제목</option>
                <option value="title">본문</option>
                <option value="title">닉네임</option>
            </select>

            {/* Search Input */}
            <input
                className={styles['forum-footer-input']}
                type="text"
                value={searchQuery}
                onChange={handleSearchQueryChange}
            />

            {/* Search Button */}
            <button className={styles['forum-search-button']} onClick={handleSearchPost}>
                <SvgIconComponent width={20} height={20} svgPath={'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'}/>
            </button>

            {/* Search Results */}
            <div className={styles['search-results']}>
                {searchResults.length > 0 ? (
                    searchResults.map((post, index) => (
                        <div key={index} className={styles['search-result-item']}>
                            <Link href={`/post/${post._id}`}>
                                {post.title}
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className={styles['no-results']}>검색 결과가 없습니다.</div>
                )}
            </div>
        </div>
    );
};

export default SearchBoxForum;