'use client'
import React from 'react';
import styles from "./LeftNavBar.module.scss";
import Link from "next/link";
import {usePathname} from "next/navigation";
import ASIDE_FORUM from "@/data/data-forum-aside.json";

const LeftNavBar = () => {
    /* usePathname : 현재 URL 경로(값)를 가져옴 */
    const pathname  = usePathname();
    const isForumRoute = pathname === '/announcement' && '/event';

    return (
        <>
            {!isForumRoute && (
                <aside className={styles.snb} role="sub-navigation">
                    <ul className={styles.snbMenu}>
                        <li className={styles.snbList}>
                            <h2 className={styles.snbTitle}>매장소식</h2>
                            <div className={styles.linkWrapper}>
                                <Link href={`/announcement`}>
                                    공지사항
                                </Link>
                            </div>
                            <div className={styles.linkWrapper}>
                                <Link href={`/event`}>
                                    이벤트
                                </Link>
                            </div>
                        </li>
                    </ul>
                    {/* Sub Menu */}
                    <ul className={styles.snbMenu}>
                        {ASIDE_FORUM.ITEMS.map((group, index) => (
                            <li key={index} className={styles.snbList}>
                                <h2 className={styles.snbTitle}>{group.title}</h2>
                                {group.items.map((item, idx) => (
                                    <div key={idx} className={styles.linkWrapper}>
                                        <Link href={`/forum/category?division_title=${group.title}&division=${item.title}`}>
                                            {item.title}
                                        </Link>
                                    </div>
                                ))}
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
        </>
    );
};

export default LeftNavBar;