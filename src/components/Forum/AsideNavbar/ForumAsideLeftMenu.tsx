import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import Link from "next/link";
import {ASIDE_FORUM_ITEMS} from "@/data/data-navbar-menu";

const ForumAsideLeftMenu = () => {
    return (
        <ul className={styles['aside-menu']}>
            {ASIDE_FORUM_ITEMS.map((group, index) => (
                <li key={index} className={styles['aside-item-list']}>
                    <h2 className={styles['aside-item-title']}>{group.title}</h2>
                    {group.items.map((item, idx) => (
                        <div key={idx} className={styles['item-link-wrapper']}>
                            <Link href={`/forum/category?division_title=${group.title}&division=${item.title}`}>
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </li>
            ))}
        </ul>
    )
};

export default ForumAsideLeftMenu;