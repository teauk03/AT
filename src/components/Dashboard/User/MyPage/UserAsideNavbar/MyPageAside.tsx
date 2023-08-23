'use client'
import React from 'react';
import styles from "@/components/Dashboard/User/MyPage/MyPage.module.scss";
import Link from "next/link";
import useUnderDevelopmentPopup from "@/hooks/useUnderDevelopmentPopup";
import {UserProfileData} from "@/types/Account";

const MyPageAside = ({user}: UserProfileData) => {
    const { handleClick } = useUnderDevelopmentPopup();

    return (
        <aside className={styles['aside-left']}>
            <ul className={styles['aside-menu']}>
                <h1 className={styles['aside-title']}>메뉴</h1>
                <li><Link className={styles.link} href={`/user/mypage/${user.name}`}>마이페이지</Link></li>
                <li><Link className={styles.link} href={'/'} onClick={handleClick}>내기록</Link></li>
            </ul>

            <ul className={styles['aside-menu']}>
                <h1 className={styles['aside-title']}>팔로우</h1>
                <li>0</li>
            </ul>
        </aside>
    );
};

export default MyPageAside;