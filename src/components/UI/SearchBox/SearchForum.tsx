/** @file 포럼 내에서 검색을 수행하기 위한 SearchBox 컴포넌트 */
'use client'
import React, {useState} from 'react';
import styles from './SearchBox.module.scss';
import SvgIconComponent from "@/components/SvgIconComponent";
import {useRouter, useSearchParams} from "next/navigation";

/* TODO : 임시 인터페이스 */
interface Post {
    _id: string;
    title: string;
}

interface SearchPostQuery {
    title?: { $regex: string; $options: string };
    body?: { $regex: string; $options: string };
    nickname?: { $regex: string; $options: string };
}

/**
 * SearchForum 컴포넌트
 * @param {Object} props - 컴포넌트의 프로퍼티
 * @param {function} props.onSearchResults - 검색 결과를 처리하기 위한 콜백 함수
 */
const SearchForum = ({ onSearchResults }: { onSearchResults: (results: Post[]) => void }) => {
    /* 실제 검색어 저장 */
    const search = useSearchParams();
    const [searchQuery, setSearchQuery] = useState<string | null>(search ? search.get("q") : "")
    const router = useRouter();
    const [searchType, setSearchType] = useState<"title" | "body" | "nickname">("title");

    /**
     * 셀렉트 박스 값 변경 함수
     * @param {React.ChangeEvent<HTMLSelectElement>} e - 변경 이벤트
     */
    const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchType(e.target.value as "title" | "body" | "nickname");
    };

    /**
     * 검색 양식 제출 처리
     * @param {React.FormEvent} e - 양식 이벤트
     */
    const onSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (typeof  searchQuery !== 'string') {
            return;
        }

        const encodeSearchQuery = encodeURI(searchQuery);
        router.push(`/search?type=${searchType}&q=${encodeSearchQuery}`);
    };


    return (
        <form onSubmit={onSearch} className={styles['search-box']}>
            {/* 검색 유형 선택 */}
            <select
                className={styles['forum-footer-select']}
                name="title"
                id="title"
                value={searchType}
                onChange={handleSearchTypeChange}
            >
                <option value="title">제목</option>
                <option value="body">본문</option>
                <option value="nickname">닉네임</option>
            </select>

            {/* 검색 입력 */}
            <input
                className={styles['forum-footer-input']}
                type="text"
                value={searchQuery || ''}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* 검색 버튼 */}
            <button className={styles['forum-search-button']}>
                <SvgIconComponent width={20} height={20} svgPath={'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'}/>
            </button>
        </form>
    );
};

export default SearchForum;