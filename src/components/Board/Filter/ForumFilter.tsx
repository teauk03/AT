'use client'
import React from 'react';
import styles from './ForumFilter.module.scss';
import Link from "next/link";
import FILTER from '@/data/data-filter-menu.json';

const ForumFilter = () => {
    return (
        <ul className={styles.filterMenu}>
            {FILTER.MENU.map((item, index) => (
                <li key={index} className={styles.filterItem}>
                    <Link href={item.route}>{item.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default ForumFilter;