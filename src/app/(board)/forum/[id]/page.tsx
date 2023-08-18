import React from "react";
import styles from '@/components/Board/Forum/DetailPage/DetailsPage.module.scss';
import Comment from "@/components/Board/Comment/Comment";
import DetailsIndex from "@/components/Board/Forum/DetailPage/DetailsIndex";
import LoadingForum from "@/components/UI/Loading/LoadingForum";
import fetchCollectionItem from "@/utils/DB/fetchCollectionItem";

const ForumPost = async (props: any): Promise<JSX.Element> => {
    /* fetchCollectionItem : DB 컬렉션을 조회하고 처리 유틸함수 */
    const { result, USER_SESSION } = await fetchCollectionItem("forum","post", props.params.id);

    if (!result) return <LoadingForum/>;

    return (
        <main className={styles.container}>
            <DetailsIndex result={result} USER_SESSION={USER_SESSION}/>
            <Comment _id={result._id.toString()}/>
        </main>
    )
}

export default ForumPost;