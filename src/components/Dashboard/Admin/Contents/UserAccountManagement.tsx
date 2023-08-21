import React from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";
import {MANAGEMENT_USERS_TYPE} from "@/types/Admin";

type USERS_PROPS_TYPE = {
    title: string;
    results: MANAGEMENT_USERS_TYPE[];
}

/* 추후 사용여부 고려 */
const UserAccountContainer = ({title, results}: USERS_PROPS_TYPE) => {
    return (
        <section className={styles['grid-container']}>
            <article>
                <h1>{title}</h1>
                <div>Test title {results[1].name}</div>
            </article>
        </section>
    );
};

export default UserAccountContainer;