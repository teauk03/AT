import React from 'react';
import styles from "@/components/Dashboard/Admin/ContentsAdmin/ContentsAdmin.module.scss";

const AdminGridContainer = () => {
    return (
        <section className={styles['grid-container']}>
            <article>article1</article>
            <article>article2</article>
        </section>
    );
};

export default AdminGridContainer;