import React from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";
import {ADMIN_MANAGEMENT_USERS_TYPE} from "@/types/Account";

type COMMENTS_PROPS_TYPE = {
    title: string;
    results: ADMIN_MANAGEMENT_USERS_TYPE[];
}

/* 추후 사용여부 고려 */
const CommentsContainer = ({title, results}: COMMENTS_PROPS_TYPE) => {
    return (
        <section className={styles['grid-container']}>
            <article className={styles['admin-article']}>
                <h1>{title}</h1>
                <div>Test title {results[1].name}</div>
            </article>
        </section>
    );
};

export default CommentsContainer;