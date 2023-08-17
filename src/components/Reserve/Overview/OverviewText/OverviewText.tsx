import React from 'react';
import styles from "@/app/(reserve)/reserve/[overview]/ReserveOverview.module.scss";

const OverviewText = ({title, contents}: {title: string, contents: Array<{item: string}>}) => (
    <React.Fragment>
        <div className={styles['overview-text-header']}>{title}</div>
        {contents.map((content, contentIndex) => (
            <div key={contentIndex} className={styles['overview-text-item']}>
                {content.item}
            </div>
        ))}
    </React.Fragment>
);

export default OverviewText;