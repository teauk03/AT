import React from 'react';
import styles from './NoticeComponent.module.scss';
import Link from "next/link";

const NoticeNavigation = () => {
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
        </>
    );
};

export default NoticeNavigation;