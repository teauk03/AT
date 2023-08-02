import React from "react";

import {getPosts} from "@/utils/getPostsFromForum";
import NoticeItem from "@/components/Notice/NoticeItem";
import NoticeClientNavbar from "@/components/Notice/LNB/NoticeNavbar";

import styles from './notice.module.scss';
export const dynamic: string = 'force-dynamic';

const Notice = async (): Promise<JSX.Element> => {
    try {
        const result = await getPosts();

        return (
            <main className={styles.container}>
                <div className={styles.contents}>
                    <NoticeClientNavbar />
                    <NoticeItem result={result}/>
                </div>
            </main>
        );
    } catch (error) {
        console.error(`Notice Page Error : ${error}`);
        return <p>Something went wrong!</p>
    }
};

export default Notice;