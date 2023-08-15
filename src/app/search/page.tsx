import React from 'react';
import {connectDB} from "@/utils/mongoDb";
import SearchResult from "@/components/UI/SearchBox/SearcgResult";
import SearchFetchPosts from "@/components/UI/SearchBox/SearchFetchPosts";

const Search = async () => {
    const db = (await connectDB).db("admin_user");
    const postsCollection = db.collection('notice');
    const postsData = await postsCollection.find({}).toArray();

    /* 직렬화 및 역직렬화 */
    const posts = JSON.parse(JSON.stringify(postsData));
    return (
        <>
            <SearchFetchPosts/>
            {/*<SearchResult posts={posts}/>*/}
        </>
    )
};

export default Search;