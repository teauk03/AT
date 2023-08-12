import React from "react";
import getAllPostsFromForum from "@/utils/getPostsFromForum";
import ForumContainer from "@/components/Forum/ForumContainer";

export const dynamic: 'force-dynamic' = 'force-dynamic';

const Forum = async (): Promise<JSX.Element> => {
    try {
        const result = await getAllPostsFromForum();
        return (
            <ForumContainer result={result}/>
        )

    } catch (error) {
        return (
            <p>Something went wrong!</p>
        )
    }
};

export default Forum;