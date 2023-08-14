import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import Link from "next/link";
import {ASIDE_FORUM_ITEMS} from "@/data/dataMenuItem";

const ForumSlbMenu = () => {
    /* 임시 Alert 핸들러 */
    const handleNoSymbol = () => {
        alert('준비중 입니다.')
    }

    return (
        <ul className={styles['aside-menu']}>
            {ASIDE_FORUM_ITEMS.map((group, index) => (
                <li key={index} className={styles['aside-item-list']}>
                    <h2 className={styles['aside-item-title']}>{group.title}</h2>
                    {group.items.map((item, idx) => (
                        <div key={idx} className={styles['item-link-wrapper']}>
                            <Link href={item.route} onClick={handleNoSymbol}>
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </li>
            ))}
        </ul>
    )
};

export default ForumSlbMenu;