import React from 'react';
import styles from "@/app/(reserve)/reserve/[overview]/ReserveOverview.module.scss";

const OverviewExplainContent = ({title, subtitle}: {title: string, subtitle: string}) => (
    <ul className={styles['explain-contents']}>
        <li className={styles['explain-title']}>{title}</li>
        <li className={styles['explain-subtitle']}>{subtitle}</li>
    </ul>
);

export default OverviewExplainContent;