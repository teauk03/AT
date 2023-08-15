'use client'
import useSWR from "swr";
import React from "react";
import {useRouter, useSearchParams} from "next/navigation";
import SearchResult from "./SearcgResult";
import LoadingForum from "@/components/UI/Loading/LoadingForum";

const fetchPosts = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    return response.json();
};

const SearchFetchPosts = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const searchQuery = searchParams ? searchParams.get("q") : null;
    const encodedSearchQuery = encodeURI(searchQuery || "");

    const {data, isLoading} = useSWR(
        `/api/post/search?q=${encodedSearchQuery}`,
        fetchPosts,
        {revalidateOnFocus: false}
    );

    if (!encodedSearchQuery) {
        router.push("/");
    }

    if (isLoading) {
        return <LoadingForum/>;
    }

    if (!data?.posts) {
        return null;
    }

    console.log(data.posts)

    return (
        <>
            <span style={{textAlign: 'center'}}>
                다음에 대한 결과 표시: <span className="font-semibold">{searchQuery}</span>
            </span>
            <SearchResult posts={data.posts}/>
        </>
    );
};

export default SearchFetchPosts;