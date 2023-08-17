import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ASIDE_FORUM from "@/data/data-forum-aside.json";
import Link from "next/link";

const ForumAsideLeftMenu = () => {
    return (
        <ul className={styles['aside-menu']}>
            {ASIDE_FORUM.ITEMS.map((group, index) => (
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