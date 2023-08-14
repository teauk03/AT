'use client'
import React from 'react';
import styles from './NoticeComponent.module.scss';
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import Link from "next/link";

const NoticeHeader = () => {
    /* useSession : 유저의 세션정보를 가져옴 */
    const {data: session} = useSession();
    const isAdmin = session?.user?.role === 'admin';

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

            {/* 현재 경로가 "/forum"이 아닌 경우에만 요소를 렌더링 */}
            {!isForumRoute &&
                <div className={styles['notice-container']}>
                    <h1 className={styles['notice-title']}>{title}</h1>
                    {/* 어드민 계정만 글작성 노출 */}
                    {isAdmin && <Link className={styles['notice-new-post']} href={'/write'}>글작성</Link>}
                </div>
            }
        </>
    );
};

export default NoticeHeader;