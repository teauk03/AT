import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import {MenuItem} from "@/types/Navigation";
import Link from "next/link";
import {SLB_FORUM_ITEMS} from "@/data/dataMenuItem";

const ForumSlbMenu = () => {
    /* 임시 Alert 핸들러 */
    const handleNoSymbol = () => {
        alert('준비중 입니다.')
    }

    return (
        <ul className={styles.menu}>
            <h2 className={styles['sub-title']}>Topic</h2>
            {SLB_FORUM_ITEMS.map((item: MenuItem, index: number) => (
                <li key={index} className={styles.item}>
                    <Link href={item.route} onClick={handleNoSymbol}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
};

export default ForumSlbMenu;