import React from 'react';
import styles from "@/components/User/MyPage/MyPage.module.scss";
import Link from "next/link";

const MyPageAsideRight = () => {
    return (
        <aside className={styles['aside-right']}>
            <h1>팔로우</h1>
            <ul>
                <li><Link className={styles.link} href={'/'}>마이페이지</Link></li>
                <li><Link className={styles.link} href={'/'}>내기록</Link></li>
            </ul>
        </aside>
    );
};

export default MyPageAsideRight;