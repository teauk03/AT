'use client'
import React from 'react';
import styles from "@/components/Dashboard/User/MyPage/MyPage.module.scss";
import Link from "next/link";
import useUnderDevelopmentPopup from "@/hooks/useUnderDevelopmentPopup";

const MyPageAside = () => {
    const { handleClick } = useUnderDevelopmentPopup();

    return (
        <aside className={styles['aside-left']}>
            <h1>메뉴</h1>
            <ul>
                <li><Link className={styles.link} href={'/'}>마이페이지</Link></li>
                <li><Link className={styles.link} href={'/'} onClick={handleClick}>내기록</Link></li>
            </ul>
        </aside>
    );
};

export default MyPageAside;