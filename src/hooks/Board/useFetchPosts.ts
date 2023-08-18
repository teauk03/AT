'use client'
import {Post} from "@/types/Borad";
import {useEffect, useState} from "react";

/**
 * 포스트 목록을 가져오는 커스텀 훅
 * @param {string} url API 엔드포인트 URL
 * @param {number} initialPage 초기 페이지 번호
 * @param {Post[]} initialPosts 초기 포스트 배열
 * @param {number} totalPosts 전체 포스트 수
 * @returns {{
 *   currentPage: number,
 *   result: { posts: Post[], totalPosts: number },
 *   totalPages: number,
 *   setCurrentPage: (page: number) => void
 * }}
 */
const useFetchPosts = (url: string, initialPage: number, initialPosts: Post[], totalPosts: number)=> {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [result, setResult] = useState<{ posts: Post[]; totalPosts: number }>({
        posts: initialPosts,
        totalPosts,
    });

    useEffect(() => {
        const initialResult = { posts: initialPosts, totalPosts };
        fetch(`${url}?page=${currentPage}&limit=10`)
            .then((response) => response.json())
            .then((result) => setResult(result))
            .catch((error) => setResult(initialResult));
    }, [currentPage, initialPosts, totalPosts, url]);

    const totalPages = Math.ceil(result.totalPosts / 10);

    return {
        currentPage, result, totalPages, setCurrentPage,
    };
};

export default useFetchPosts;