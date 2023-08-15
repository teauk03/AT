import React from 'react';
import {connectDB} from "@/utils/mongoDb";
import SearchResult from "@/components/UI/SearchBox/SearcgResult";

/**
 * 검색을 위한 쿼리 파라미터 인터페이스.
 * @interface
 * type: string; - 검색 유형 (예: 'title')
 * q: string; - 검색 쿼리 문자열
 */
interface QueryParams {
    type: string;
    q: string;
}

/**
 * 검색을 위한 쿼리 인터페이스.
 * @interface
 * @params {QueryParams} params - 검색 파라미터.
 * @searchParams {QueryParams} searchParams - 검색 파라미터.
 */
interface Query {
    params: {};
    searchParams: QueryParams;
}

/**
 * 검색 조건 타입 정의.
 * @typedef {Object} SearchCondition
 */
type SearchCondition = {
    [key: string]: { $regex: string; $options: string };
    /* ResultEx : {"title": { "$regex": "검색이요", "$options": "i" }} */
};


/**
 * 검색을 수행하고 결과를 렌더링하는 검색 컴포넌트.
 * @param {Query} query - 검색 파라미터를 포함한 쿼리 객체.
 * @returns {JSX.Element} 검색 결과.
 */
const Search = async (query: Query) => {
    const db = (await connectDB).db("forum");
    const searchType = query.searchParams.type;
    const searchQuery = query.searchParams.q;
    let searchCondition: SearchCondition = {};
    if (searchType === 'title') {
        searchCondition.title = { $regex: searchQuery, $options: 'i' };
    }
    const postsData = await db.collection('post')
        .find(searchCondition).toArray();

    /* 직렬화 및 역직렬화 */
    const posts = JSON.parse(JSON.stringify(postsData));
    return <SearchResult posts={posts} searchQuery={searchQuery}/>
};

export default Search;