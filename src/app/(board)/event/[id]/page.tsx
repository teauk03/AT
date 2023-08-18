import React from "react";
import styles from '@/components/Board/Forum/DetailPage/DetailsPage.module.scss';

import {connectDB} from "@/utils/mongoDb";
import {ObjectId} from "mongodb";

import Comment from "@/components/Board/Comment/Comment";
import DetailsIndex from "@/components/Board/Forum/DetailPage/DetailsIndex";
import LoadingForum from "@/components/UI/Loading/LoadingForum";

import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const NoticePost = async (props: any): Promise<JSX.Element> => {
    const USER_SESSION = await getServerSession(authOptions);
    const db = (await connectDB).db("admin_user")
    let result = await db.collection('event').findOne({
        _id: new ObjectId(props.params.id)
    })
    console.log(result)
    if (!result) return <LoadingForum/>;

    return (
        <main className={styles.container}>
            <DetailsIndex
                result={result}
                USER_SESSION={USER_SESSION}
            />
            <Comment _id={result._id.toString()}/>
        </main>
    )
}

export default NoticePost;