'use client'
import React from 'react';
import styles from './NoticeComponent.module.scss';
import {usePathname} from "next/navigation";
import Link from "next/link";

const NoticeHeader = () => {
    /* usePathname : 현재 URL 경로(값)를 가져옴 */
    const pathname = usePathname();
    const isForumRoute = pathname === '/forum';

    let title;
    if (pathname === '/announcement') title = '공지사항';
    else if (pathname === '/event') title = '이벤트';
    //console.log(pathname, title)

    return (
        <>
            <nav className={styles['navigation']}>
                <ul className={styles['navigation-menu']}>
                    <li className={styles['navigation-menu-item']}>
                        <Link href={'/announcement'}>공지사항</Link>
                    </li>
                    <li className={styles['navigation-menu-item']}>
                        <Link href={'/event'}>이벤트</Link>
                    </li>
                </ul>
            </nav>

            {/* 현재 경로가 "/forum"이 아닌 경우에만 "<h1>{title}</h1>"를 렌더링 */}
            {!isForumRoute &&
                <div className={styles['notice-container']}>
                    <h1 className={styles['notice-title']}>{title}</h1>
                </div>
            }
        </>
    );
};

export default NoticeHeader;