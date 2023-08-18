import React from 'react';
import styles from '@/components/Board/Forum/DetailPage/DetailsPage.module.scss';

const DetailsMainContents = ({ title, content }: { title: string, content: string }) => (
    <div className={styles.contents}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles['main-text']}>{content}</p>
    </div>
);

export default DetailsMainContents;