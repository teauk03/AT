import React from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";
import {ADMIN_MANAGEMENT_POSTS_TYPE} from "@/types/Account";

type FORUM_PROPS_TYPE = {
    title: string;
    results: ADMIN_MANAGEMENT_POSTS_TYPE[];
}

/* 추후 사용여부 고려 */
const ForumContainer = ({title, results}: FORUM_PROPS_TYPE) => {
    return (
        <section className={styles['grid-container']}>
            <article>
                <h1>{title}</h1>
                <div>Test title {results[1].title}</div>
            </article>
        </section>
    );
};

export default ForumContainer;