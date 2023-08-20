import React from 'react';
import styles from "@/components/Dashboard/Admin/ContentsAdmin/ContentsAdmin.module.scss";

type MANAGEMENT_PROPS_TYPE = {
    title: string;
}

/* 추후 사용여부 고려 */
const ForumGridContainer = ({title}: MANAGEMENT_PROPS_TYPE) => {
    return (
        <section className={styles['grid-container']}>
            <article>
                <h1>{title}</h1>
            </article>
        </section>
    );
};

export default ForumGridContainer;