'use client'
import React from 'react';
import styles from "@/components/Projects/StudyHome.module.scss";
import AppLink from "@/components/UI/Link/AppLink";
import {StudyPlanListItemType} from "@/types/Project";

const StudyPlanListItem = ({title, items}: StudyPlanListItemType) => {
    return (
        <>
            <ul className={styles['list-item']}>
                <h1 className={styles['item-title']}>{title}</h1>
                {items.map((item, index) => (
                    <li key={index} className={styles.item}>
                        <AppLink href={item.href} label={item.label}/>
                        <p className={styles.complete} style={{color: '#3FCA7D' , display: 'none'}}>
                            Complete
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default StudyPlanListItem;